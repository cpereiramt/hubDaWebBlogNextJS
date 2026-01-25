---
title: 'Deploy de um Microserviço Spring Boot na AWS com Docker, ECR e CI/CD'
date: '2026-01-24'
tags: ['java', 'programacao', 'spring-boot', 'aws']
---

Este tutorial consolidado trás configurações para deploy de uma aplicação em spring boot, cobrindo os problemas reais normalmente encontrados durante o processo e como resolvê-los corretamente.

O resultado é um **pipeline estável**, alinhado com boas práticas de mercado, usando **Spring Boot + Gradle + Java 21**, **Docker**, **Amazon ECR**, **EC2**, **GitHub Actions** e **IAM Role** (sem credenciais fixas na instância).

---

## 🏗 Arquitetura Final

```
GitHub Actions
  ├─ Build Gradle (Java 21)
  ├─ Build Docker
  ├─ Push imagem para ECR
  ↓
EC2
  ├─ Autenticação via IAM Role
  ├─ docker login no ECR
  ├─ docker pull
  └─ Container Spring Boot em execução
```

---

## 🧱 Pré-requisitos

- Conta AWS
- Projeto Spring Boot com **Gradle**
- Java **21**
- Docker
- Repositório GitHub

---

## 1️⃣ Projeto Spring Boot (Gradle + Java 21)

Estrutura obrigatória:

```
project-root/
 ├── gradlew
 ├── gradlew.bat
 ├── gradle/wrapper/
 │   ├── gradle-wrapper.jar
 │   └── gradle-wrapper.properties
 ├── build.gradle
 └── src/
```

### Gradle – Toolchain Java 21

```groovy
java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(21)
    }
}
```

---

## 2️⃣ Dockerfile (Java 21)

```dockerfile
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","/app/app.jar"]
```

---

## 3️⃣ Amazon ECR

Criar repositório:

```bash
aws ecr create-repository \
  --repository-name spring-boot-app \
  --region us-east-1
```

Exemplo:

```
123456789012.dkr.ecr.us-east-1.amazonaws.com/spring-boot-app
```

---

## 4️⃣ IAM – Configuração Correta (Ponto Crítico)

### 4.1 Role da EC2 (OBRIGATÓRIA)

Crie uma IAM Role com:

- Trusted entity: **EC2**
- Policies anexadas:

  - `AmazonEC2ContainerRegistryReadOnly`
  - (opcional) `AmazonSSMManagedInstanceCore`

### 4.2 Anexar Role na EC2

EC2 → Instances → selecione a instância →

**Actions → Security → Modify IAM role → selecione a role**

### 4.3 Validar na EC2

```bash
aws sts get-caller-identity
```

Se retornar um ARN `assumed-role`, a role está funcionando.

---

## 5️⃣ Acesso SSH (Somente para Deploy)

- Usuário padrão Amazon Linux: `ec2-user`
- O acesso depende do arquivo:

```bash
~/.ssh/authorized_keys
```

> A EC2 usa **chaves públicas**, nunca o `.pem` diretamente.

### Inserindo nova chave `.pem`

No seu computador:

```bash
ssh-keygen -y -f github-key-ssh.pem > github-key-ssh.pub
```

Na EC2:

```bash
nano ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

---

## 6️⃣ GitHub Actions – Secrets Necessários

<table>
  <thead>
    <tr>
      <th>Secret</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><code>AWS_ACCESS_KEY_ID</code></td><td>Credencial AWS (CI)</td></tr>
    <tr><td><code>AWS_SECRET_ACCESS_KEY</code></td><td>Credencial AWS (CI)</td></tr>
    <tr><td><code>AWS_REGION</code></td><td>us-east-1</td></tr>
    <tr><td><code>ECR_REGISTRY</code></td><td>Registry do ECR</td></tr>
    <tr><td><code>ECR_REPOSITORY</code></td><td>URI completa da imagem</td></tr>
    <tr><td><code>EC2_HOST</code></td><td>IP público atual da EC2</td></tr>
    <tr><td><code>EC2_USER</code></td><td>ec2-user</td></tr>
    <tr><td><code>EC2_SSH_KEY</code></td><td>Conteúdo da chave privada OpenSSH</td></tr>
  </tbody>
</table>

⚠️ Se a EC2 for **Stop/Start**, o IP muda. Atualize `EC2_HOST`.

---

## 7️⃣ GitHub Actions – Workflow Final

`.github/workflows/deploy.yml`

```yaml
name: CI/CD Spring Boot AWS

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-java@v4
        with:
          distribution: temurin
          java-version: '21'

      - name: Grant execute permission for Gradle Wrapper
        run: chmod +x gradlew

      - name: Build with Gradle
        run: ./gradlew clean build -x test

      - uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: Login to ECR
        run: |
          aws ecr get-login-password --region ${{ secrets.AWS_REGION }} \
          | docker login --username AWS --password-stdin ${{ secrets.ECR_REGISTRY }}

      - name: Build and push image
        run: |
          docker build -t app .
          docker tag app:latest ${{ secrets.ECR_REPOSITORY }}:latest
          docker push ${{ secrets.ECR_REPOSITORY }}:latest

      - name: Deploy on EC2
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USER }}
          key: ${{ secrets.EC2_SSH_KEY }}
          timeout: 60s
          script: |
            set -e
            aws ecr get-login-password --region ${{ secrets.AWS_REGION }} \
              | docker login --username AWS --password-stdin ${{ secrets.ECR_REGISTRY }}
            docker pull ${{ secrets.ECR_REPOSITORY }}:latest
            docker stop app || true
            docker rm app || true
            docker run -d --restart unless-stopped --name app -p 8080:8080 ${{ secrets.ECR_REPOSITORY }}:latest
```

---

## 8️⃣ Erros Reais Resolvidos

- `Permission denied (gradlew)` → `chmod +x gradlew`
- `GradleWrapperMain not found` → wrapper versionado
- `Server refused our key` → chave pública no `authorized_keys`
- `Unable to locate credentials` → IAM Role na EC2
- IP mudou após restart → atualizar `EC2_HOST`

---

## 📌 Conclusão

Este guia reflete um **setup real de produção**, incluindo erros comuns e correções corretas. Seguindo esses passos, o deploy torna-se **reprodutível, seguro e estável**.

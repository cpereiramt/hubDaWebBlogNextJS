---
title: 'Configuração do OAuth2 para Autenticar pelo Google em um Projeto Spring Boot'
date: '2024-06-25'
tags: ['JAVA', 'SPRING BOOT']
---

Sumário
Introdução ao OAuth2
Pré-requisitos
Criando um Projeto Spring Boot
Configurando o Google API Console
Configurando o Spring Security OAuth2
Implementando os Endpoints da API
Testando a Autenticação
Considerações Finais

### Introdução ao OAuth2

OAuth2 é um protocolo de autorização que permite que aplicações obtenham acesso limitado a recursos de um usuário em um servidor HTTP. A autenticação via Google é um exemplo comum, onde um usuário pode utilizar sua conta Google para fazer login em uma aplicação de terceiros.

### Pré-requisitos

Antes de começarmos, certifique-se de ter o seguinte:

JDK 11 ou superior
Maven ou Gradle
Conta no Google Cloud Platform
IDE de sua escolha (IntelliJ, Eclipse, VS Code, etc.)
Criando um Projeto Spring Boot
Inicialize um novo projeto Spring Boot usando Spring Initializr:

Acesse Spring Initializr e configure seu projeto com as seguintes dependências:

Spring Web
Spring Security
Spring OAuth2 Client
Clique em "Generate" para baixar o projeto.

Importe o projeto em sua IDE.

### Estrutura básica do projeto:

```
css
Copy code
src
├── main
│   ├── java
│   │   └── com
│   │       └── example
│   │           └── oauth2google
│   │               ├── Oauth2GoogleApplication.java
│   └── resources
│       ├── application.properties
└── test
```

### Configurando o Google API Console

Crie um novo projeto no Google Cloud Console:
Acesse Google Cloud Console e crie um novo projeto.

### Ative a API Google+ e OAuth2:

No menu "API & Services", habilite as APIs necessárias para OAuth2.

### Configure as credenciais OAuth2:

No menu "Credentials", clique em "Create Credentials" e selecione "OAuth 2.0 Client IDs".
Configure a tela de consentimento OAuth.
Adicione um novo Client ID, configurando o tipo de aplicação como "Web Application".
Defina o URI de redirecionamento (exemplo: http://localhost:8080/login/oauth2/code/google).
Anote o Client ID e o Client Secret.

### Configurando o Spring Security OAuth2

Adicione as propriedades do Google OAuth2 no application.properties:

```bash

spring.security.oauth2.client.registration.google.client-id=YOUR_GOOGLE_CLIENT_ID
spring.security.oauth2.client.registration.google.client-secret=YOUR_GOOGLE_CLIENT_SECRET
spring.security.oauth2.client.registration.google.redirect-uri=http://localhost:8080/login/oauth2/code/google
spring.security.oauth2.client.registration.google.scope=profile, email
spring.security.oauth2.client.provider.google.authorization-uri=https://accounts.google.com/o/oauth2/auth
spring.security.oauth2.client.provider.google.token-uri=https://oauth2.googleapis.com/token
spring.security.oauth2.client.provider.google.user-info-uri=https://www.googleapis.com/oauth2/v3/userinfo
```

### Configure o SecurityConfig:

```java

package com.example.oauth2google;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authorizeRequests ->
                authorizeRequests
                    .requestMatchers("/", "/login**", "/error").permitAll()
                    .anyRequest().authenticated()
            )
            .oauth2Login(oauth2Login ->
                oauth2Login
                    .defaultSuccessUrl("/home")
                    .failureUrl("/login?error=true")
            );
        return http.build();
    }
}
```

### Implementando os Endpoints da API

Crie o controlador para gerenciar as requisições:

```java

package com.example.oauth2google;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class UserController {

    @GetMapping("/user")
    public Map<String, Object> user(@AuthenticationPrincipal OAuth2User principal) {
        return principal.getAttributes();
    }

    @GetMapping("/home")
    public String home() {
        return "Welcome home!";
    }

    @GetMapping("/")
    public String index() {
        return "Welcome to the home page!";
    }
}
```

### Testando a Autenticação

Execute a aplicação:
No terminal, navegue até a raiz do projeto e execute:

```sh
./mvnw spring-boot:run
```

Ou, se estiver usando Gradle:

```sh
./gradlew bootRun
```

### Acesse o endpoint de autenticação:

Abra o navegador e vá para http://localhost:8080. Você deve ver a página inicial sem precisar se autenticar. Clique no link de login e você será redirecionado para a página de autenticação do Google.

### Teste os endpoints da API:

Após autenticar, você pode acessar o endpoint /user para ver as informações do usuário autenticado.

### Considerações Finais

Configurar OAuth2 com Google em um projeto Spring Boot pode parecer desafiador inicialmente, mas com as etapas detalhadas acima, torna-se um processo mais gerenciável. A segurança adicional e a experiência simplificada para o usuário final fazem com que valha a pena o esforço.

Esse post deve fornecer uma compreensão clara e prática sobre a configuração do OAuth2 usando o Google em um projeto Spring Boot. Caso tenha dúvidas ou precise de mais detalhes, não hesite em deixar um comentário!

---
title: 'Entendendo Transações de Banco de Dados e Níveis de Isolamento no Node.js'
date: '2024-05-31'
tags: ['node-js', 'javascript', 'sequelize']
---

# DB transactions or isolation levels

As transações de banco de dados são um conceito fundamental para garantir a integridade e consistência dos dados em sistemas de software. Neste post, exploraremos o que são transações de banco de dados, seus níveis de isolamento e como implementá-las no Node.js com exemplos práticos. Este guia é ideal para desenvolvedores que desejam aprofundar seu conhecimento em transações e melhorar a confiabilidade de suas aplicações.

### O Que São Transações de Banco de Dados?

Uma transação de banco de dados é uma sequência de operações executadas como uma única unidade lógica de trabalho. As transações seguem o princípio ACID, que significa:

- **Atomicidade**: Todas as operações dentro de uma transação devem ser completadas com sucesso; caso contrário, a transação é abortada e nenhuma operação tem efeito.
- **Consistência**: As transações levam o banco de dados de um estado válido para outro estado válido.
- **Isolamento**: As operações dentro de uma transação são isoladas de outras transações simultâneas.
- **Durabilidade**: Uma vez que uma transação é confirmada, suas mudanças são permanentes, mesmo em caso de falhas no sistema.

### Níveis de Isolamento

Os níveis de isolamento determinam o grau de visibilidade das operações de uma transação para outras transações concorrentes. Existem quatro níveis principais de isolamento:

1. **Read Uncommitted**: Permite que uma transação leia dados que ainda não foram confirmados por outras transações. Isso pode causar leituras sujas.
2. **Read Committed**: Garante que uma transação só leia dados confirmados. Evita leituras sujas, mas ainda pode ter problemas de leitura não repetível.
3. **Repeatable Read**: Assegura que, se uma transação lê um dado, outras transações não podem modificar esse dado até que a primeira transação seja concluída. Evita leituras sujas e leituras não repetíveis.
4. **Serializable**: O nível mais alto de isolamento, onde transações são completamente isoladas umas das outras. Previne leituras sujas, leituras não repetíveis e fenômenos fantasmas.

### Implementando Transações no Node.js

Para implementar transações no Node.js, vamos utilizar o **`sequelize`**, uma biblioteca popular para ORM (Object-Relational Mapping). Abaixo está um exemplo prático de como criar e gerenciar transações utilizando o Sequelize.

### Configuração Inicial

Você pode instalar o banco de sua preferência ou até mesmo usar docker para endereçar essa dependência, por exemplo nesse caso precisaremos do arquivo docker-compose.yml abaixo :

```yaml
services:
  postgres_database:
    container_name: postgres
    image: postgres
    environment:
      POSTGRES_USER: cpereiramt
      POSTGRES_PASSWORD: 123456
      PGDATA: /data/postgres
      POSTGRES_DB: bd_test
    ports:
      - '5332:5432'
```

Com o docker instalado no seu os basta rodar o comando levando-se em conta que o nome do arquivo yml é docker-compose.yml :

```bash
docker compose -f docker-compose.yml up
```

Instale o Sequelize e o driver do banco de dados que você estiver usando (neste exemplo, usaremos PostgreSQL).

```bash

npm install sequelize pg pg-hstore

```

Em seguida, configure o Sequelize com suas credenciais de banco de dados:

```jsx
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
})
```

### Criando um Modelo

Vamos criar um modelo simples para ilustrar as transações:

```jsx
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})
```

### Utilizando Transações

Agora, vamos ver como utilizar transações no Sequelize:

```jsx
async function createUserTransaction() {
  const t = await sequelize.transaction()

  try {
    const user = await User.create(
      {
        username: 'john_doe',
        email: 'john@example.com',
      },
      { transaction: t }
    )

    // Simulando outra operação dentro da mesma transação
    user.username = 'john_doe_updated'
    await user.save({ transaction: t })

    // Confirma a transação
    await t.commit()
    console.log('Transação completada com sucesso!')
  } catch (error) {
    // Desfaz a transação em caso de erro
    await t.rollback()
    console.error('Erro na transação, desfazendo mudanças:', error)
  }
}

createUserTransaction()
```

### Escolhendo o Nível de Isolamento

No Sequelize, você pode especificar o nível de isolamento ao iniciar uma transação:

```jsx
async function createUserWithIsolation() {
  const t = await sequelize.transaction({
    isolationLevel: Sequelize.Transaction.Transaction.ISOLATION_LEVELS.SERIALIZABLE,
  })

  try {
    const user = await User.create(
      {
        username: 'jane_doe',
        email: 'jane@example.com',
      },
      { transaction: t }
    )

    // Simulando outra operação dentro da mesma transação
    user.username = 'jane_doe_updated'
    await user.save({ transaction: t })

    // Confirma a transação
    await t.commit()
    console.log('Transação completada com sucesso!')
  } catch (error) {
    // Desfaz a transação em caso de erro
    await t.rollback()
    console.error('Erro na transação, desfazendo mudanças:', error)
  }
}

createUserWithIsolation()
```

### Links

[exemplo para consulta](https://github.com/cpereiramt/javascript-review/tree/main/DBS/transactions-isolation)

### Conclusão

Transações de banco de dados e níveis de isolamento são componentes essenciais para garantir a integridade e consistência dos dados em uma aplicação. Com o Sequelize, gerenciar transações no Node.js se torna uma tarefa relativamente simples. Lembre-se de escolher o nível de isolamento apropriado para sua aplicação para balancear entre desempenho e consistência dos dados.

Esperamos que este post tenha esclarecido como funcionam as transações e os níveis de isolamento no Node.js. Experimente os exemplos fornecidos e adapte-os às necessidades do seu projeto!

---

Se você gostou deste artigo e quer aprender mais sobre Node.js e banco de dados, não esqueça de seguir nosso blog e compartilhar este post com seus colegas desenvolvedores!

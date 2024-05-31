---
title: 'Semáforos, Bloqueios Compartilhados ou Exclusivos Usando Semáforo no NodeJS'
date: '2024-05-29'
tags: ['javascript', 'node js']
---

### Introdução

O controle de concorrência é uma preocupação crucial no desenvolvimento de aplicações que manipulam recursos compartilhados. Uma das técnicas mais efetivas para gerenciar o acesso a esses recursos é o uso de semáforos. Neste post, vamos explorar o conceito de semáforos, como eles funcionam, e como implementar bloqueios compartilhados e exclusivos usando semáforos no NodeJS. Além disso, vamos fornecer exemplos de código para ilustrar a teoria na prática.

### O Que São Semáforos?

Semáforos são estruturas de sincronização utilizadas para controlar o acesso a recursos compartilhados em sistemas multitarefa. Eles são fundamentais para evitar condições de corrida, onde múltiplos processos ou threads tentam acessar e modificar um recurso simultaneamente.

### Tipos de Semáforos

Semáforos Binários: Funcionam como um bloqueio simples (lock), podendo assumir apenas os valores 0 ou 1.
Semáforos Contadores: Podem assumir valores inteiros maiores, permitindo o controle de múltiplas instâncias de um recurso.

### Bloqueios Compartilhados e Exclusivos

Em sistemas de controle de concorrência, dois tipos de bloqueios são frequentemente utilizados:

Bloqueios Exclusivos (Exclusive Locks): Permitem que apenas uma thread ou processo acesse o recurso de cada vez.
Bloqueios Compartilhados (Shared Locks): Permitem que múltiplas threads ou processos leiam o recurso simultaneamente, mas não escrevam nele.

### Implementação de Semáforos no NodeJS

Para implementar semáforos no NodeJS, utilizamos a biblioteca async-mutex, que fornece uma API simples para trabalhar com mutexes e semáforos.

### Instalação

Primeiro, precisamos instalar a biblioteca:

```bash
npm install async-mutex
```

### Exemplo de Semáforo Binário (Mutex)

Vamos começar com um exemplo de semáforo binário para gerenciar um recurso compartilhado:

```javascript
const { Mutex } = require('async-mutex')

const mutex = new Mutex()
let resource = 0

async function accessResource() {
  const release = await mutex.acquire()
  try {
    // Critical section
    resource++
    console.log(`Resource value: ${resource}`)
  } finally {
    release()
  }
}

// Simulando concorrência
for (let i = 0; i < 5; i++) {
  accessResource()
}
```

Neste exemplo, usamos o Mutex para garantir que apenas uma função acesse e modifique o recurso compartilhado por vez.

Exemplo de Semáforo Contador
Para gerenciar múltiplas instâncias de um recurso, utilizamos um semáforo contador:

```javascript
const { Semaphore } = require('async-mutex')

const semaphore = new Semaphore(3) // Permite até 3 acessos simultâneos
let resource = 0

async function accessResource() {
  const [value, release] = await semaphore.acquire()
  try {
    // Critical section
    resource++
    console.log(`Resource value: ${resource}, Slots left: ${value}`)
  } finally {
    release()
  }
}

// Simulando concorrência
for (let i = 0; i < 10; i++) {
  accessResource()
}
```

Aqui, o semáforo contador permite até três acessos simultâneos ao recurso compartilhado.

### Semáforos para Bloqueios Compartilhados e Exclusivos

Uma aplicação prática dos semáforos é a implementação de bloqueios compartilhados e exclusivos. Vamos criar um exemplo onde threads podem ler (compartilhado) ou escrever (exclusivo) em um recurso.

```javascript
const { Semaphore } = require('async-mutex')

const readSemaphore = new Semaphore(10) // Permite até 10 leitores simultâneos
const writeSemaphore = new Semaphore(1) // Permite apenas 1 escritor

let resource = 0

async function readResource() {
  const [value, releaseRead] = await readSemaphore.acquire()
  try {
    await writeSemaphore.acquire()
    console.log(`Reading resource: ${resource}`)
    writeSemaphore.release()
  } finally {
    releaseRead()
  }
}

async function writeResource() {
  await writeSemaphore.acquire()
  try {
    resource++
    console.log(`Writing resource: ${resource}`)
  } finally {
    writeSemaphore.release()
  }
}

// Simulando concorrência
for (let i = 0; i < 5; i++) {
  readResource()
}

for (let i = 0; i < 3; i++) {
  writeResource()
}
```

Neste exemplo, usamos um semáforo para permitir até 10 leitores simultâneos e outro semáforo para garantir que apenas um escritor modifique o recurso de cada vez.

### Conclusão

O uso de semáforos no NodeJS é uma técnica poderosa para gerenciar a concorrência e garantir a integridade dos recursos compartilhados. Com a biblioteca async-mutex, podemos implementar facilmente semáforos binários e contadores, bem como bloqueios compartilhados e exclusivos. Esses conceitos são essenciais para desenvolver aplicações robustas e eficientes, especialmente em ambientes de múltiplas threads.

Por meio dos exemplos de código fornecidos, esperamos que você tenha uma compreensão clara de como aplicar semáforos em suas próprias aplicações NodeJS. Experimente os exemplos, adapte-os às suas necessidades e melhore o controle de concorrência em seus projetos.

### Referências

1. [Biblioteca async-mutex no npm](https://www.npmjs.com/package/async-mutex)
2. [Repositório com exemplos](https://github.com/cpereiramt/javascript-review/tree/main/Threads/Semaphores)

Esse post foi projetado para fornecer uma visão abrangente sobre semáforos em NodeJS, com exemplos práticos e detalhados. Esperamos que você tenha encontrado este conteúdo útil e encorajador para suas implementações de controle de concorrência.

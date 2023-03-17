---
title: 'Javascript: Variáveis, tipos de dados e operadores'
date: '2023-03-12'
tags: ['javascript']
---

Olá leitores!

Hoje vamos falar sobre os fundamentos do JavaScript, que são as variáveis, tipos de dados e operadores. Esses conceitos são a base para a compreensão da linguagem e são essenciais para quem quer se tornar um desenvolvedor front-end ou back-end.

## Variáveis

As variáveis em JavaScript são usadas para armazenar valores. Para declarar uma variável, usamos a palavra-chave **`var`**, **`let`** ou **`const`**, seguida pelo nome da variável e, opcionalmente, um valor inicial.

```javascript
var idade = 30
let nome = 'João'
const PI = 3.14
```

A diferença entre **`var`**, **`let`** e **`const`** é que **`var`** é uma variável de escopo global, enquanto **`let`** e **`const`** são de escopo de bloco. Isso significa que as variáveis declaradas com **`let`** e **`const`** só podem ser acessadas dentro do bloco em que foram declaradas.

## Tipos de Dados

JavaScript possui vários tipos de dados, incluindo números, strings, booleanos, objetos e arrays. Para saber o tipo de dados de uma variável, podemos usar o operador **`typeof`**.

```javascript
var idade = 30
console.log(typeof idade) // output: "number"

var nome = 'João'
console.log(typeof nome) // output: "string"

var ativo = true
console.log(typeof ativo) // output: "boolean"

var pessoa = { nome: 'João', idade: 30 }
console.log(typeof pessoa) // output: "object"

var numeros = [1, 2, 3]
console.log(typeof numeros) // output: "object"
```

## Operadores

Os operadores em JavaScript são usados para realizar operações em valores e variáveis. Existem operadores aritméticos, de atribuição, de comparação e lógicos.

```javascript
var a = 10
var b = 5

// operadores aritméticos
console.log(a + b) // output: 15
console.log(a - b) // output: 5
console.log(a * b) // output: 50
console.log(a / b) // output: 2

// operadores de atribuição
var c = 20
c += 10 // é o mesmo que c = c + 10;
console.log(c) // output: 30

// operadores de comparação
console.log(a > b) // output: true
console.log(a < b) // output: false
console.log(a == b) // output: false
console.log(a != b) // output: true

// operadores lógicos
var ativo = true
var registrado = false
console.log(ativo && registrado) // output: false
console.log(ativo || registrado) // output: true
console.log(!ativo) // output: false
```

Espero que tenham gostado dessa introdução aos fundamentos do JavaScript. Para se aprofundar mais, sugiro a leitura da documentação oficial da linguagem: **[https://developer.mozilla.org/pt-BR/docs/Web/JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)**

Até a próxima!

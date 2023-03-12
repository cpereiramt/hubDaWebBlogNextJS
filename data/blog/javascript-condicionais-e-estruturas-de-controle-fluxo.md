---
title: 'Javascript: Condicionais e estruturas de controle de fluxo'
date: '2023-03-12'
tags: ['javascript']
---

JavaScript é uma das linguagens de programação mais populares do mundo, e uma das razões para isso é a sua capacidade de controlar o fluxo de execução de um programa. Para fazer isso, JavaScript fornece condicionais e estruturas de controle de fluxo que permitem aos desenvolvedores escrever código que toma decisões com base em dados de entrada e direciona o fluxo de execução em conformidade.

Neste post, vamos discutir as condicionais e estruturas de controle de fluxo mais comuns em JavaScript e como elas podem ser usadas para criar programas mais sofisticados e eficientes.

## Condicionais

As condicionais permitem aos desenvolvedores escrever código que toma decisões com base em valores booleanos, ou seja, valores que são verdadeiros ou falsos. Em JavaScript, existem dois tipos de condicionais: "if" e "switch".

O "if" é a condicional mais simples, que permite que você execute um bloco de código se uma condição for verdadeira. Por exemplo, se você quiser verificar se um usuário tem idade suficiente para visualizar um site restrito, você pode usar um "if" da seguinte forma:

```javascript
let idade = 18
if (idade >= 18) {
  console.log('Você pode acessar este site.')
} else {
  console.log('Você é muito jovem para acessar este site.')
}
```

O "switch" é outra condicional que permite que você execute diferentes blocos de código com base em diferentes valores. Por exemplo, se você quiser imprimir diferentes mensagens de saudação com base no dia da semana, você pode usar um "switch" da seguinte forma:

```javascript
let diaDaSemana = 'quinta-feira'
switch (diaDaSemana) {
  case 'segunda-feira':
    console.log('Bom dia, segunda-feira!')
    break
  case 'terça-feira':
    console.log('Bom dia, terça-feira!')
    break
  case 'quarta-feira':
    console.log('Bom dia, quarta-feira!')
    break
  case 'quinta-feira':
    console.log('Bom dia, quinta-feira!')
    break
  case 'sexta-feira':
    console.log('Bom dia, sexta-feira!')
    break
  default:
    console.log('Bom dia, fim de semana!')
    break
}
```

## Estruturas de controle de fluxo

As estruturas de controle de fluxo permitem que os desenvolvedores controlem o fluxo de execução de um programa com mais precisão. Em JavaScript, existem três tipos de estruturas de controle de fluxo: "for", "while" e "do-while".

O "for" é uma estrutura de controle de fluxo que permite que você execute um bloco de código um número específico de vezes. Por exemplo, se você quiser imprimir os números de 1 a 10, você pode usar um "for" da seguinte forma:

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i)
}
```

O "while" é outra estrutura de controle de fluxo que permite que você execute um bloco de código enquanto uma condição for verdadeira. Por exemplo, se você quiser imprimir os números pares de 2 a 10, você pode usar um "while" da seguinte forma:

```javascript
let i = 2
while (i <= 10) {
  console.log(i)
  i += 2
}
```

O "do-while" é uma estrutura de controle de fluxo semelhante ao "while", mas o bloco de código é executado pelo menos uma vez, independentemente de a condição ser verdadeira ou falsa. Por exemplo, se você quiser pedir ao usuário para digitar um número até que ele digite um número par, você pode usar um "do-while" da seguinte forma:

```javascript
let numero
do {
  numero = parseInt(prompt('Digite um número par:'))
} while (numero % 2 !== 0)
console.log('O número que você digitou é:', numero)
```

## Conclusão

As condicionais e estruturas de controle de fluxo são ferramentas poderosas que permitem que os desenvolvedores controlem o fluxo de execução de um programa. Com o JavaScript, é possível criar programas sofisticados e eficientes que respondam às entradas do usuário e executem diferentes blocos de código com base em diferentes condições.

Ao dominar essas ferramentas, os desenvolvedores podem criar programas mais dinâmicos e interativos que ofereçam uma melhor experiência do usuário. Se você está começando a aprender JavaScript, é fundamental entender como as condicionais e estruturas de controle de fluxo funcionam e como você pode usá-las em seus programas.

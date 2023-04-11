---
title: 'Manipulação de DOM com JavaScript'
date: '2023-04-12'
tags: ['javascript']
---

O Document Object Model (DOM) é uma representação hierárquica em árvore de uma página HTML. Com JavaScript, podemos manipular o DOM para adicionar, remover ou alterar elementos HTML, bem como seus atributos e estilos.

## Selecionando elementos do DOM

Antes de manipularmos o DOM, precisamos selecionar os elementos HTML que desejamos manipular. Podemos fazer isso usando os métodos **`document.getElementById()`**, **`document.getElementsByClassName()`**, **`document.getElementsByTagName()`** ou **`document.querySelector()`**, dependendo do nosso objetivo.

```javascript
// Selecionando um elemento pelo ID
const elementById = document.getElementById('my-id')

// Selecionando elementos pela classe
const elementsByClass = document.getElementsByClassName('my-class')

// Selecionando elementos pela tag
const elementsByTag = document.getElementsByTagName('div')

// Selecionando o primeiro elemento que corresponde a um seletor CSS
const elementBySelector = document.querySelector('.my-class')
```

## Manipulando elementos do DOM

Após selecionarmos os elementos HTML que desejamos manipular, podemos usar as propriedades e métodos do objeto retornado para alterar seu conteúdo, atributos e estilos.

```javascript
// Alterando o conteúdo de um elemento
elementById.innerHTML = 'Novo conteúdo'

// Alterando o valor de um atributo
elementById.setAttribute('src', 'nova-imagem.jpg')

// Adicionando uma classe a um elemento
elementById.classList.add('novo-estilo')

// Removendo uma classe de um elemento
elementById.classList.remove('antigo-estilo')

// Alterando o estilo de um elemento
elementById.style.backgroundColor = 'red'
```

## Criando e adicionando elementos ao DOM

Também podemos criar novos elementos HTML e adicioná-los ao DOM usando os métodos **`document.createElement()`** e **`appendChild()`**.

```javascript
// Criando um novo elemento
const newElement = document.createElement('div')

// Adicionando conteúdo ao novo elemento
newElement.innerHTML = 'Novo elemento adicionado'

// Adicionando o novo elemento ao final de um elemento pai
elementById.appendChild(newElement)
```

## Removendo elementos do DOM

Para remover um elemento do DOM, podemos usar o método **`remove()`**.

```javascript
// Removendo um elemento
elementById.remove()
```

Conclusão: a manipulação do DOM com JavaScript é uma habilidade essencial para o desenvolvimento de páginas web dinâmicas e interativas. Com essas técnicas básicas, podemos criar e alterar elementos HTML, bem como seus atributos e estilos, para atingir nossos objetivos de design e funcionalidade.

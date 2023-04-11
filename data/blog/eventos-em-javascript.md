---
title: 'Eventos em JavaScript'
date: '2023-04-12'
tags: ['javascript']
---

Eventos em JavaScript são uma parte fundamental da interação do usuário com a interface do usuário baseada na web. Eles permitem que você detecte quando o usuário executa uma ação específica, como clicar em um botão ou digitar em um campo de entrada. Em seguida, você pode escrever código para lidar com esses eventos e atualizar a página de acordo.

Existem muitos tipos diferentes de eventos em JavaScript, cada um correspondendo a uma ação específica do usuário. Alguns dos eventos mais comuns incluem:

- click: Disparado quando o usuário clica em um elemento.
- submit: Disparado quando o usuário envia um formulário.
- keyup: Disparado quando o usuário solta uma tecla em um campo de entrada.
- load: Disparado quando a página é carregada.

Para lidar com esses eventos, você pode usar o método addEventListener() em um elemento HTML. Esse método aceita dois argumentos: o tipo de evento que você deseja lidar e uma função que será executada quando o evento ocorrer. Por exemplo, se você deseja executar uma função quando o usuário clica em um botão, você pode escrever o seguinte código:

```javascript
const meuBotao = document.querySelector('button')

meuBotao.addEventListener('click', function () {
  // Código a ser executado quando o botão for clicado
})
```

Dentro da função de tratamento de evento, você pode escrever qualquer código que desejar. Por exemplo, você pode atualizar o texto em uma página, adicionar ou remover classes CSS de elementos ou fazer uma solicitação HTTP para um servidor.

Outra coisa importante a ser lembrada ao lidar com eventos em JavaScript é que você pode impedir o comportamento padrão de um elemento. Por exemplo, se você estiver lidando com o evento de envio de formulário, poderá impedir que o formulário seja enviado executando o método preventDefault() no objeto de evento:

```javascript
const meuFormulario = document.querySelector('form')

meuFormulario.addEventListener('submit', function (evento) {
  evento.preventDefault() // Impede que o formulário seja enviado
})
```

Em resumo, eventos em JavaScript permitem que você detecte ações do usuário e execute código em resposta a essas ações. Ao usar.

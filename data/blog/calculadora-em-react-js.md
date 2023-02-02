---
title: 'Calculadora em React js'
date: '2019-05-19'
tags: ['reactjs']
---

O ReactJS é uma biblioteca JavaScript de código aberto que é usada para construir interfaces de usuário especificamente para aplicativos de página única. O React permite que os desenvolvedores criem aplicativos da Web rápidos, escaláveis e simples.

A seguir você vai aprender a implementar uma calculadora em ReactJS em duas etapas: estrutura e design.

## Criando a calculadora

Se você for acompanhar esse tutorial em windows e estiver com duvida sobre como configurar o ambiente para desenvolvimento em ReactJS por favor siga esse tutorial [aqui](https://bg.hubdaweb.com.br/configurando-reactjs-windows/) .

Toda aplicação criada em ReactJS é formada por peças chamadas componentes. Podemos ver uma interface do usuário dividida em várias partes individuais para que possamos trabalhar nelas independentemente e mesclar tudo em um componente principal, que será sua interface de usuário final.

Primeiro, executaremos o comando “create-react-app” em nosso diretório para criar um aplicativo padrão de reagente básico. Então, vamos pular direto para a construção de nossos componentes.

Este aplicativo de calculadora precisará de dois componentes. Um é o nosso componente “Result”, onde exibimos a saída de dados, e o outro é o “KeypadComponent”, onde o teclado será exibido.

Na pasta “src”, criaremos um diretório chamado componentes. É aqui que codificaremos nossos componentes. Entre nessa pasta e crie “ResultComponent.js”.

É assim que o código vai ficar:

```JSX
 import React, {Component} from 'react';

 class ResultComponent extends Component { 

    render() {
      let {result} = this.props; 
       return ({result} ) ; 
              } 
                                          }

 export default ResultComponent;
```

Nosso componente de resultado consiste em apenas uma tag

que exibe o conteúdo de apoio.

Em seguida, vamos criar o componente do teclado. Nosso teclado é apenas um monte de botões que fazem algo quando clicados. Este é o código do nosso arquivo KeypadComponent.js:

```JSX
 import React, {Component} from 'react';

 class KeyPadComponent extends Component {
 render() { 
   return ( this.props.onClick(e.target.name)}>(
            this.props.onClick(e.target.name)}>CE
            this.props.onClick(e.target.name)}>)
            this.props.onClick(e.target.name)}>C
            this.props.onClick(e.target.name)}>1
            this.props.onClick(e.target.name)}>2
            this.props.onClick(e.target.name)}>3
            this.props.onClick(e.target.name)}>+
            this.props.onClick(e.target.name)}>4
            this.props.onClick(e.target.name)}>5
            this.props.onClick(e.target.name)}>6
            this.props.onClick(e.target.name)}>-
            this.props.onClick(e.target.name)}>7
            this.props.onClick(e.target.name)}>8
            this.props.onClick(e.target.name)}>9
            this.props.onClick(e.target.name)}>x
            this.props.onClick(e.target.name)}>.
            this.props.onClick(e.target.name)}>0
            this.props.onClick(e.target.name)}>=
            this.props.onClick(e.target.name)}>÷
             ); } 

      } 

    export default KeyPadComponent;
```

Como precisamos enviar o evento click para o pai (com informações sobre qual botão foi clicado), chamaremos a função this.props.OnClick em cada botão, clique e passe e.target.name como um argumento.

Vamos definir a lógica dessa função em nosso componente pai, que é App.js.

No arquivo App.js, que é o pai de todos os nossos componentes anteriores e que renderiza todos os componentes principais, incluiremos todos os componentes filhos primeiro. Também incluiremos a variável "result" neste state.state que é passada para o nosso componente de resultado. Isso nos permitirá manipular a exibição.

```JSX
 import React, { Component } from 'react'; 

 import './App.css';
 import ResultComponent from './components/ResultComponent';
 import KeyPadComponent from "./components/KeyPadComponent"; 

    class App extends Component { constructor(){
       super(); this.state = { result: "" } } 

                render() { return (simple calculator);} 

                                 }

 export default App;
```

Observe passamos o componente this.onClick para o componente do teclado, mas ainda não fizemos a atribuição. Antes de definir essa função, precisamos fazer algumas coisas. Precisamos criar funções para nossos recursos básicos da calculadora. Nesta calculadora, temos três recursos principais.

```JSX
this.Calculate => Calcular o resultado da nossa expressão, isso é acionado quando o botão "=" é pressionado.

this.Reset => Limpar nossa saída, isto é ativado quando "C" é pressionado.

this.Backspace => Limpar o último caractere que foi pressionado através do acionamento de "CE".
```

Vamos criar essas funções primeiro.

```JSX
import React, { Component } from 'react'; 

import './App.css'; 
import ResultComponent from './components/ResultComponent';
 import KeyPadComponent from "./components/KeyPadComponent"; 

class App extends Component { 
           constructor(){ 
           super(); 
           this.state = { result: "" } } 
           calculate = () => { try { this.setState({ // eslint-disable-next-line result: (eval(this.state.result) || "" ) + "" }) }
           catch (e) { this.setState({ result: "error" }) } }; 
           reset = () => { this.setState({ result: "" }) }; 
           backspace = () => { this.setState({ result: this.state.result.slice(0, -1) }) }; 
           render() { 
              return (simple calculator);
                            }
                         }

       export default App;
```

Finalmente, podemos criar nossa função onClick e incluí-la em nosso arquivo App.js.

```JSX
 import React, { Component } from 'react';
 import './App.css'; 
 import ResultComponent from './components/ResultComponent'; 
 import KeyPadComponent from "./components/KeyPadComponent"; 

  class App extends Component {
       constructor(){ super();
          this.state = { result: "" } } 
            onClick = button => { 
               if(button === "="){ this.calculate() }
               else if(button === "C"){ this.reset() }
               else if(button === "CE"){ this.backspace() } 
               else { this.setState({ result: this.state.result + button }) } }; 
       calculate = () => { try { this.setState({ // eslint-disable-next-line result: (eval(this.state.result) || "" ) + "" }) }
              catch (e) { this.setState({ result: "error" }) } }; 
              reset = () => { this.setState({ result: "" }) }; 
             backspace = () => { this.setState({ result: this.state.result.slice(0, -1) }) }; 
             render() { return (simple calculator);
             }

             }

        export default App;
```

A função onclick é simples, lê o argumento (que é o nome do botão clicado), e altera o estado apropriadamente dependendo da entrada que é passada.

Finalmente, você pode adicionar um pouco de CSS para torná-lo mais bonito.

## Deixando a sua calculadora estilosa

Primeiro, crie um arquivo chamado “index.css”. Nós vamos escrever todos os nossos códigos CSS neste arquivo. Mas antes disso, vamos incluir esse arquivo em nosso arquivo index.js para que possamos ver o efeito das alterações que estamos fazendo em nosso CSS imediatamente no navegador. Escreva a linha de código abaixo no topo do arquivo index.js:

```JSX
import './index.css';
```

Agora, vamos começar a escrever nosso CSS. A primeira coisa que faremos é definir valores padrão para todos os elementos. Escreva o código abaixo na parte superior do arquivo index.css:

```CSS
\*{margin:0px;
  padding:0px;
  border-radius: 0px;
  box-sizing: border-box;
  font-size: 110%;
  }

#root{
  text-align:center;
     }
```

A próxima coisa que faremos é adicionarmos estilo ao nosso componente CalculatorTitle. No caso, nós vamos nomear o className como "título da calculadora". Então, vamos adicionar estilos usando essa classe. Vamos alinhar o título ao centro, adicionar preenchimento, margem, largura, cor de fundo, cor do texto, etc. O código abaixo é usado para estilizar o componente "CalculatorTitle:

```CSS
.calculator-title{
  font-size:30px;
  background: #fff;
  width: 400px;
  padding: 10px 10px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 2px;border: 2px solid black;
  color: #4CAF50;
               }
```

A próxima coisa é estilizar nossa calculadora. Adicione o código abaixo para o elemento pai com a className como “main Calc”.

```CSS
.mainCalc{
  margin:0px;
  padding:0px;
  border-radius: 0px;
  box-sizing: border-box;
          }
```

Agora, vamos estilizar os campos de entrada do componente ScreenRow. O nome da classe atribuído a este elemento é "screen-row". Vamos adicionar largura, fundo, cor, preenchimento, etc. a este elemento. O código abaixo é usado para essa finalidade:

```CSS
.screen-row input{
  width: 400px;
  background: #ddd;border: 0px;
  color: #222;padding: 10px;
  text-align: right;
                 }
```

A última coisa que resta é estilizar os botões. O código abaixo é usado para estilizar os botões do aplicativo Calculadora.

```CSS
input\[type="button"\]{
  width: 100px;
  background: #4CAF50;border: 1px solid #222;
  padding: 10px 20px;color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
          }

input\[type="button"\]:active{
  background: #ccc;
        }
```

Depois de adicionar todos os pedaços de código acima no arquivo index.css, você poderá ver a alteração do aplicativo na janela do navegador.

Com isso, concluímos nosso aplicativo de calculadora com o React.JS.

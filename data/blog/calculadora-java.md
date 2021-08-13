---
title: 'Criando uma calculadora em Java'
date: '2019-04-01'
tags: ['java']
---

Em 1990, uma empresa chamada Sum microsystems tinha um projeto, criar uma tecnologia que realizasse a integração de várias interfaces e fazer diversos aparelhos se comunicarem entre si. James Gosling, era o responsável por liderar a equipe para o desenvolvimento dessa tecnologia, mas devido o baixo desempenho dos hardwares da época e a linguagem que a equipe estava utilizando que era C++, uma das linguagens mais utilizadas na época, não foi possível finalizar o projeto com êxito. Por isso, a equipe resolveu criar uma linguagem que de início foi batizada de GreenTalk, possuía as especificações necessárias para realizar o projeto. Com a nova linguagem o projeto cresceu, em 1991 a linguagem foi renomeada para Oak.

Com a nova linguagem a equipe conseguiu finalizar o projeto, desenvolveram o Star Seven, um dispositivo com uma tela sensível ao toque, antena, microchip integrado, cartões inteligentes, entrada para fones, sistema de som integrado. Com Star Seven, por exemplo, era possível controlar alguns eletrodomésticos e as lâmpadas de uma residência. Porém, mesmo sendo uma tecnologia revolucionária, na época, a Sum microsystems não obteve sucesso financeiro com o aparelho e só foram fabricadas 6 unidades.

Em 1994, Tim Berners Lee, criou a linguagem HTML e todas as tecnologias envolvidas. A equipe da Sum microsystems resolveu juntar essas tecnologias, a linguagem HTML que era interativa para Web, o Star Seven que era bastante interativo para o usuário e a linguagem Oak que permitia a interação. Assim, surge o projeto Web Runner, um navegador com a finalidade de criar interatividade na Web, mas na hora de registrar a linguagem, por incrível que pareça, já existia uma tecnologia cadastrada como Oak. No momento do cadastro da linguagem a equipe tinha que decidir um novo nome para linguagem e decidiram: Java, pelo motivo da equipe gostar muito de café. No EUA java coffee se refere a um café forte.

Em 2006, a linguagem Java se tornou uma linguagem de código aberto e foi registrada com a licença GPL. Já em 2009, a gigante Oracle comprou a Sum microsystems, tornando o Java propriedade da Oracle.

Para criar um programa em Java é necessário baixar o pacote de desenvolvimento Java ou JDK (Kit de Desenvolvimento Java) e uma IDE (Ambiente de Desenvolvimento Integrado).

Iremos desenvolver uma calculadora em Java que realize cálculos simples de adição, subtração e potenciação. Para esse exemplo iremos utilizar a IDE NetBeans, um ótimo ambiente de desenvolvimento para quem está começando a desenvolver programas com essa poderosa linguagem. Recomendamos que seja feito o download do JDK e NetBeans no site da Oracle.

Para desenvolver uma calculadora no modo console utilizando a IDE NetBeans com a linguagem Java. Primeiramente, iremos criar um projeto clicando em ARQUIVO e selecionando a opção NOVO PROJETO. Na janela que irá abrir, escolha a categoria JAVA, ao lado direito, em projeto, escolha a opção APLICAÇÃO JAVA e clique em PRÓXIMO. Irá aparecer a página para nomear o projeto, nesse exemplo iremos chamar de: calculadora2 e clique em FINALIZAR.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/Imagem01.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/Imagem02.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/Imagem03.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/Imagem04.png)

Ao lado esquerdo é possível observar que foi gerado o projeto com seus pacotes, o último pacote é a classe calculadora que já estar aberto no painel do lado direito. Inicialmente, iremos declarar as variáveis necessária para receber os valores de entrada para a realização dos cálculos. Todo código deve ser desenvolvido dentro da classe "main", que estar delimitado entre chave. Vamos declarar três variáveis que chamaremos (num1, num2 e operação), num1 e num2 serão do tipo "float" porque irão trabalhar com números reais, já a variável: operação vai ser do tipo "char" para receber os tipos de operadores.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/Imagem05.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/Imagem06.png)

Agora, vamos incluir os comandos de saída para que uma mensagem seja gerada para o usuário e o mesmo informe os valores desejados. O comando necessário para que seja mostrado uma mensagem ao usuário: System.out.prinln (""); uma observação: o Java diferencia letras maiúsculas de minúsculas então digite como está no exemplo. A mensagem tem que ser escrita dentro das aspas que essas devem estar dentro dos parênteses. Dessa forma, será mostrado a mensagem ao usuário e o valor que o usuário digitou será gravado na variável num1. Porém, é necessário especificar para o programa que ele terá que ler as informações que o usuário digitar, para isso será necessário importar uma biblioteca que já é própria do Java: import java.util.Scanner; o import tem que ficar embaixo do: package, no início do código como demonstram as imagens.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/Imagem07.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/Imagem08.png)

Para adicionar a variável num1, que irá receber o primeiro valor digitado pelo usuário, vamos ter que usar o "Scanner" que está junto do comando import, para poder pegar o valor digitado. Antes, temos que criar um objeto para fazer uma instância daquela classe no código: Scanner leitor = new Scanner (System.in); esse comando ficará entre as variáveis declaradas e o comando de saída. Assim, está sendo pego todos os métodos que têm na classe Scanner e estamos jogando no objeto: leito, para que possa ser utilizado. Dentro dos parênteses temos que informar de onde virá as informações por isso colocaremos a entrada do sistema. Já a variável que vai receber os dados temos que colocar da seguinte forma: num1 = leitor.nextFloat();. Os mesmos comandos serão usados para a segunda variável, apenas modificando o termo da mensagem que será mostrado ao usuário.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem09.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem10-1.png)

O terceiro comando de saída irá perguntar ao usuário que tipo de operação ele deseja realizar será mudado a mensagem mostrada ao usuário e na variável operação o leitor será apenas .next convertendo para pegar apenas o primeiro caractere que a pessoa digitar.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem11-1.png)

Finalizamos a parte de entrada das informações, agora vamos desenvolver a parte de processamento. Começando com a verificação do tipo de operação que o usuário digitar e através dessa informação fazer o cálculo, para isso iremos utilizar a estrutura if que irá verificar o valor da variável descobrindo a operação que o usuário deseja executar. Esse processo irá gerar um resultado, então vamos criar mais uma variável que chamaremos de: resultado do tipo float. Iremos fazer a primeira verificação da variável: operação com operador + e, logo depois, o comando de saída para mostrar a mensagem concatenada com a variável: resultado já com valor da soma realizada. Na segunda imagem, na parte de saída do IDE, que fica na parte inferior é notório o resultado exato da calculadora.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem12-1.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem13-1.png)

Na realização da próxima operação vamos utilizar o comando: else if, que significa (se não), com ele será feito a segunda verificação, se o valor da variável: operação é igual ao operador de subtração. Embaixo colocaremos o valor da subtração das variáveis dentro da variável: resultado e o comando de saída com a mensagem concatenada com a variável: resultado. Como pode ser observado na segunda imagem, o resultado que foi gerado da subtração.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem14-1.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem15.png)

Vamos pensar na situação a qual o usuário digita uma operação que ainda não foi incluída. Para isso, vamos utilizar apenas o comando: else, porque o else é a negação da verdade das outras clausulas, ou seja, quando o programa verificar se é adição ou subtração, não sendo nenhuma das duas, o comando else chamará o comando de saída informando uma mensagem de invalidade: System.out.println ("Operação Inválida"); na segunda imagem podemos perceber que ao colocarmos uma letra no lugar de um operador a mensagem aparece.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem16-1.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem17-1.png)

Porém, a operação para potenciação não utilizaremos o operador de potenciação "^" porque o Java já possui uma classe própria que se resume no else if, que irá verificar se a variável é igual ao operador de potenciação. Com isso, vamos utilizar a biblioteca math.pow, ela recebe como parâmetro dois double que são equivalentes as variáveis num1 e num2. Para não constar erro devido a variável: resultado ser do tipo float, na frente da variável iremos fazer uma conversão que é chamada de conversão implicada, onde é colocado o tipo do dado na frente do cálculo. Por fim, é mostrado o resultado com o comando de saída. Na segunda imagem fizemos uma simples conta de 2^2 que o resultado foi 4.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem18-1.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem19-1.png)

[![](https://www.javaavancado.com/baixar-ebook-java-web-gratuito/images/baixar-ebook-java-web-gratuito.png)](https://go.hotmart.com/C12230204B)

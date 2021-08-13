---
title: 'Criando uma simples Tabuada na linguagem C++'
date: '2019-03-09'
tags: ['c-mais-mais']
---

Neste artigo vc verá :

- História da linguagem c++
- Configurando o ambiente de desenvolvimento(Instalando a IDE  Dev C++)
- Iniciando o desenvolvimento
- Executando o projeto

###  História da linguagem c++

A linguagem de programação C++ é considerada uma das linguagens mais populares e utilizadas atualmente, sendo classificada como uma linguagem de programação compilada.

Criada em 1979, por [Bjarne Stroustrup](https://pt.wikipedia.org/wiki/Bjarne_Stroustrup) na empresa [AT&T Bell](https://pt.wikipedia.org/wiki/Bell_Labs) .

Foi baseada na linguagem C criada por [Dennis Ritchie](https://pt.wikipedia.org/wiki/Dennis_Ritchie) que trabalhava na mesma empresa e tinha como objetivo desenvolver sistemas operacionais como, por exemplo, desenvolver uma nova versão do sistema operacional Unix.

A linguagem C encontra-se no padrão internacional C18 standard revision (ou ISO/IEC 9899:2018) lançada em junho de 2018, substituindo a versão C11 (standard ISO/IEC 9899:2011).

Por ser uma linguagem de nível intermediário e estar próximo ao hardware oferece muitos benefícios em sua utilização como: alta performance, produtividade e ótimo desempenho.

Também, é portável podendo ser usado no Windows, Mac e Linux.

### Configurando o ambiente de desenvolvimento(Instalando a IDE  Dev C++)



Para podermos criar e executar um programa em C++, por mais simples que seja, temos que instalar um ambiente integrado de desenvolvimento (IDE) ou configurarmos o compilador no sistema operacional que utilizamos.

Nesse caso utilizaremos a IDE Dev C++ no Windows para podermos desenvolver na linguagem C++.  Para baixar o Dev C++ basta ir no site [sourceforge.net](https://sourceforge.net/projects/orwelldevcpp/) e realizar o download do IDE, após baixar o          IDE,  o processo de instalação é padrão e muito rápido.

### Iniciando o Desenvolvimento

Desenvolveremos um programa simples em C++ o qual se resume em uma tabuada, utilizando uma simples estrutura de repetição.

Então, vamos começar? Ao abrir o Dev C++ iniciaremos com a declaração das variáveis, onde nesse exemplo utilizaremos apenas duas: número e contador, sendo que essa última variável será atribuída o valor 0, isso será necessário para a estrutura de repetição.

\[caption id="attachment_431" align="alignnone" width="1024"\]![Inserindo as Variáveis ](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/Imagem1-1024x631.png) Inserindo as Variáveis\[/caption\]



Pronto, com as variáveis declaradas agora chegou o momento de especificar e esclarecer o que o programa faz.

Nesse exemplo o usuário terá que digitar um número o qual ele deseja que seja feito a multiplicação, mas para que isso ocorra de forma natural o programa terá que orientar a ação do usuário.

Nada melhor do que uma mensagem informando o que tem que ser feito, a mensagem irá ser: "Digite o número da tabuada" que aparecerá para o usuário por meio do comando “printf”, já o comando “scanf”, na linha de baixo, servirá para ler e armazenar na variável número o valor que foi digitado pelo usuário.

Logo após, vamos usar o comando "for" que é um laço de repetição finito.

Este laço servirá para determinar o início e fim da tabuada, dentro desse comando de repetição montaremos uma estrutura que irá de 0 até 10 como mostra na imagem abaixo.

\[caption id="attachment_432" align="alignnone" width="948"\]![Inserindo o loop de repetição.](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/Imagem2.png) Inserindo o loop de repetição.\[/caption\]

### Executando o projeto

Após o código ser digitado, clique na opção executar no menu e selecione a opção compilar, logo após ter compilado selecione a opção executar.

Aparecerá a famosa tela preta, nesse momento o usuário terá que inserir o número desejado para que seja feito a tabuada e o programa será executado definitivamente.

\[caption id="attachment_433" align="alignnone" width="1177"\]![Executando no Prompt de Comando.](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/Imagem3.png) Executando no Prompt de Comando.\[/caption\]

Assim, o programa é executado de 0 até 10 formando a tabuada do número 3, como foi digitado no código.

É notório que a linguagem de programação C++ é uma linguagem de fácil aprendizado, essencial a aprendizagem para aqueles que desejam desenvolver programas.

Por ser uma linguagem intermediária ela oferece uma gama de vantagens principalmente em relação ao desempenho do programa final desenvolvido em C++.

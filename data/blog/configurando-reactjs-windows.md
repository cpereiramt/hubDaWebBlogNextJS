---
title: 'Iniciando com react js - configurando para o sistema windows'
date: '2019-04-27'
tags: ['reactjs']
---

Neste artigo, você encontrará um guia passo a passo conciso sobre como instalar o ReactJS no Windows. Então, se você está iniciando com o ReactJS e precisa desenvolver no Windows, veio ao lugar certo!

## Node.js e NPM no Windows

Como você usará JavaScript para o desenvolvimento com o React no Windows, vai precisar do Node.js e do NPM. O Node.js é um tempo de execução JavaScript que possibilita executar o JavaScript fora do navegador. Já o gerenciador de pacotes (NPM) é usado para instalar bibliotecas, como o React.js, em seu projeto na linha de comando.

Para instalar o Node.js para Windows, você precisa acessar o site Node.js e baixar a versão do Windows, recomendada para a maioria dos usuários. Depois, faça a instalação. O NPM já vem com o Node.js.

Por usar a técnica de Virtual DOM para otimizar a interação entre o React e o browser, menos recursos precisam ser feitos toda vez que uma mudança é feita. Além disso, o Visual Studio Code usa o JSX para transmitir o HTML para o JavaScript, o que facilita o processo de construção do código.

## Visual Studio Code para o React no Windows

Há muitos editores e IDEs por aí para desenvolver aplicativos da web. Dependendo dos seus requisitos pessoais, do projeto ou da empresa, você pode escolher entre uma variedade de editores leves e IDEs completos. O Visual Studio Code é uma solução intermediária. Muitos desenvolvedores, operando no Windows (assim como no MacOS) preferem ele.

A instalação em uma máquina Windows é simples:

• Navegue até o site oficial do Visual Studio Code e baixe a versão recente do VS Code em 32 ou 64 bits.

• Depois, faça a instalação e verifique se tudo está funcionando quando você abre.

## NPM na linha de comando para create-react-app

Se você é um iniciante no desenvolvimento web, você deve criar uma pasta dedicada em sua máquina para gerenciar todos os seus projetos. Cabe a você dividir a pasta em subpastas. Por exemplo, pode haver uma pasta para aplicativos React e outra para aplicativos Node.js. Depois de ter sua pasta para seus projetos, abra essa pasta no código do Visual Studio.

No Visual Studio Code você deve ser capaz de abrir uma aba chamada “Terminal” na parte inferior. Essa é sua linha de comando integrada no Visual Studio Code para instalar pacotes com o NPM ou para iniciar ou testar seu projeto.

Agora, você deve verificar se a instalação do Node.js para o Windows foi bem-sucedida. Na linha de comando, digite os comandos a seguir. Eles devem produzir as versões para Node.js e NPM. As versões a seguir podem variar em relação às suas versões.



node --version
v8.9.43
npm --version
v5.6.0



Se o node ou o npm não forem comandos válidos, você precisará verificar suas variáveis de ambiente no Windows.

Agora você pode instalar seu primeiro pacote de node com npm na linha de comando. Você irá instalá-lo globalmente com um sinalizador -g. Por causa da instalação global, você sempre terá acesso a ele na linha de comando.

Na linha de comando (do Visual Studio Code), digite o seguinte comando para instalar o create-react-app:

npm install -g create-react-app



Este pacote permite inicializar os aplicativos React sem a necessidade de configurar nada. Depois de instalá-lo, você pode verificar sua versão novamente na linha de comando:

create-react-app --version
v1.5.1



Finalmente, você pode inicializar seu primeiro aplicativo React.js no Windows. Você pode usar create-react-app colocando o nome do seu aplicativo na linha de comando:

create-react-app my-app



Depois, você pode navegar para o projeto na linha de comando e iniciá-lo com o npm:

cd my-app
npm start



A linha de comando deve fornecer uma saída onde você pode encontrar o aplicativo no navegador. O padrão deve ser localhost:3000 .

Se você estiver usando apenas o IE ou o Edge em sua máquina Windows, recomendo que você instale o Chrome também para acessar o ambiente de desenvolvedor e as React Development Tools, que estão disponíveis como extensão para Chrome.

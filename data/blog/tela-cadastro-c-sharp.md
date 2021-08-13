---
title: 'Criando uma tela de cadastro na linguagem C# em 10 minutos'
date: '2019-03-23'
tags: ['c-sharp']
---

C# é uma linguagem de programação orientada a objetos de propósitos gerais, mas inclui suporte para programação orientada a componente. Fortemente tipada, foi desenvolvida pela Microsoft no final dos anos 90, especificamente na equipe dos programadores de Hejlsberg que trabalhavam na Microsoft e tinham como objetivo ciar uma nova linguagem de programação. Cool, foi o primeiro nome dado a linguagem desenvolvida pela equipe de Hejlsberg e, futuramente, renomeada para C#. C# tem raízes na linguagem C sendo fortemente similar as linguagens C, C++ e Java. C# é padronizado pelo ECMA Internacional como ECMA-334 padrão e pelo ISO/IEC23270 padrão.

A linguagem faz parte do framewor.NET, que é um conjunto de ferramentas criada pela Microsoft que permite uma inteiração entre várias linguagens devido um conjunto de bibliotecas que fazem com que os programas.NET executem em um ambiente nomeado CLR, ao invés de rodar no hardware. Para a codificação de sistemas baseados em .NET Framework, a Microsoft lançou o Visual Studio. Esta ferramenta é uma IDE (Integrated Development Environment) que conta com um editor de código, compilador, com modelos de projetos de exemplos, designers e assistente de códigos.

Iremos utilizar o Visual Studio para criar um programa que será uma página de cadastro utilizando a linguagem C#. Para baixar o Visual Studio acesse o site: [visualstudio.microsoft.com](https://visualstudio.microsoft.com/pt-br/), o processo para baixar e instalar é padrão e sem dificuldades.

Após a instalação veremos a primeira página para criar um novo projeto. Para isso, vamos clicar em ARQUIVO aparecerá um submenu, colocaremos o mouse em cima do termo NOVO, que, consecutivamente, aparecerá outro submenu e clicamos em PROJETO, como demostra a imagem abaixo. Na próxima janela do novo projeto que se abrirá clique, no canto esquerdo, em Visual C#, escolha a opção: Windows, depois clique em: Aplicativo do WindowsForms, escolha um nome para o projeto, que nesse exemplo será: projeto_cadastro e confirme em OK.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem1-1024x463.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem2-1024x570.png)

Agora, que o Visual Studio está com projeto criado e nomeado podemos criar o programa para cadastro de cliente. Antes, vamos iniciar com a criação do banco de dados. Em Gerenciador de Soluções vamos clicar com botão direito em cima do projeto, depois posicionar o mouse em cima de ADICIONAR e clicar em NOVO ITEM.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem3-1024x477.png)

Nessa nova janela que irá abrir vamos selecionar a palavra DADOS, no lado esquerdo, depois Banco de Dados Baseado em Serviço, nomear o banco de dados e clicar em adicionar.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem4-1024x458.png)

Nesse momento, temos que criar a tabela. Em gerenciador de Serviços, dar dois cliques no nome do baco de dados que acabamos de criar, nesse caso nomeamos de BD_cad.mdf, clique com botão direito em TABELAS e Adicionar Nova Tabela

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem5-1024x442.png)

Nesse espaço que é mostrado vamos criar os campos da tabela e configurar o campo ID de numeração automática.

Como já está com a chave primaria temos que selecionar esse campo, logo após vamos na propriedade dele e alterar a opção Identity para True.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem7-1024x474.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem6-1024x478.png)

Após isso, clique abaixo e comece a criar os campos da tabela. Nesse cadastro vamos usar Nome do tipo nachar de tamanho 50, no segundo campo vamos colocar E-mail também do tipo nachar e tamanho 50. No terceiro campo vamos colocar Celular do tipo nachar, mas com tamanho 10 e no último campo da foto vai ser do tipo image. Feito isso, vamos realizar o Update da tabela, clicando em update no canto superior direito. Na janela que abrir clique novamente em update Database.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem8-1024x439.png)

Agora, vamos voltar para o form, clicar em exibir depois clicar em outras janelas e fonte de dados.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem9-1024x480.png)

Na janela que surge, ao lado esquerdo, vamos clicar em adicionar Nova Fontes de Dados. Aparecerá uma janela do assistente de configuração, vamos clicar em Bancos de Dados e avançar, depois selecionar o modelo: Conjunto de Dados e avançar novamente. Nesse momento o nome do banco de dados que criamos aparecerá e, com isso, clique em avançar novamente. Agora os campos da tabela deveram ser todos marcados como mostram as imagens abaixo e clique em concluir.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem10-1024x442.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem11-1024x442.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem12-1024x444.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem13-1024x445.png)

Em fontes de dados irá aparecer a tabela do banco de dados, vamos fazer o procedimento de selecionar um tipo e clicar em detalhes logo após pegue a tabela e arraste para o form.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem14-1024x479.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem16-1024x477.png)

Voltamos em fonte de dados, em tabelas, mas agora para selecionar o DataGridView e arraste novamente para trazer um grid o qual vamos visualizar os campos que vamos inserir.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem17-1024x449.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem18-1024x479.png)

Para adicionarmos a foto temos que voltar em fonte de dados, selecione onde tem a opção fotos, clique na seta para baixo e escolha o tipo picturebox. Em seguida arraste o campo para o form.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem19-1024x477.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem20-1024x478.png)

Temos que criar um botão para podermos inserir a foto no picturebox, para procurar a fotos em nossos arquivos vamos em caixa de ferramentas para trazermos o OpenFileDialog. Ainda, temos que inserir o código para a foto aparecer no picturebox.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem21-1024x478.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem22-1024x479.png)

Porém, temos que inserir o código para foto aparecer no picturebox. Para isso vamos dar dois cliques no botão que criamos e vamos ser direcionado para a página do código, vamos inserir os seguintes comandos: if (openFileDialog1.Showdialog() == DialogResult.OK) na linha abaixo vamos abrir mais uma chave e inserir outro comando: fotoPictureBox.Imagelocation = openFileDialog1. FileName;.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem23-1024x478.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem24-1024x478.png)

Pronto, iremos voltar para o form e configurar a tela de aplicação, inserido dados demonstrativos para que possam ser gravados no banco de dados e observarmos a execução do programa. Clicando em iniciar, na parte de cima, quando abrir a janela de execução iremos clicar em: Adiciona Novo. Assim, podemos preencher os campos.

Para inserir a foto vamos clicar no botão que criamos e ao clicar nesse botão irá abrir a pasta do nosso computador para que possamos escolher uma foto. Por fim, vamos clicar em: Salvar dados.

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem25-1024x479.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem26-1024x480.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem27-1024x470.png)

![](http://blog.hubdaweb.com.br/wp-content/uploads/2019/03/imagem28-1024x480.png)

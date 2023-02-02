---
title: 'Javascript com JSF: descubra como funciona o Ajax'
date: '2020-03-16'
tags: ['java', 'javascript', 'programacao']
---

O AJAX (Asynchronous JavaScript and XML) é uma combinação de técnicas para o desenvolvimento da web que possibilitam às aplicações trabalhar de modo assíncrono, realizando o processamento de requisições ao servidor em segundo plano. Quer saber mais sobre o AJAX? Continue lendo este post.

## Quando foi criado o termo AJAX?

A primeira vez que o termo AJAX apareceu foi em 2005 no artigo de Jesse James Garrett chamado “Ajax: A new Approach to Web Applications ( AJAX: uma nova abordagem para aplicações Web). Neste artigo, o autor realizava a comparação de interatividade das aplicações web com aplicações desktop.

E, utilizando o termo para se referir ao uso integrado de tecnologias que já existiam como Javascript, CSS, DOM, XML, etc, a fim de criar interfaces mais responsivas e dinâmicas.

Apresenta como principal exemplo do uso dessa abordagem para as ferramentas do Google.

## Mas o que o AJAX FAZ?

De uma maneira mais simples, o AJAX é um recurso que funciona a partir de um código de Javascript na página web de um navegador de modo que a atualização ocorra em apenas uma parte da página, sem ser necessário atualizá-la por inteiro. Este processo de continuar a execução de atualização sem ficar esperando a resposta é que é conhecido como modo assíncrono.

Quando há a resposta a função Javascript especificada faz o tratamento correto dos dados retornado e atualizada a parte da tela.

## Resumindo....

Utilizar o AJAX, significa aplicar um conjunto de técnicas, ou seja, uma abordagem de programação na web para melhorar a interação do usuário, criando softwares mais intuitivos, responsivos, interativos e com interfaces mais ricas.

Não é um framework ou uma ferramenta que está disponível para download em algum site. Mas sim, utilizar os componentes fundamentais que já existem nos navegadores Web: HTML, XML, XHTML; COM; CSS, XMLHttpRequest e javascript.

## Entendendo os conceitos

### O que é Sincronia?

O conceito popular de sincronia é quando duas coisas ocorrem no exato mesmo tempo ou ritmo, como por exemplo ocorre no nada sincronizado. Já na computação, duas tarefas são síncronas quando para executar uma é necessário que a primeira seja concluída.

Já realizar uma execução de forma assíncrona significa que cada uma das tarefas executadas foi feita de forma independente, ou seja, sem ser necessário terminar uma para que a outra seja iniciada. Com isso, ao realizar tarefas de forma assíncrona se ganha tempo, pois o constante de execução de cada uma não influencia as demais.

### O que é JavaScript?

Javascript é uma das linguagens de programação mais conhecida no mundo. Tem como principais funcionalidades a capacidade de gerenciamento de conteúdos dinâmicos de um site e permitir que exista uma interação mais dinâmica do usuário

### O que é XML?

O XML, extensible markup language, consiste em uma variação da linguagem de marcação HTML.

De forma bem simples, utilizamos a linguagem de marcação HTML na exibição de dados, já a XML realiza o armazenamento e transmissão destes dados.

#### HTML

É uma linguagem composta por marcadores ou tags. Estes marcadores são interpretados pelos navegadores para que sejam renderizados e têm seus conteúdos exibidos na página de web. Não existe nenhuma regra de como as tags devem ser utilizadas, podendo ser feitas de letras maiúsculas ou minúsculas.

Muitas vezes a página é exibida com formatação irregular, principalmente por dispositivos que não possuem interpretador de HTML que consiga processar os erros na formatação. Por isso, no decorrer dos anos foram desenvolvidas novas técnicas, visando que existisse melhorias em como o HTML fosse interpretado pelos navegadores. Para isto foi criado o padrão XHTML.

#### XHTML

As páginas desenvolvidas com linguagem XHTML apresentam um maior rigor na formação das tags, pois qualquer erro na página, o documento não é considerado válido.

Assim, as tags obrigatoriamente devem ser formadas por letras minúsculas e devem ter tags de abertura e fechamento corretamente definidas.

Em virtude de apresentarem páginas com formatação regulares, a linguagem XHTML tem se tornado padrão.

### o que é CSS ?

Quando a HTML foi criada não tinha como objetivo possuir tags específicas para formatação de estilo, cor e fonte dos elementos da página. Servia única e exclusivamente para definir o conteúdo da página.

A necessidade de construir interfaces mais ricas se tornou um pesadelo para os desenvolvedores, já que era necessário criar tags específicas para cada elemento da página.

Gerando grandes dificuldades quando era necessário alterar alguma característica de uma letra ou mudar o padrão visual.

Para resolver este problema foi criada a CSS (Cascading Style Sheets, também chamadas de folhas de estilo), que consiste em marcadores específicos para formatação visual das páginas web. Através dele, todas as tags de formatação dos documentos HTML são colocadas à parte em um arquivo CSS. Assim, quando o programador precisa alterar a fonte de uma letra nas páginas, basta alternar neste arquivo que ocorre a mudança em todos os lugares.

O uso combinado do XHTML E CSS nos navegadores permite que as páginas da web sejam exibidas de uma forma graficamente rica.

### Conceito de DOM

O DOM ( Document Object Model – modelo de objeto de documentos) é uma página da web onde existe uma estrutura hierárquica em formato de árvore. Cada elemento da página, texto, imagens, botões ou tabelas, é representado por nós e renderizado pelo navegador.

### O que é XMLHttpRequest?

Todos os elementos vistos até aqui têm relação em como a informação é comunicada no navegador. Já o componente XMLHttpRequest é um elemento técnico que permite que a comunicação assíncrona com o servidor ocorra. Para tanto, basta de uma função JavaScript e um código parecido com o seguinte (de forma elementar- na prática outros detalhes são necessários):

```js
var xmlhttp;
xmlhttp = new XMLHttpRequest ( );
xmlhttp.onreadystatechange= function Trata Resposta Servidor;
xmlhttp.open('GET','nome\_curso servidor',true);
xmlhttp.send ( )
```

## Como funciona a comunicação entre o navegador e o servidor?

Antes do desenvolvimento da aplicação do AJAX, a comunicação do navegador e do servidor era extremamente irritante para o usuário, estabelecida muitas vezes no método: interage- para (espera pela resposta) – interage – para, e assim sucessivamente. Ou seja, digamos que o usuário estivesse preenchendo um formulário de uma página web, onde deveria preencher país de origem e o estado.

Quando o usuário selecionava no combobox o seu país de origem tinha que aguardar por um período para que abrisse as opções de estado, que variava de acordo com a velocidade da rede e o tempo de processamento da requisição. Enquanto ocorria o processamento, o usuário ficava olhando para uma tela em branco ou congelada.

Diferentemente com o AJAX, o preenchimento do mesmo formulário é feito de forma assíncrona. O que permite que o usuário continue visualizando a tela normalmente e/ou interagindo com ela até que o navegador obtivesse a resposta do servidor e atualizasse apenas aquela informação.

No mesmo exemplo, o usuário enquanto aguarda a resposta do servidor para preencher o estado, poderia ir preenchendo outras informações a seu respeito. Porém, cumpre ressaltar que embora na própria definição de AJAX contenha o termo assíncrono, é possível que seja escolhido pelo desenvolvedor a requisição de forma síncrona ou assíncrona.

## Onde eu consigo encontrar exemplos corriqueiros do uso de AJAX?

### Sistema de formulários, votação e avaliação

Quando o usuário realiza a compra de um produto pela internet ou preenche um formulário online existe uma operação utilizando o AJAX daquele processo. Da mesma forma, quando o usuário participa de uma votação ou avaliação em um determinado site e ele atualiza é apresentado o resultado sem ser necessário que recarregue a página.

### Canais de chat

Muito comum em páginas de empresas e prestadores de serviços, os canais de bate-papo servem como interações que permitem que o usuário obtenha informações ou suporte técnico.

Ao configurar o AJAX, o usuário continuará conversando nos canais de chat enquanto navega no site, sem que isto implique no desaparecimento das mensagens.

### Notificações de trending do Twitter

O twitter passou por uma atualização recente onde configurou o AJAX para que adiciona tweets aos trending topic automaticamente sem que a página inicial seja afetada. Ou seja, o AJAX é utilizado para otimizar a navegação de todos os processos ociosos.

Quer ver um desenvolvimento de uma aplicação web utilizando o AJAX na prática? A seguir veremos um exemplo simplificado utilizando JSF 2.

## Como desenvolver uma aplicação web utilizado o AJAX?

### Procedimentos iniciais

Neste e-book estamos utilizando o Facelets, a linguagem XHTML de representação gráfica do JSF 2, GlassFish 3.1.1, funcionando como servidor de aplicação e o Eclipse Indigo como IDE.

### Instalar o GlassFish

O instalador GlassFish já vem com todas as especificações do JAVA EE e ainda já traz instalada um plugin do Eclipse. Ademais, possui uma versão independente de IDE que permite que seja possível instalar outras aplicações de IDE, permitindo que sejam realizados outros testes e usos sem restrições do ambiente de desenvolvido.

O Glassfish pode ser baixado a partir da [URL](http://glassfish.java.net/downloads/3.1.1-final.html) , onde está localizado a de código aberto e a de código comercial.

Escolha a opção Full platform, em formato executável para Windows e selecione a instalação típica, seguindo os passos padrões até o final da execução. Ao final, realize um teste para ver se a instalação foi feita de forma correta:

Acesse um prompt de comando e abra a pasta de instalação do GlassFIsh

Acesse a pasta bin e digite “asadmin start-domain”- se estiver tudo ok, este comando iniciará o servidor.

Abra o navegador web padrão e digite “http://localhost:8080 A“ - se o servidor tiver sido iniciado corretamente será informado uma mensagem “ Your server is now running (seu servidor está em execução)

Volte ao prompt de comando e digite “asadmin stop-domain” para parar a execução.

### criando um projeto de consulta de livros

O projeto se refere a criar um sistema de consulta de livros. Os livros cadastrados ficarão armazenadas em um servidor. Quando o usuário pesquisar um livro será feita uma requisição AJAX e será devolvido uma lista de livros. Para isto, você deve seguir o seguinte passo a passo:

Abrir o Eclipse e clicar em File/New > Dynamic Web Project

Onde estiver escrito “Project name”, digite “Livraria”

Na opção “Target Runtime”, escolha a opção “GlassFish Server open Source Edition 3”

Na opção “configuration”, selecione o botão “modify”e na tela “Project Facets”, selecione a opção “JavaServer Faces 2.0”

Aperte Ok e selecione next.

Na opção “build path”, aperte next novamente.

Abrirá uma nova tela, “web Module”, onde você deverá selecionar a opção “Generate web. Sml deployment descriptor”e selecionar next novamente.

Na próxima tela abrirá as opções de JSF capabilities, onde deverá constar as informações prestadas nas etapas anteriores. Se estiver tudo de acordo, aperte “Finish”e o projeto está concluído.

Com isso, iniciamos o nosso projeto, criando as classes de atributos dos livros que poderão ser utilizados na pesquisa: autor, título, editora e isbn.

É a partir destas informações que será desenvolvido o CRUD (create, Retrieve, Update e Delete).

```java
public class Livro implements Serializable{

private Long id;

private String titulo;

private string autor;

private string editora;

private string isbn;

public Livro ( ) { }

/ / getters e setters omitidos

}
```

Posteriormente, vamos para a segunda camada de nossa aplicação, a camada de negócios, onde criaremos os métodos necessários para a classe controladora.

```java
public class Apl Cadastro livros {

private List lista livros = new ArrayList ( );

private list Lista Livros Filtrados = new ArrayList ( );

public Apl Cadastro Livros ( ) { }

public void limpar Lista Livro Filtrados ( ) {

this.list Livros Filtrados.clear( ) ;

}

public void cadastrar livro ( livro livro) {

Lista Livros.add(livro);

}

public boolean salvar Livro (livro livro Para Atualizar) {

boolean atualizado = false;

if (lista Livros.contains(livro Para Atualizar) ) {

for (livro Persistido.equals : lista Livros) {

if (livros Persistido.equals (livro Para Atualizar) ) {

livro persistido = livro Para Atualizar;

atualizado = true

break;

}

else

atualizado = false;

return atualizado;

}

public boolean excluir Livro(Livro livro Para Excluir). {

boolean excluído = false;

If (lista Livros.contains(livro Para Excluir) ) {

Lista Livros.remove(livros Para Excluir) ;

excluído = true;

}

else

excluído = false;

return excluído;

}

Public void filter livro (Livro livro Ser Pesquisado) {

lista livros Filtrados.clear ( );

if (!ivroAserPesquisado.getTitutlo().equals(“”)) {

for (Livro livro : lista Livros). {

if (livro.getTitulo( ). Contains(livro A ser Pesquisado.getTitulo( ) ) ) ) )

lista.Livros Filtrados.add(livro);

}

}

}

}

}
```

Além dessas classes básicas, é possível desenvolver classes controladoras que são referenciadas diretamente a partir de páginas web, utilizando a expression. Language e que são chamadas de Beans gerenciados.

Também é possível, inclusive, criar classes específicas como o “@SessionScope”. Esta classe permite que se dois usuários acessarem ao mesmo tempo a página será aberto duas sessões diferentes e duas instâncias de gerenciamento.

Finalmente, desenvolvemos uma nova listagem onde inserimos os códigos e controles AJAX( como inserir tag “” dentro das tags “ e ” ) permite que o usuário cadastre as informações desejadas utilizando o método AJAX. Dessa forma, toda vez que adicionarmos a tag do AJAx dentro de alguma tag, significa que estaremos diante de uma requisição AJAX e ela será realizada em resposta a algum evento gerado pelo componente.

Assim, no caso de nossa lista, podemos inserir a tag do AJAX na nossa configuração para cadastrar, editar e buscar nossa lista de livros. Dessa forma, podemos perceber que você consegue desenvolver páginas web muito mais interativas e dinâmicas para o usuário.

---
title: 'Tutorial : como criar um plugin para wordpress'
date: '2019-04-26'
tags: ['wordpress']
---

Senão conhece wordpress, acesse esse artigo [aqui](http://bg.hubdaweb.com.br/wordpress-tutorial-guia-do-iniciante/) .

Os plugins são ferramentas essenciais para a criação de sites em plataformas como o WordPress. Existem várias opções que podem ser escolhidas, mas muitas vezes não conseguimos encontrar um plugin que atenda perfeitamente aquilo que seu site precisa, e por isso acabamos nos voltando para a criação deles para que o site tenha a funcionalidade ideal para seu produto. Para o que inicialmente pode parecer algo complicado, é muito mais fácil do que parece. Acompanhe esse WordPress tutorial e confira como criar um plugin!

Como começar?

O plugin no WordPress é um programa escrito em PHP que adiciona um conjunto de recursos ou serviços para o blog do WordPress. Eles são de fácil modificação e podem adicionar ferramentas e facilidades que contribuem com seu site.

Para começar a criar seu próprio plugin é fácil. Inicialmente, você deve escolher um nome para seu plugin e criar as pastas correspondentes no diretório wp-content/plugins, e colocar nele também o arquivo .php com o mesmo nome que você escolheu antes. Se sua intenção é hospedar o plugin juntamente com os outros oferecidos pelo WordPress, você deve inserir também um arquivo de texto chamado readme.txt

Depois de criar as pastas e os arquivos, coloque uma descrição dentro do arquivo .php como uma tag de comentário e salve seu arquivo. Com isso, seu plugin já deve aparecer no painel de controle dos plugins instalados.

Hooks, Ações e Filtros

Dentro do WordPress existem hooks, que são um conjunto de funções que modificam outras já existentes ou acrescentam novas funcionalidades. Eles podem ser divididos em dois: ações e filtros. Os primeiros são funções PHP que são executadas em pontos específicos do WordPress, enquanto estes são funções associadas a uma ação existente, que fazem referência a um hook já definido.

Basicamente, para tudo funcionar, você deve adicionar uma ação e o conteúdo ao qual ela se relaciona. Para descobrir quais as ações e funções possíveis para seu plugin, o WordPress Codex é um ótimo lugar que contém essas informações, uma biblioteca de referências para que você possa criar seu plugin de maneira fácil.

No geral, é importante que todos os nomes de seus arquivos, funções e variáveis tenham um prefixo diferente em seu nome para evitar algum tipo de conflito na hora que eles forem chamados pelo arquivo principal. Existem muitas funcionalidades que podem ser exploradas na criação de plugins, e você pode ativar sua criação para testar no painel administrativo do WordPress, acessar a parte de plugins e clicar em ativar.

Agora você já sabe como dar início a sua criação do seu plugin para WordPress! Muitas das funções que você irá utilizar podem ser encontradas na própria biblioteca do WordPress, e você pode testar seu plugin enquanto o cria, para ajustá-lo da melhor maneira possível. Lembrando que, caso não queira disponibilizar seu plugin para outras pessoas, não inclua o arquivo readme.txt.

E se você gostou desse tipo WordPress tutorial e quer saber mais sobre como você pode criar ou melhorar seu site, confira nosso site e tire suas dúvidas conosco!

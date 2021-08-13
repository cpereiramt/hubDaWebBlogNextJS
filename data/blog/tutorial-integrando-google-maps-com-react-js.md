---
title: 'Tutorial : Integrando google maps com react js'
date: '2019-05-04'
tags: ['reactjs']
---

O Google Maps é um serviço de mapas online criado em 2005, é escrito em C++, javascript e Ajax. Seu API foi lançado no mesmo ano para permitir que os desenvolvedores incorporassem a plataforma em seus sites.

Em 2016, o Google Maps afirmou ter em média 1 bilhão de usuários. O site da API tem uma ótima base de dados, que é atualizada regularmente, assim como tutoriais gratuitos, amostras de códigos e sites dedicados a uma variedade de plataformas de desenvolvimento.

Atualmente, muitos aplicativos como o Waze, Uber, entre outros são integrados ao Google Maps API. Com ele é possível definir a melhor rota para cada destino e calcular o tempo entre um ponto e outro, por exemplo.

Para quem está começando seus estudos em Machine Learning em Python, utilizar o React .Js é um ótimo caminho. Vamos ver por que e como realizar essa integração.

Por que integrar o Google Maps com o React .Js?

O React é uma biblioteca Javascript criada pelo Facebook para ajudar no trabalho com interfaces de usuário. Trata-se de um framework para criar aplicativos  dentro do Python. Através dele você também pode desenvolver um aplicativo mobile compatível tanto com IOS quanto Android.

A integração do Google Maps API com o React .Js auxilia você na hora de adicionar pontos de localização especializados no mapa do seu site, por exemplo. Isso torna a usabilidade  melhor e deixa a interface objetiva e prática para localizar o usuário.

Além disso, a utilização do Maps nos permite fazer cálculos de rotas entre dois pontos, obter a localização em tempo real do usuário através do recurso do celular, e muito mais.

Dito isso, vamos explicar agora como você pode incorporar essa funcionalidade através do React . Js.

Como incorporar com o React .Js?

Separamos alguns passos simples para a integração com o Google Maps. Confira nosso React .Js tutorial :

1 - Use um script tag na sua index.html para fazer uma chamada para o API do Google Maps com um querystring que inclua a chave do API e uma função callback.

2\. Reserve um espaço no mapa no DOM, criando um elemento div nomeado.

3\. Dê uma propriedade height ao html, corpo e mapa div.

4\. Escreva a função callback InitMap usando um novo operador para criar uma classe de mapa para a Map Class do API do Google. Essa classe de mapa define um único mapa na página.

5 - Após todo o código estar agrupado, anexe a tag de script em seu index.html como antes.

Quando o app está montado, um componente React de ordem mais alta chamado de withGoogleMap assimila o componente React de apresentação com os componentes providenciados pela biblioteca, por exemplo.

Então isso retorna a uma nova classe de mapa que herda todas as funcionalidades do API do Google Maps. Você pode estilizar seu mapa usando um smart component, assim como qualquer outro props.

Agora você pode aproveitar os benefícios da integração. Esperamos que nosso tutorial sobre integração do Google Maps com React .Js tenha sido útil. Para aprender mais, continue acessando nosso conteúdo, pois postaremos a parte da codificação em breve !

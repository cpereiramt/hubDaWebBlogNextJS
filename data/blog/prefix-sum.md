---
title: 'Prefix Sum: Teoria, Aplicações e Como Resolver Problemas Computacionais'
date: '2024-09-03'
tags: ['computer science']
---

## Introdução ao Prefix Sum

O conceito de **Prefix Sum** (ou somatório prefixado) é uma técnica essencial na **ciência da computação** que otimiza o desempenho de algoritmos, especialmente em problemas que envolvem consultas frequentes sobre subarrays ou intervalos de dados. O Prefix Sum é capaz de transformar um problema que inicialmente seria resolvido em tempo linear \(O(n)\) em um problema solucionado em tempo constante \(O(1)\), sendo uma ferramenta crucial em **programação competitiva** e **otimização de algoritmos**.

Neste artigo, vamos abordar a teoria por trás do Prefix Sum, como ele funciona, suas aplicações em problemas computacionais, e exemplos práticos que demonstram seu impacto na redução da complexidade de operações.

## O Que é Prefix Sum?

Um **Prefix Sum** de um array é um novo array onde cada elemento na posição \(i\) é a soma de todos os elementos do array original até a posição \(i\). Ou seja, para um array \(A = [a_1, a_2, a_3,..., a_n]\), o array de Prefix Sum \(P\) será:

$$
P_i = \sum_{j=1}^{i} A_j
$$

Além disso, o array de Prefix Sum geralmente tem um elemento a mais no início, que é 0, para facilitar cálculos de somas em subarrays.

### Exemplo:

Dado o array \(A = [1, 2, 3, 4, 5]\), o array de Prefix Sum será:

\[
P = [0, 1, 3, 6, 10, 15]
\]

Esse valor inicial de 0 no Prefix Sum é importante para que possamos calcular somas de subarrays de forma eficiente e sem problemas de índices negativos.

## Como Construir um Prefix Sum Array?

A construção de um array de Prefix Sum é direta e pode ser feita em **tempo linear** \(O(n)\). A fórmula básica é: cada elemento do array de Prefix Sum é a soma do valor anterior mais o valor correspondente no array original.

Aqui está um exemplo de implementação em Python:

```python
def build_prefix_sum(arr):
    n = len(arr)
    prefix_sum = [0] * (n + 1)

    for i in range(1, n+1):
        prefix_sum[i] = prefix_sum[i-1] + arr[i-1]

    return prefix_sum

```

Nesse código, o array de Prefix Sum tem \(n + 1\) elementos, começando com 0, seguido pelas somas acumuladas do array original. Isso permite que as consultas de soma sobre subarrays sejam feitas de maneira eficiente.

## Aplicações do Prefix Sum

O **Prefix Sum** é amplamente utilizado em uma variedade de problemas computacionais, especialmente em casos que envolvem **múltiplas consultas** de somas sobre subarrays de um array.

### 1. Consultas de Soma de Subarray

Uma das principais aplicações do Prefix Sum é calcular a soma dos elementos de um subarray \(A[l:r]\). Sem Prefix Sum, esse cálculo seria feito em tempo linear \(O(n)\), somando cada elemento do subarray individualmente. No entanto, com o array de Prefix Sum, essa soma pode ser calculada em **tempo constante** \(O(1)\).

A fórmula para calcular a soma de um subarray usando o array de Prefix Sum \(P\) é:

$$(A[l:r]) = P[r+1] - P[l]$$

Essa técnica é extremamente poderosa quando precisamos fazer várias consultas sobre o mesmo array, já que o tempo de consulta é reduzido drasticamente.

### Exemplo:

Se tivermos \(A = [1, 2, 3, 4, 5]\) e queremos calcular a soma dos elementos \(A[2:4]\) (ou seja, \(A_2 = 3\), \(A_3 = 4\) e \(A_4 = 5\)), podemos usar o array de Prefix Sum \(P = [0, 1, 3, 6, 10, 15]\):

$$(A[2:4]) = P[5] - P[2] = 15 - 3 = 12$$

Com isso, conseguimos calcular a soma dos elementos de um subarray em tempo constante.

### 2. Problemas de Programação Competitiva

Em **programação competitiva**, muitos problemas envolvem a soma de elementos em intervalos. O Prefix Sum também pode ser expandido para trabalhar com **matrizes bidimensionais**, onde cálculos acumulados em duas dimensões são necessários, como na detecção de padrões em matrizes ou em consultas rápidas sobre dados.

Exemplo de problema: Dado um array de inteiros, retorne o número de subarrays cuja soma é igual a zero. Utilizando Prefix Sum, podemos resolver esse problema em \(O(n)\) com o auxílio de um **hash map** que armazena as somas já calculadas.

### 3. Cálculo de Médias Móveis

Outra aplicação do Prefix Sum é no cálculo de **médias móveis** de forma eficiente. Ao invés de recalcular a soma de cada subarray, podemos utilizar o array de Prefix Sum para obter a soma dos elementos de qualquer intervalo em tempo constante e dividir pelo número de elementos.

### 4. Algoritmos de Otimização

Prefix Sum também é utilizado em algoritmos de **divisão e conquista** e em problemas envolvendo grafos, onde é necessário calcular propriedades acumuladas ao longo de um caminho ou intervalo.

## Benefícios do Prefix Sum

- **Redução da Complexidade**: Ao utilizar Prefix Sum, conseguimos reduzir a complexidade de várias operações, como somas de subarrays, de \(O(n)\) para \(O(1)\) após um pré-processamento linear.
- **Versatilidade**: A técnica pode ser aplicada em diversas áreas, desde a análise de dados até a resolução de problemas competitivos.
- **Facilidade de Implementação**: A implementação do Prefix Sum é simples e traz ganhos de desempenho significativos em muitos cenários.

## Conclusão

O **Prefix Sum** é uma técnica essencial na otimização de problemas que envolvem operações repetitivas sobre subarrays. Sua simplicidade e eficácia tornam essa abordagem indispensável para desenvolvedores e cientistas da computação que buscam melhorar o desempenho de seus algoritmos.

Seja em **programação competitiva**, análise de dados ou **otimização de sistemas**, o Prefix Sum é uma ferramenta poderosa que pode acelerar a resolução de problemas e reduzir a complexidade de operações complexas.

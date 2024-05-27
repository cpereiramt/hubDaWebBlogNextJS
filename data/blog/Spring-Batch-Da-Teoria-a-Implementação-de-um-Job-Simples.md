---
title: 'Introdução ao Spring Batch: Da Teoria à Implementação de um Job Simples'
date: '2024-05-27'
tags: ['java', 'spring', 'spring batch']
---

O Spring Batch é uma poderosa estrutura de processamento de lotes (batch processing) que permite a execução eficiente e escalável de tarefas de grande volume de dados. Se você está lidando com processos que envolvem a manipulação de grandes quantidades de dados, como migrações de banco de dados, geração de relatórios, ou processamento de transações, o Spring Batch pode ser uma solução ideal. Neste post, vamos explorar a teoria por trás do Spring Batch e, em seguida, criar um exemplo prático de um job simples.

## O que é Spring Batch?

O Spring Batch é um framework de código aberto da Spring, projetado para gerenciar o processamento de grandes volumes de dados de forma eficiente. Ele oferece uma série de funcionalidades essenciais, como:

Gerenciamento de Jobs: Permite definir, executar e monitorar jobs de forma robusta.
Step Processing: Divide o trabalho em steps, onde cada step pode ter leitura, processamento e gravação de dados.
Retry e Skip: Oferece suporte a tentativas de reprocessamento e ignorar registros problemáticos.
Transações: Suporte integrado a transações, garantindo a consistência dos dados.
Escalabilidade: Pode ser configurado para rodar em múltiplos nós, distribuindo o processamento.
Estrutura Básica de um Job no Spring Batch
Um job no Spring Batch é composto por diversos componentes principais:

Job: A unidade principal de trabalho, que é composta por steps.
Step: Cada step realiza uma tarefa específica e é composto por leitura, processamento e escrita.
ItemReader: Responsável por ler os dados de uma fonte de entrada.
ItemProcessor: Processa os dados lidos.
ItemWriter: Escreve os dados processados em uma saída.
Implementação de um Job Simples
Vamos implementar um job simples que lê dados de um arquivo CSV, processa-os e grava os resultados em um banco de dados.

## Dependências

Primeiro, adicione as dependências do Spring Batch e do banco de dados no seu arquivo pom.xml (para projetos Maven):

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-batch</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.batch</groupId>
        <artifactId>spring-batch-core</artifactId>
    </dependency>
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>
</dependencies>
```

## Configuração do Job

Crie uma classe de configuração para definir o job e os steps:

```java

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.batch.item.database.BeanPropertyItemSqlParameterSourceProvider;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.builder.JdbcBatchItemWriterBuilder;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.builder.FlatFileItemReaderBuilder;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.batch.item.file.transform.DelimitedLineTokenizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.jdbc.core.JdbcTemplate;
import javax.sql.DataSource;

@Configuration
@EnableBatchProcessing
public class BatchConfiguration {

    @Bean
    public FlatFileItemReader<Person> reader() {
        return new FlatFileItemReaderBuilder<Person>()
                .name("personItemReader")
                .resource(new ClassPathResource("sample-data.csv"))
                .delimited()
                .names(new String[]{"firstName", "lastName"})
                .fieldSetMapper(new BeanWrapperFieldSetMapper<Person>() {{
                    setTargetType(Person.class);
                }})
                .build();
    }

    @Bean
    public ItemProcessor<Person, Person> processor() {
        return person -> {
            person.setFirstName(person.getFirstName().toUpperCase());
            person.setLastName(person.getLastName().toUpperCase());
            return person;
        };
    }

    @Bean
    public JdbcBatchItemWriter<Person> writer(DataSource dataSource) {
        return new JdbcBatchItemWriterBuilder<Person>()
                .itemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<>())
                .sql("INSERT INTO people (first_name, last_name) VALUES (:firstName, :lastName)")
                .dataSource(dataSource)
                .build();
    }

    @Bean
    public Job importUserJob(JobBuilderFactory jobBuilderFactory, StepBuilderFactory stepBuilderFactory, DataSource dataSource) {
        Step step = stepBuilderFactory.get("step1")
                .<Person, Person> chunk(10)
                .reader(reader())
                .processor(processor())
                .writer(writer(dataSource))
                .build();

        return jobBuilderFactory.get("importUserJob")
                .incrementer(new RunIdIncrementer())
                .start(step)
                .build();
    }
}
```

## Classe Person

Crie uma classe Person que representa os dados lidos e processados:

```java

public class Person {
    private String firstName;
    private String lastName;

    // getters e setters
}
```

## Application

Por fim, configure a aplicação Spring Boot para iniciar o job:

```java

import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BatchApplication implements CommandLineRunner {

    @Autowired
    JobLauncher jobLauncher;

    @Autowired
    Job importUserJob;

    public static void main(String[] args) {
        SpringApplication.run(BatchApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        jobLauncher.run(importUserJob, new JobParametersBuilder()
                .addLong("time", System.currentTimeMillis()).toJobParameters());
    }
}
```

## Conclusão

O Spring Batch oferece uma estrutura robusta para o processamento de grandes volumes de dados, permitindo que você defina, execute e monitore jobs de forma eficiente. Com este exemplo simples, você pode começar a explorar as capacidades do Spring Batch e adaptar a solução às suas necessidades específicas de processamento de dados. O próximo passo pode incluir a implementação de técnicas avançadas, como particionamento e paralelização, para escalar seus jobs ainda mais.

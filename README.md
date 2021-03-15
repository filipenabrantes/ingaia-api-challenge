<p  align="center">
<img  src="https://distrito.me/wp-content/uploads/2020/01/Logo_inGaia-600x338.png"  width="200"  alt="inGaia Logo" />
</p>
<h3  align="center">Desafio Técnico - Filipe N. Abrantes</h3>

## Descrição

Recebe quantidade de metros quadrados e calcula o valor do imóvel.

## Tecnologias

- NestJS
- Typescript
- NodeJS
- Jest

## Requisitos

- Validar valor de entrada do metro quadrado;
- O quantidade de metros quadrados deve estar entre 10 e 10.000.

## Instalação

```bash
$ yarn install
```

## Executando o projeto

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Testes

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov

```

## Exemplo de request

`endpoint: /?meters=50`

UI Swagger no Heroku: [Acessar](https://ingaia-calculate-property.herokuapp.com/api/)

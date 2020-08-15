<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
## Description

This Repository mainly talks about the code that has been taught in official nestjs course. the project is called "iluvcoffee"
the following are the concepts covered in this branch.

- TypeORM with Postgres
- Exception Filters
    - This a basic implementation to catch, Throe and Log the api level exceptions
- Gaurds
    - This a basic implementation to validate the api authentication  

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test
The project has only one (CoffeeService - FindOne) unit test case written and remaining has left wantedly to be coded by yourself.
The project as base structure created for e2e tests and implemented one of the test findAll() remaing is left for you to code.
```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## API Endpoints
please refer to swagger documentation at [http://localhost:3000/api-docs](http://localhost:3000/api-docs)


## Stay in touch

- Author - [Pavan Mantha](https://github.com/pavanjava)
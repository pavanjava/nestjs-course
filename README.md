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

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## API Endpoints
Will commit the OpenAPI specification for the APIs in subsequent commits
- findAll: GET /coffees/flavors
- findOne: GET /coffees/{id}
- update: PATCH /coffees/{id} along with payload
- remove: DELETE /coffees/{id}


## Stay in touch

- Author - [Pavan Mantha](https://github.com/pavanjava)
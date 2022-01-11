# Cypress Cucumber TS Project


## Installation

```bash
$ npm install
```

## Running Tests

```bash
# running tests locally ('e2e:chrome' or 'e2e:firefox)
$ npm run <script_name> 

# running with docker - run all services
$ docker-compose up

# running with docker - specify service ('chrome' or 'firefox')
$ docker-compose up <service_name>

```

## Reports
After tests are run, reports are saved in `cypress/report`.
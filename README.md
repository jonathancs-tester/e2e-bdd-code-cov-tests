# Code Coverage Example - Cypress 12

Sample project created using create-react-app to demonstrate how to extract code coverage report while running end-to-end tests with Cypress 10 or more.

## Installation

Run `npm i --no-save` to install the project and dev dependencies.

> **Note:** If you want to instrument the server app, you should request for Front End team to put the following source code:

   1) Insert dependency: "@cypress/instrument-cra": "^1.4.0" in package.json
   2) Run the instrumentation app with the command: "start": "react-scripts -r @cypress/instrument-cra start"

## Starting the app

Run `npm run start` to start the app in development mode.

## Tests

Run `npm run test` to run the tests in headless mode.


## Code coverage

Run `npm run coverage` to generate and open the HTML code coverage report.


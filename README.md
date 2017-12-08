# Revolut - Web Development Home Task

## Implementation

* React webapp implemented with React 16, Redux for state management and Styled Components for styling.

### Notes

* Every 10 minutes the app checks FX rates at https://api.fixer.io/latest, an open-source API for current and historical foreign exchange rates.
* If there are no FX rates data available all the input text fields are disabled.
* Tha initial balance is 15GBP, 0EUR and 0USD.
* If there are not enough founds to convert or if the initial value is 0, the exchange button is disabled.
* If there is an error downloading the FX rates, an alert icon will apper in the top right corner.
* If the error is fixed at the following api call, the alert icon disappers.
* Every time the app downloads data, a blue dot appers for a second in the central oval panel.

## Available Scripts

To install dependencies:
### `yarn`

To run the project:
### `yarn start`

To run the tests:
### `yarn tests`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Demo
[http://umbrella.to/revolut](http://umbrella.to/revolut)

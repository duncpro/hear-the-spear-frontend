# HearTheSpear2

This is the front-end code for HearTheSpear. The Florida State University music chart.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deployment

To deploy to the production instance, run `firebase deploy -P prod`. Make sure to add the `--prod` flag when building the production version.

To deploy to the development instance, run `firebase deploy -P dev`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Ideas
- If the amount of users grows to the point that "Now Playing" is unfeasible... We could select a random subset of the population
to query instead of requesting current listening status of everyone. We could limit the query to a random group of 30 people? 
We would also need to increase the refresh interval, that way the list isn't constantly changing.
- Top Song and artists streaks. Indicate how long the top song and top artist have held the #1 spot.  
- Add a banner to recruit a marketing major to help grow the site.

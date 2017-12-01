# e-Store

e-Store is a prototype client side application which demonstrates online shoping application which has below use cases implementations:
  * Listing Items for online sales
  * Adding Item to Cart
  * View Cart
  * Checkout
  * Submit Order

There are 3 modules coming from below services:

 * Sales
 * Finance and 
 * Customers
 
 There is Branding Modules which takes all of the above 3 modules code and create composition.
 ItOps module is also there which is not used yet. 

See the app live in action here https://roopkt.github.io/e-store

This project is inspired by Service Oriented Architecture (SOA) philosophy. 
There is an initiative going on to create prototype SOA here in this link https://github.com/Particular/Workshop.Microservices

This project is following SOA principle and trying to solve client side composition using mainly below libraries:

 * Angular Redux Library (ngrx4) https://github.com/ngrx/platform
 * Angular4 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.


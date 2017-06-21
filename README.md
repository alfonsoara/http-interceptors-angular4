# Interceptor

Copy files :

https://github.com/alfonsoara/http-interceptors-angular4/blob/master/src/app/core/http.factory.ts
https://github.com/alfonsoara/http-interceptors-angular4/blob/master/src/app/core/http.service.ts

Update http Inject in app.module.ts

`import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';`

Inject files in app.module.ts and @NgModule:

`import { HttpService } from '{route}/http.service.ts`

`import { httpFactory } from '{route}/http.factory.ts`
```
  providers: [
    {
      provide: HttpService,
      useFactory: httpFactory,
      deps: [ XHRBackend, RequestOptions]
    }
  ],
```
Finally use in your service

```
import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { HttpService } from '../../core/http.service';

@Injectable()
export class HomeService {
  constructor(
    private http: HttpService
  ) {  }

  getTodos() {
    return this.http.get('todos')
  }
}

```

If it does not work remember to download the example

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

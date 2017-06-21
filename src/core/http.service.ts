import { Injectable } from '@angular/core';
import {
  Http,
  ConnectionBackend,
  Request,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers
} from '@angular/http';
import { Observable } from "rxjs/Rx";
//import { Observable } from 'rxjs/Observable';
//import { LoaderService } from "./loader-service";
import 'rxjs/Rx';

@Injectable()
export class HttpService extends Http {

  constructor(
    //private loaderService: LoaderService
    backend: ConnectionBackend,
    defaultOptions: RequestOptions){
      super(backend, defaultOptions);
    }

    /**
    * Performs any type of http request.
    * @param url
    * @param options
    * @returns {Observable<Response>}
    */

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
      return super.request(url, options);
    }

    /**
    * Performs a request with `get` http method.
    * @param url
    * @param options
    * @returns {Observable<>}
    */

    get(url: string, options?: RequestOptionsArgs): Observable<any> {
      this.requestInterceptor();
      return super.get(this.getFullUrl(url), this.requestOptions(options))
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSubscribeSuccess(res);
      }, (error: any) => {
        this.onSubscribeError(error);
      })
      .finally(() => {
        this.onFinally();
      });
    }

    getLocal(url: string, options?: RequestOptionsArgs): Observable<any> {
      return super.get(url, options);
    }

    /**
    * Performs a request with `post` http method.
    * @param url
    * @param body
    * @param options
    * @returns {Observable<>}
    */

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
      this.requestInterceptor();
      return super.post(this.getFullUrl(url), body, this.requestOptions(options))
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSubscribeSuccess(res);
      }, (error: any) => {
        this.onSubscribeError(error);
      })
      .finally(() => {
        this.onFinally();
      });
    }

    /**
    * Performs a request with `put` http method.
    * @param url
    * @param body
    * @param options
    * @returns {Observable<>}
    */

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<any> {
      this.requestInterceptor();
      return super.put(this.getFullUrl(url), body, this.requestOptions(options))
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSubscribeSuccess(res);
      }, (error: any) => {
        this.onSubscribeError(error);
      })
      .finally(() => {
        this.onFinally();
      });
    }

    /**
    * Performs a request with `delete` http method.
    * @param url
    * @param options
    * @returns {Observable<>}
    */

    delete(url: string, options?: RequestOptionsArgs): Observable<any> {
      this.requestInterceptor();
      return super.delete(this.getFullUrl(url), options)
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSubscribeSuccess(res);
      }, (error: any) => {
        this.onSubscribeError(error);
      })
      .finally(() => {
        this.onFinally();
      });
    }


    /**
    * Request options.
    * @param options
    * @returns {RequestOptionsArgs}
    */

    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
      if (options == null) {
        options = new RequestOptions();
      }
      if (options.headers == null) {
        options.headers = new Headers();
      }
      return options;
    }

    /**
    * Build API url.
    * @param url
    * @returns {string}
    */

    private getFullUrl(url: string): string {
      return 'https://jsonplaceholder.typicode.com/' + url;
    }

    /**
    * Request interceptor.
    */

    private requestInterceptor(): void {
      //this.loaderService.showPreloader();
    }

    /**
    * Response interceptor.
    */

    private responseInterceptor(): void {
      //this.loaderService.hidePreloader();
    }

    /**
    * Error handler.
    * @param error
    * @param caught
    * @returns {ErrorObservable}
    */

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
      return Observable.throw(error);
    }

    /**
    * onSubscribeSuccess
    * @param res
    */

    private onSubscribeSuccess(res: Response): void {
      console.log(res,'en res')
    }

    /**
    * onSubscribeError
    * @param error
    */

    private onSubscribeError(error: any): void {
      //Rules here
      console.log(error,'error')
    }

    /**
    * onFinally
    */

    private onFinally(): void {
      this.responseInterceptor();
    }
  }

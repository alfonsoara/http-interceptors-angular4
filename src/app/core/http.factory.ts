import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { HttpService } from "./http.service";

export function httpFactory(
  backend: XHRBackend,
  defaultOptions: RequestOptions) {
    return new HttpService(backend, defaultOptions) }

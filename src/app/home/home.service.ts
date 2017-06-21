import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { HttpService } from '../../core/http.service';

@Injectable()
export class HomeService {

  public response: any

  constructor(
    private http: HttpService
  ) {  this.response = {status:null} }


  getTodos() {
    return this.http.get('todos')
    .map(this.handleSuccess)
    .catch(this.handleError);
  }

  handleError (error:any) {
    this.response = error.json();
    this.response.status = error.status;
    return Observable.throw(this.response);
  }

  handleSuccess (res:any) {
    this.response = res.json();
    this.response.status = res.status;
    return this.response;
  }


}

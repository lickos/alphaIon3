import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetdataProvider {
  data: any;
  constructor(public http: Http) {}

  getRemoteData(url) {
    return new Promise(resolve => {
      this.http.get(url).map(res => res.json()).subscribe(data => {
      this.data = data;
      resolve(this.data);
    });
    })
    
  }

}

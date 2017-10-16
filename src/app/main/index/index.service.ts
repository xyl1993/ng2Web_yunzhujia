import { Injectable }    from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { config } from '../../global/config';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class IndexService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

    public getInfoList(currentPage:Number,pageSize:Number,data:Object) {
        return this.http.post(config.base_api_host+'/infos/infoList/paging/' + currentPage + '/' + pageSize,data,{
            headers: this.headers
        })
        .toPromise()
        .then(response => response.json())
        .catch((error:any) => Observable.throw(error || 'Server error'));
    }
    public getInfoCategory() {
        return this.http.post(config.base_api_host+'/infos/infoCategory/list',{
            headers: this.headers
        })
        .toPromise()
        .then(response => response.json())
    }
    public getHot() {
        return this.http.post(config.base_api_host+'/infos/hot',{
            headers: this.headers
        })
        .toPromise()
        .then(response => response.json())
    }
}
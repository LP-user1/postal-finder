import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PostalService {
  readonly ApiUrl = 'https://api.postalpincode.in';
  constructor(private _http: HttpClient) {}
  getData(val: string): any {
    return this._http.get(this.ApiUrl + '/pincode/' + val);
  }
}

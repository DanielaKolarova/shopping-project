import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url = 'http://localhost:8080';
  
  constructor(private http: HttpClient) { }

  makeRequestWithData(endpoint: string, params: [], method: any) {
    return this.http[method](this.base_url + endpoint, params);
  }
  
}

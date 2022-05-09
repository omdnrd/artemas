import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  //Root URL wrapped in constant
  readonly ROOT_URL;

  //Returns http method observables
  constructor(private http: HttpClient) { 
    this.ROOT_URL = `http://localhost:3000`;
  }
  //Getting one
  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  //Creating one
  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
  //Updating one
  patch(uri: string, payload: Object) { 
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }
  //Deleting one
  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}

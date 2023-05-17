import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  constructor(private http:HttpClient) { }
getuserData(){
  let apiurl = "https://jsonplaceholder.typicode.com/todos";
  return this.http.get(apiurl);
}
}
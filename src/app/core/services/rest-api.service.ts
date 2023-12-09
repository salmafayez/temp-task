import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class RestApiService {

  BASE_PATH= "http://localhost:8080/api"

  constructor(private http: HttpClient) {}


  get<T>(url: string, params?: any): Observable<T> {
    return this.http.get<T>(this.BASE_PATH + url, {params: params});
  }

  post<T>(url: string, body?: any): Observable<T> {
    return this.http.post<T>(this.BASE_PATH + url, body);
  }
}

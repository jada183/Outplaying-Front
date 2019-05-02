import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { GenericRequest } from '../model/generic-model-request';
import { Observable } from 'rxjs';
import { isObject } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LinkerService {
  private token: string;
  constructor(private http: HttpClient) {}

  getToken(): string {
    return this.token;
  }

  setToken(token: string): void {
    this.token = token;
  }
  getEndPointUrl(service: any): string {
    const baseUrl = 'http://localhost:8080/';
    const serviceUrl = service;

    return baseUrl + serviceUrl;
  }
  postModel(genericRequest: GenericRequest): Observable<Object> {
    return this.http.post<Object>(
      this.getEndPointUrl(genericRequest.getService()),
      genericRequest.getData(),
      {
        headers: new HttpHeaders({
          Authorization: `${this.token}`
        }),
        observe: 'body',
        params: this.getParams(genericRequest.getParams())
      }
    );
  }
  postModelAuthentication(genericRequest: GenericRequest): Observable<Object> {
    return this.http.post<Object>(
      this.getEndPointUrl(genericRequest.getService()),
      genericRequest.getData(),
      {
        headers: new HttpHeaders({
          Authorization: `${this.token}`
        }),
        observe: 'response',
        params: this.getParams(genericRequest.getParams())
      }
    );
  }
  getParams(params: any, httpParams?: HttpParams): HttpParams {
    httpParams = httpParams || new HttpParams();
    for (const property in params) {
      if (isObject(params[property])) {
        this.getParams(params[property], httpParams);
      } else {
        httpParams = httpParams.append(property, params[property]);
      }
    }
    return httpParams;
  }
}

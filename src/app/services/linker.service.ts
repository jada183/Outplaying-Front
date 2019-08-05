import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent
} from '@angular/common/http';
import { GenericRequest } from '../model/generic-model-request';
import { Observable } from 'rxjs';
import { isObject } from 'util';
import { StorageAppService } from './storage-app.service';

@Injectable({
  providedIn: 'root'
})
export class LinkerService {
  private token: string;
  constructor(private http: HttpClient, private storage: StorageAppService) {}

  getToken(): string {
    return this.storage.obtenerValor('token');
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
          Authorization: 'Bearer ' + this.getToken()
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
  getModel(genericRequest: GenericRequest): Observable<Object> {
    return this.http.get<Object>(
      this.getEndPointUrl(genericRequest.getService()),
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.getToken()
        }),
        observe: 'body',
        params: this.getParams(genericRequest.getParams)
      }
    );
  }
  putModel(genericRequest: GenericRequest): Observable<Object> {
    return this.http.put(
      this.getEndPointUrl(genericRequest.getService()),
      genericRequest.getData(),
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.getToken(),
          'Content-Type': `application/json`
        }),
        observe: 'body',
        params: this.getParams(genericRequest.getParams())
      }
    );
  }
  deleteModel(genericRequest: GenericRequest): Observable<Object> {
    return this.http.delete(this.getEndPointUrl(genericRequest.getService()), {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.getToken(),
        'Content-Type': `application/json`
      })
    });
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
  postFile(genericRequest: GenericRequest): Observable<HttpEvent<{}>> {
    return this.http.post<HttpEvent<{}>>(
      this.getEndPointUrl(genericRequest.getService()),
      genericRequest.getData(),
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.getToken()
        }),
        reportProgress: true
      }
    );
  }
}

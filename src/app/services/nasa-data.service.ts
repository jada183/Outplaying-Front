import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NasaDataService {
  api_key = 'yCrf6gAiLgBSYvSeMR96e9abAf6hZJRumElmqwaQ';
  constructor(private http: HttpClient) { }

  apod(): Observable<any> {
  return  this.http.get('https://api.nasa.gov/planetary/apod?api_key=yCrf6gAiLgBSYvSeMR96e9abAf6hZJRumElmqwaQ&hd=true');
  }
}

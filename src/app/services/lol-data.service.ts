import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

// temporal token we have to change this.
const httpOptions = {
  headers: new HttpHeaders({
    'Origin': 'https://developer.riotgames.com',
    'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Riot-Token': 'RGAPI-aaaaf299-7047-40d0-843d-adb79e635921',
    'Accept-Language': 'es-ES,es;q=0.9',
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36'
  })
};
@Injectable({
  providedIn: 'root'
})
export class LolDataService {
  constructor(private http: HttpClient) {}
  getAcountData(summonername: string): Observable<any> {
    return this.http.get(
      'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' +
        summonername,
      httpOptions,
    );
  }
}

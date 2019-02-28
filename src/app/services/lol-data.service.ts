import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

// temporal token we have to change this.
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'X-Riot-Token': 'RGAPI-aaaaf299-7047-40d0-843d-adb79e635921',
    'Accept-Language': 'es-ES,es;q=0.9'
  })
};
const proxyurl = 'https://cors-anywhere.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})
export class LolDataService {
  constructor(private http: HttpClient) {}
  getAcountData(summonername: string): Observable<any> {
    return this.http.get(
      proxyurl +
        'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' +
        summonername,
      httpOptions
    );
  }

  getMatchData(encryptedAccountId: string): Observable<any> {
    return this.http.get(
      proxyurl +
        'https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/' +
        encryptedAccountId + '?endIndex=10&beginIndex=0' ,
      httpOptions
    );
  }
}

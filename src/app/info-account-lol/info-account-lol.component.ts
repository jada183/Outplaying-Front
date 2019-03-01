import { Component, OnInit } from '@angular/core';
import { LolDataService } from '../services/lol-data.service';
import { DataAcount } from '../model_lol/data-acount';
import { Match } from '../model_lol/match';

@Component({
  selector: 'app-info-account-lol',
  templateUrl: './info-account-lol.component.html',
  styleUrls: ['./info-account-lol.component.scss']
})
export class InfoAccountLolComponent implements OnInit {
  constructor(private lolDataService: LolDataService) {}
  acountName: string;
  dataAccount: DataAcount;
  matches: Match[];
  ngOnInit() {
    this.matches = new Array<Match>();
  }
  searchDataAccount() {
    console.log('clico en buscar');
    this.lolDataService.getAcountData(this.acountName).subscribe(data => {
      this.dataAccount = data;
      this.lolDataService.getMatchData(this.dataAccount.accountId).subscribe(matchInfo => {
      this.matches = matchInfo.matches;
      console.log(this.matches);
      });
    }
  );
  }
  clearValue() {
    this.acountName = '';
    this.matches =  new Array<Match>();
  }
}

import { Component, OnInit } from '@angular/core';
import { LolDataService } from '../services/lol-data.service';

@Component({
  selector: 'app-info-account-lol',
  templateUrl: './info-account-lol.component.html',
  styleUrls: ['./info-account-lol.component.scss']
})
export class InfoAccountLolComponent implements OnInit {
  constructor(private lolDataService: LolDataService) {}
  acountname: string;
  ngOnInit() {
    this.acountname = 'blade183';
    this.lolDataService.getAcountData(this.acountname).subscribe(data => {
      console.log(data);
    });
  }
}

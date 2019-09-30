import { Component, OnInit } from '@angular/core';
import { NasaDataService } from '../services/nasa-data.service';
import { Apod } from '../models_nasa/Apod';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private _nasaDataService: NasaDataService) { }
  apod: Apod;

  ngOnInit() {
    this._nasaDataService.apod().subscribe(data => {
     this.apod = data;
    });
  }

}

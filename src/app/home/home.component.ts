import { Component, OnInit } from '@angular/core';
import { NasaDataService } from '../services/nasa-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}


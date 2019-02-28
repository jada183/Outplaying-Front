import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NasaDataService } from '../services/nasa-data.service';
@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}

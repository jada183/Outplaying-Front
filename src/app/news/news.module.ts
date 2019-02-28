import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { MatCardModule } from '@angular/material/card';
import { NasaDataService } from '../services/nasa-data.service';
@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [NewsComponent],
  providers: [NasaDataService],
  exports: [NewsComponent]
})
export class NewsModule {}

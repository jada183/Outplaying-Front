import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { SharedModule } from '../shared-module/shared.module';
import { NasaDataService } from '../services/nasa-data.service';
@NgModule({
  imports: [SharedModule],
  declarations: [NewsComponent],
  providers: [NasaDataService],
  exports: [NewsComponent]
})
export class NewsModule {}

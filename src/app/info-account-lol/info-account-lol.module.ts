import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAccountLolComponent } from './info-account-lol.component';
import { LolDataService } from '../services/lol-data.service';
@NgModule({
  imports: [CommonModule],
  declarations: [InfoAccountLolComponent],
  providers: [ LolDataService ],
  exports: [InfoAccountLolComponent]
})
export class InfoAccountLolModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAccountLolComponent } from './info-account-lol.component';
import { LolDataService } from '../services/lol-data.service';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [InfoAccountLolComponent],
  providers: [LolDataService],
  exports: [InfoAccountLolComponent]
})
export class InfoAccountLolModule {}

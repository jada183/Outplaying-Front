import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAccountLolComponent } from './info-account-lol.component';
import { LolDataService } from '../services/lol-data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [InfoAccountLolComponent],
  providers: [LolDataService],
  exports: [InfoAccountLolComponent]
})
export class InfoAccountLolModule {}

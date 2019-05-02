import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StorageServiceModule } from 'ngx-webstorage-service';
@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [HttpClientModule, HttpClientModule, StorageServiceModule]
})
export class SharedModule {}

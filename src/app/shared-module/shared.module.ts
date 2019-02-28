import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [HttpClientModule, HttpClientModule]
})
export class SharedModule {}

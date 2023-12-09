import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RestApiService } from './services/rest-api.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    AppRoutingModule
  ],
  providers:[
    RestApiService
  ]
})
export class CoreModule { }

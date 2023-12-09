import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TemperatureListComponent} from "./temperature-list/temperature-list.component";
import {TemperatureService} from "./temperature.service";
import {TemperatureDetailsComponent} from "./temperature-list/temperature-details/temperature-details.component";

const routes: Routes = [
  {
    path: '',
    component: TemperatureListComponent,
  },
  {
    path: ':id',
    component: TemperatureDetailsComponent,
  },
];

@NgModule({
  declarations: [
    TemperatureListComponent,
    TemperatureDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    [RouterModule.forChild(routes)],
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TemperatureService,
  ],
  exports: [
  ]
})
export class TemperatureModule {

}

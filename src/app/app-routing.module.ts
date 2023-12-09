import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', children: [
      {
        path: 'devices',
        loadChildren: () => import('./temperature/temperature.module').then(m => m.TemperatureModule),
      }
    ]
  },
  {
    path: '', redirectTo: 'devices', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'devices'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

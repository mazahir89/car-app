import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
  {path: '', component: CarsComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'reports', component: ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActressComponent } from './mycomponents/actress/actress.component';

const routes: Routes = [
  { path: '', component: ActressComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: '', component: MapComponent },  // Default route
  // Add other routes here if necessary
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

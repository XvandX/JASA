import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestdbComponent } from './testdb/testdb.component';
import { CancionComponent } from './cancion/cancion.component';

const routes: Routes = [
  { path: 'canciones', component: CancionComponent },
  { path: '', redirectTo: '/canciones', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

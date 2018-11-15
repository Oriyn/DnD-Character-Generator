import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ADND2ndEdComponent } from './adnd2nd-ed/adnd2nd-ed.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  
  {
    path: 'ADND2ndEd',
    component: ADND2ndEdComponent
  }
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
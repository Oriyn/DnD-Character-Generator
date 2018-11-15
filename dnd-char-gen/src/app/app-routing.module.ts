import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ADND2ndEdComponent } from './adnd2nd-ed/adnd2nd-ed.component';
import { LabrynthLordComponent } from './labrynth-lord/labrynth-lord.component';
import { ADNDComponent } from './adnd/adnd.component';
import { FourthEditionComponent } from './fourth-edition/fourth-edition.component';
import { FifthEditionComponent } from './fifth-edition/fifth-edition.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'LabLord',
    component: LabrynthLordComponent
  },
  {
    path: 'ADND',
    component: ADNDComponent
  },
  {
    path: '4thED',
    component: FourthEditionComponent
  },
  {
    path: '5thED',
    component: FifthEditionComponent
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
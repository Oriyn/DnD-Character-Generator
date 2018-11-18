import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ADND2ndEdComponent } from './adnd2nd-ed/adnd2nd-ed.component';
import { LabrynthLordComponent } from './labrynth-lord/labrynth-lord.component';
import { ADNDComponent } from './adnd/adnd.component';
import { FourthEditionComponent } from './fourth-edition/fourth-edition.component';
import { FifthEditionComponent } from './fifth-edition/fifth-edition.component';
import { HomeComponent } from './home/home.component';
import { ThreePointFiveEditionComponent } from './three-point-five-edition/three-point-five-edition.component';
import { ThirdEditionComponent } from './third-edition/third-edition.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
    path: '3rdED',
    component: ThirdEditionComponent
  },
  {
    path: '3.5ED',
    component: ThreePointFiveEditionComponent
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
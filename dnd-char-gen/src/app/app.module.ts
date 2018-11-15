import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ADND2ndEdComponent } from './adnd2nd-ed/adnd2nd-ed.component';
import { AppRoutingModule } from './app-routing.module';
import { LabrynthLordComponent } from './labrynth-lord/labrynth-lord.component';
import { ADNDComponent } from './adnd/adnd.component';
import { FourthEditionComponent } from './fourth-edition/fourth-edition.component';
import { FifthEditionComponent } from './fifth-edition/fifth-edition.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ADND2ndEdComponent,
    LabrynthLordComponent,
    ADNDComponent,
    FourthEditionComponent, 
    FifthEditionComponent, 
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ADND2ndEdComponent } from './adnd2nd-ed/adnd2nd-ed.component';
import { AppRoutingModule } from './app-routing.module';
import { LabrynthLordComponent } from './labrynth-lord/labrynth-lord.component';
import { ADNDComponent } from './adnd/adnd.component';
import { DND3 } from './dnd3.5/dnd3.5.component';
import { FourthEditionComponent } from './fourth-edition/fourth-edition.component';
import { FifthEditionComponent } from './fifth-edition/fifth-edition.component';


@NgModule({
  declarations: [
    AppComponent,
    ADND2ndEdComponent,
    LabrynthLordComponent,
    ADNDComponent,
    DND3.5Component, FourthEditionComponent, FifthEditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

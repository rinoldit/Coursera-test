import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
// import { HamBurgerComponent } from '../app/ham-burger/ham-burger.component';

@NgModule({
  declarations: [
      AppComponent,
      // HamBurgerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

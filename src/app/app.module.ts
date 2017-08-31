import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './/hero-details/hero-details.component';
import { HeroService} from'./service/hero.service';
import {HeroesComponent} from './heroes/heroes.component';
import { RouterModule }   from '@angular/router';
import { PracticeBasic1Component } from './practice-basic1/practice-basic1.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      AppComponent,
      HeroDetailsComponent,
      HeroesComponent,
      PracticeBasic1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])

  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})


export class AppModule { }

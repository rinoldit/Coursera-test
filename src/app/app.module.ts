import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { CustomOneModule } from './modules/customOne/customOne.module';
import { HeroDetailComponent } from './modules/customOne/Hero_Detail/Hero_Detail.component';
import { AppRoutes, vv } from './app.routing';

import { DoctorListComponent } from './doctorList/doctorList.component';
import {Select2Component} from 'angular-select2-component';

// const appRoutes: Routes = [
//   { path: '', component: CustomOneModule },
//   { path: 'hero/:id',      component: HeroDetailComponent },
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     data: { title: 'Heroes List' }
//   },
//   { path: '',
//     redirectTo: '/heroes',
//     pathMatch: 'full'
//   },
//   { path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    vv,
    DoctorListComponent,
    Select2Component
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    CustomOneModule.forRoot(),
    AppRoutes,
  ],

  bootstrap: [AppComponent]
})


export class AppModule { }

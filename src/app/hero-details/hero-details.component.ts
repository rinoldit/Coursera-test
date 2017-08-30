import { Component, OnInit,Input } from '@angular/core';
import {  Hero } from "../domain/hero";
import {FormControl} from '@angular/forms';

import { HEROES } from "../mock-heroes";

export const StateList = ['UP','TN','KL','AP','KA'];
export const HeroDetailsList:Hero[]= HEROES;



@Component({
  selector: 'hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})

export class HeroDetailsComponent {

  @Input() hero: Hero;
  
  name = new FormControl();
 public States = StateList;
 //const ctrl = new FormControl('Hello World ');
public Heroes = HeroDetailsList;


}

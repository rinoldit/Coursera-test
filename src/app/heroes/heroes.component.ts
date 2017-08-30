import { Component,OnInit,ViewChild } from '@angular/core';
import { Hero } from "../domain/hero";
import { HeroService } from "../service/hero.service";

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})




export class HeroesComponent implements OnInit{
  
  @ViewChild("heros") heros;

ngOnInit():void{
  this.getHeroes();
}
private selectedHero: Hero;
private heroes:Hero[]
constructor(private heroService:HeroService){}

private getHeroes():Hero[]{
 this.heroService.getHeroes().then(heroes =>  this.heroes = heroes);
 console.log(this.heros);
  
 return this.heroes;
}

 

  
private onSelect(hero:Hero){

  this.selectedHero = hero;
}
    
}

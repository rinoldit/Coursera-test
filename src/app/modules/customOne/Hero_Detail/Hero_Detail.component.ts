import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../Domain/hero';
import {HeroService} from '../../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './Hero_Detail.component.html',
  styleUrls: ['./Hero_Detail.component.css'],
  providers: [HeroService]
})
export class HeroDetailComponent implements OnInit {
 heroes: Hero[];
 private heroService: HeroService;

  constructor() {
  }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
     console.log(this.heroes);
  }

}

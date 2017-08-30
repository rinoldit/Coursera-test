import {Injectable} from'@angular/core';
import {HEROES} from '../mock-heroes';
import { Hero } from "../domain/hero";

@Injectable()
export class HeroService{
   public getHeroes():Promise <Hero[]>{
    return Promise.resolve(HEROES);   
    
    // return new Promise(resolve => {
    //     // Simulate server latency with 2 second delay
    //     setTimeout(() => resolve(this.getHeroes()), 1000);
    //   });
}
    
}
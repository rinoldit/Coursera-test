import { Injectable } from '@angular/core';
import { HeroesData } from '../../assets/herosData';
import {Hero} from '../Domain/hero';

@Injectable()
export class HeroService {

getHeroes(): Hero[] {
    return HeroesData;
}

}

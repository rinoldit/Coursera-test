import { Component, OnInit } from '@angular/core';
import { Bun } from '../../../Domain/Bun';
import { Patty } from '../../../Domain/Patty';
import { Toppings } from '../../../Domain/toppings';


@Component({
  selector: 'app-ham-burger',
  templateUrl: './ham-burger.component.html',
  styleUrls: ['./ham-burger.component.css']
})
export class HamBurgerComponent implements OnInit {

  private bun: Bun;
  private patty: Patty;
  private toppings: Toppings;

  constructor() {
    this.bun = new Bun('withSesameSeeds');
    this.patty = new Patty('beef');
    this.toppings = new Toppings(['lettuce', 'pickle', 'tomato']);
  }
  ngOnInit() {
  }
}

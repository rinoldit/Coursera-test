import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {
    @Input('childValue') childValue= 'test';
    @Output('save') save = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}

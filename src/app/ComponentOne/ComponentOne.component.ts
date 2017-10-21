import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ComponentOne',
  templateUrl: './ComponentOne.component.html',
  styleUrls: ['./ComponentOne.component.css']
})
export class ComponentOneComponent implements OnInit {
public parentValue: any = 'rino';
  constructor() { }

  ngOnInit() {
  }


  // public save() {
  //   console.log('save');
  // }

  public send(e: any) {
    this.parentValue = e.target.value;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorList',
  templateUrl: './doctorList.component.html',
  styleUrls: ['./doctorList.component.css']
})
export class DoctorListComponent implements OnInit {
  public options = [ {id: 1, name: 'rino'},
                   {id: 2, name: 'josh'},
                   {id: 3, name: 'acer'},
                   {id: 4, name: 'lenovo'},
                    ];
  constructor() { }

  ngOnInit() {
    this.getDoctorList();
  }
 // tslint:disable-next-line:no-trailing-whitespace
  public getDoctorList() {
   const url = ' http://172.17.1.15:8080/master/nokRelationshipTypes ';
    console.log('$$$$$$$$$$$' , url);
  }
}

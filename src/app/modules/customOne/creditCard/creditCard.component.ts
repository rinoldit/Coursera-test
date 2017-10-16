import { Component, OnInit } from '@angular/core';
import { CreditCardService } from '../../../services/credit.service';
// import { CreditCardService } from '../../../services/credit.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './creditCard.component.html',
  styleUrls: ['./creditCard.component.css'],

})
export class CreditCardComponent implements OnInit {
  creditCardNumber: string;
  constructor(private creditCardService: CreditCardService) { }

  ngOnInit() {
    this.creditCardNumber = this.creditCardService.getCreditCard();
  }

}

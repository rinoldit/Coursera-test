import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardService } from '../../services/credit.service';
import { CreditCardComponent } from './creditCard/creditCard.component';
import {  CreditCardMaskPipe } from './creditCard/creditCardMask.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [CreditCardComponent, CreditCardMaskPipe],
  // providers: [CreditCardService],
  exports : [CreditCardComponent]
})
export class CustomOneModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CustomOneModule,
      providers: [CreditCardService]
    };
  }
}

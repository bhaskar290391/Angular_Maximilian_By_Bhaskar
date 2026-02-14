import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentDetails } from '../../investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '10';
  enteredDuration = '5';

  @Output() calculate = new EventEmitter<InvestmentDetails>();

  OnSubmit() {
    console.log('Submitted !!!');
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredAnnualInvestment);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredDuration);

    this.calculate.emit({
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration,
      initialInvestment: +this.enteredInitialInvestment,
    });
  }
}

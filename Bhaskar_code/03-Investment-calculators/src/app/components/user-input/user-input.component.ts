import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentDetails } from '../../investment.model';
import { InvestmentServiceService } from '../../investment-service.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // enteredInitialInvestment = '0';
  // enteredAnnualInvestment = '0';
  // enteredExpectedReturn = '10';
  // enteredDuration = '5';

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('10');
  enteredDuration = signal('5');

  //@Output() calculate = new EventEmitter<InvestmentDetails>();

  calculate = output<InvestmentDetails>();

  constructor(private service: InvestmentServiceService) {}

  OnSubmit() {
    console.log('Submitted !!!');
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredAnnualInvestment);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredDuration);

    this.service.calculateInvestmentResults({
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration(),
      initialInvestment: +this.enteredInitialInvestment(),
    });

    // this.calculate.emit({
    //   annualInvestment: +this.enteredAnnualInvestment(),
    //   expectedReturn: +this.enteredExpectedReturn(),
    //   duration: +this.enteredDuration(),
    //   initialInvestment: +this.enteredInitialInvestment(),
    // });

    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredDuration.set('5');
    this.enteredExpectedReturn.set('10');
  }
}

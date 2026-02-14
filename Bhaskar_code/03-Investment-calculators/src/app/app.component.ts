import { Component, signal, Signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { InvestmentDetails } from './investment.model';
import { InvestmentResultComponent } from './components/investment-result/investment-result.component';
import { result } from './result.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
})
export class AppComponent {
  //resultData: result[] = [];

  resultData = signal<result[] | undefined>(undefined);

  calculateInvestmentResults(data: InvestmentDetails) {
    const annualData = [];
    const { initialInvestment, annualInvestment, duration, expectedReturn } =
      data;
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    //this.resultData = annualData;
    this.resultData.set(annualData);
  }
}

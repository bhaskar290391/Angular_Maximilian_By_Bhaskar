import { Injectable, signal } from '@angular/core';
import { result } from './result.model';
import { InvestmentDetails } from './investment.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentServiceService {
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

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
export class AppComponent {}

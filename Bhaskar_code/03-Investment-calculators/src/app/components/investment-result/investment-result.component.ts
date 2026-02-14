import { Component, input, Input } from '@angular/core';
import { result } from '../../result.model';
import { InvestmentServiceService } from '../../investment-service.service';

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  //@Input() result?: result[];
  //result = input<result[]>();

  constructor(private service: InvestmentServiceService) {}
  result = this.service.resultData;
}

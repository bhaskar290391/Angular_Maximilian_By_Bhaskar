import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultComponent } from './investment-result/investment-result.component';
import { BrowserModule } from '@angular/platform-browser';

import { UserInputModule } from './user-input/user-input.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentResultComponent],
  imports: [BrowserModule, UserInputModule, CommonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

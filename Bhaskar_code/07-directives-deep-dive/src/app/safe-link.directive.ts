import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  constructor() {
    console.log('Directive initiated ');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const leavePage = window.confirm('Do You want to leave this page ??');

    if (leavePage) {
      return;
    }

    event.preventDefault();
  }
}

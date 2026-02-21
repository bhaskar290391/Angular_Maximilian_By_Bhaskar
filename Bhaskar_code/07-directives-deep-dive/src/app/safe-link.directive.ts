import { Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  @Input() queryParam?: string;

  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('Directive initiated ');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const leavePage = window.confirm('Do You want to leave this page ??');
    // const address = (event.target as HTMLAnchorElement).href;

    // (event.target as HTMLAnchorElement).href =
    //   address + '?from=' + this.queryParam;

    if (leavePage) {
      const address = this.hostElementRef.nativeElement.href;

      this.hostElementRef.nativeElement.href =
        address + '?from=' + this.queryParam;
      return;
    }

    event.preventDefault();
  }
}

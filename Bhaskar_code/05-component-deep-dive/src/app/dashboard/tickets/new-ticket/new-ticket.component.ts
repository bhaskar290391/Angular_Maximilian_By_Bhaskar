import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ControlComponent, ButtonComponent, FormsModule],
})
export class NewTicketComponent {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  OnSubmit(input: string, texterea: string) {
    console.log('Clicked !!!' + input + ' ==> ' + texterea);
    this.form()?.nativeElement.reset();
  }
}

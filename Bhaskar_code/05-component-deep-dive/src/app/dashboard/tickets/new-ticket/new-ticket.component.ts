import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit {
  enteredInput = '';
  enteredTextArea = '';

  @Output() add = new EventEmitter<{ title: string; request: string }>();

  ngOnInit(): void {
    // Component initialization logic
    console.log('NewTicketComponent initialized');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    // Form reference is now available via viewChild signal
    console.log('Component initialized, form reference available');
    console.log(this.form?.nativeElement);
  }

  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  // form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  OnSubmit() {
    this.add.emit({ title: this.enteredInput, request: this.enteredTextArea });
    //this.form()?.nativeElement.reset();
    //this.form?.nativeElement.reset();
    this.enteredInput = '';
    this.enteredTextArea = '';
  }
}

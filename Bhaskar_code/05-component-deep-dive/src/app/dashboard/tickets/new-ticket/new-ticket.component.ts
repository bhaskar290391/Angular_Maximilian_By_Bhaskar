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

  OnSubmit(input: string, texterea: string) {
    console.log('Clicked !!!' + input + ' ==> ' + texterea);

    this.add.emit({ title: input, request: texterea });
    //this.form()?.nativeElement.reset();
    this.form?.nativeElement.reset();
  }
}

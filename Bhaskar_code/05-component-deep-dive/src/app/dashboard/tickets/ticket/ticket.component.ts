import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  @Input({ required: true }) ticket!: Ticket;

  @Output() close = new EventEmitter();

  detailVisible = signal(false);

  toggleData() {
    this.detailVisible.update((wasVisible) => !wasVisible);
  }

  OnClosed() {
    this.close.emit();
  }
}

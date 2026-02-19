import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  addNewTicket(data: { title: string; request: string }) {
    const dataInput: Ticket = {
      id: Math.random().toString(),
      status: 'Open',
      title: data.title,
      request: data.request,
    };

    this.tickets.push(dataInput);
  }
}

import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddNewtask } from '../task/task.model';

@Component({
  selector: 'app-add-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.css',
})
export class AddNewTaskComponent {
  @Output() cancelled = new EventEmitter();
  @Output() add = new EventEmitter<AddNewtask>();

  //using Signal
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  //traditional way of declaring ngmodel variable
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  onCancelled() {
    this.cancelled.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    });
  }
}

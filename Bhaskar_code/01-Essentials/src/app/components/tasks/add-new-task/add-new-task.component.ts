import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddNewtask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.css',
})
export class AddNewTaskComponent {
  @Input({ required: true }) userId?: string;
  @Output() close = new EventEmitter();
  @Output() add = new EventEmitter<AddNewtask>();
  constructor(private service: TasksService) {}

  //using Signal
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  //traditional way of declaring ngmodel variable
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  onCancelled() {
    this.close.emit();
  }

  onSubmit() {
    if (!this.userId) return;
    this.service.addNewTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.userId,
    );
    this.close.emit();
    // this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   dueDate: this.enteredDate,
    // });
  }
}

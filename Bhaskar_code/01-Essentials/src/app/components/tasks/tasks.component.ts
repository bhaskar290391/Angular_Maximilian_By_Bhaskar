import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddNewtask, Task } from './task/task.model';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddNewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // @Input({ required: true }) name!: string;

  //optional types
  @Input() userId?: string;
  @Input() name?: string;
  isAddingNewTask: boolean = false;

  Tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedTask() {
    return this.Tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.Tasks = this.Tasks.filter((task) => task.id !== id);
  }

  onStartNewTask() {
    this.isAddingNewTask = true;
  }

  onCancellingNewTask() {
    this.isAddingNewTask = false;
  }

  onAddNewTask(task: AddNewtask) {
    this.Tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId || '',
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    });
    this.isAddingNewTask = false;
  }
}

import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddNewtask, Task } from './task/task.model';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddNewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // @Input({ required: true }) name!: string;

  constructor(private service: TasksService) {}

  //optional types
  @Input() userId?: string;
  @Input() name?: string;
  isAddingNewTask: boolean = false;

  get selectedTask() {
    return this.service.getTaskByUserId(this.userId!);
    //this.Tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.service.removedTask(id);
    //this.Tasks = this.Tasks.filter((task) => task.id !== id);
  }

  onStartNewTask() {
    this.isAddingNewTask = true;
  }

  onCancellingNewTask() {
    this.isAddingNewTask = false;
  }

  onAddNewTask(task: AddNewtask) {
    // this.Tasks.push({
    //   id: new Date().getTime().toString(),
    //   userId: this.userId || '',
    //   title: task.title,
    //   summary: task.summary,
    //   dueDate: task.dueDate,
    // });
    this.service.addNewTask(task, this.userId!);
    this.isAddingNewTask = false;
  }
}

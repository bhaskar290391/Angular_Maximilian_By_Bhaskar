import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private loggingService = inject(LoggingService);

  constructor() {}

  private tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newtask: Task = {
      ...taskData,
      status: 'OPEN',
      id: Math.random().toString(),
    };

    this.tasks.update((oldTask) => [...oldTask, newtask]);

    this.loggingService.log('Adding new Task to the list');
  }

  updateTaskService(taskid: string, status: TaskStatus) {
    console.log(this.allTasks());
    this.tasks.update((oldTask) =>
      oldTask.map((task) =>
        task.id === taskid ? { ...task, status: status } : task,
      ),
    );
    this.loggingService.log('updating status of task to ' + status);
  }
}

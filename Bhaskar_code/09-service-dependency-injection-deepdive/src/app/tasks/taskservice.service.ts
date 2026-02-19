import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  tasks = signal<Task[]>([]);

  addTask(taskData: { title: string; description: string }) {
    const newtask: Task = {
      ...taskData,
      status: 'OPEN',
      id: Math.random.toString(),
    };

    this.tasks.update((oldTask) => [...oldTask, newtask]);
  }
}

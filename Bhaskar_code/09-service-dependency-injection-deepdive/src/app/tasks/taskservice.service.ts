import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
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
  }

  updateTaskService(taskid: string, status: TaskStatus) {
    console.log(this.allTasks());
    this.tasks.update((oldTask) =>
      oldTask.map((task) =>
        task.id === taskid ? { ...task, status: status } : task,
      ),
    );
  }
}

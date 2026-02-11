import { NgModule } from '@angular/core';
import { FormsModule, NgModelGroup } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TaskComponent, TasksComponent, AddNewTaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}

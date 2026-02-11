import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { UserComponent } from './components/user/user.component';
import { CardComponent } from './components/shared/card/card.component';
import { AddNewTaskComponent } from './components/tasks/add-new-task/add-new-task.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    TasksComponent,
    UserComponent,
    CardComponent,
    AddNewTaskComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModules {}

import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/mock.taskas';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks$!: Observable<Task[]>;
  test$ = new Subject<any>();

  constructor(private taskService: TaskService) {
    this.test$.next(this.tasks$);
  }

  ngOnInit(): void {
    this.getTasks();
  }

  onDeleteTask(id: number) {
    this.taskService
      .deleteTask(id)
      .pipe(tap(() => this.getTasks()))
      .subscribe();
  }

  getTasks() {
    this.tasks$ = this.taskService.getTasks();
  }

  toggle(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService
      .sendTask(task)
      .pipe(tap(() => this.getTasks()))
      .subscribe();
  }
}

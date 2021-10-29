import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/mock.taskas';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks$!: Observable<Task[]>;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  onDeleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => this.getTasks());
  }

  getTasks() {
    this.tasks$ = this.taskService.getTasks();
  }

  toggle(task: Task) {
    task.reminder = !task.reminder;
  }
}

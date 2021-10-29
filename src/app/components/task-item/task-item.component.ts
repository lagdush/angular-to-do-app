import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/mock.taskas';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() delete: EventEmitter<number> = new EventEmitter();
  @Output() toggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}

  deleteTask(task: number | undefined) {
    if (!task) return;
    this.delete.emit(task);
  }

  onToggle(task: Task) {
    this.toggleReminder.emit(task);
  }
}

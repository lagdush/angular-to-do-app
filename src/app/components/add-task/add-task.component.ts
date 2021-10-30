import { UiService } from './../../services/ui.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/mock.taskas';
import { TaskFromForm } from './taskClass';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((val) => (this.showAddTask = val));
  }

  ngOnInit(): void {}

  onSubmit() {
    const newTask = new TaskFromForm(this.text, this.day, this.reminder);
    this.onAddTask.emit(newTask);
    this.clear();
  }

  clear() {
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}

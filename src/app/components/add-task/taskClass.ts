import { Task } from 'src/app/mock.taskas';

export class TaskFromForm implements Task {
  text: string;
  day: string;
  reminder: boolean = false;
  constructor(text: string, day: string, reminder: boolean = false) {
    this.text = text;
    this.day = day;
    this.reminder = reminder;
  }
}

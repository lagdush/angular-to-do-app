import { Injectable } from '@angular/core';
import { Task } from 'src/app/mock.taskas';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOpstions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private TASK_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.TASK_URL}tasks`);
  }

  deleteTask(id: number): Observable<Task[]> {
    return this.http.delete<Task[]>(`${this.TASK_URL}tasks/${id}`);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    return this.http.put<Task>(
      `${this.TASK_URL}tasks/${task.id}`,
      task,
      httpOpstions
    );
  }

  sendTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.TASK_URL}tasks/`, task, httpOpstions);
  }
}

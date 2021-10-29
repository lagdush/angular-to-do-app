import { Injectable } from '@angular/core';
import { Task } from 'src/app/mock.taskas';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
}

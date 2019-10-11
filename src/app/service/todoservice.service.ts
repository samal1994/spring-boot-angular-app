import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Todo } from '../model/todo';
import { Observable } from 'rxjs';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor(private httpClient : HttpClient) { }

  getTodoResources():Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(`${API_URL}/users/todos`);
 }
 deleteTodo(id){
  return this.httpClient.delete(`${API_URL}/users/todos/${id}`);
 }
 reTriveTodo(id){
  return this.httpClient.get<Todo>(`${API_URL}/uptodo/${id}`);
 }
 upDateTodo(todo){
  return this.httpClient.put(`${API_URL}/update`,todo);
 }
 saveTodo(todo){
  return this.httpClient.post(`${API_URL}/save`,todo);
 }
}

import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../service/todoservice.service';
import { Todo } from '../model/todo';
import { Router } from '@angular/router';

// export class Todo{
//   constructor(
//     public id : number,
//     public description : String,
//     public Targetdate : Date,
//   ){

//   }
// }
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  apiresponse : String;
  todos : Todo[]
  todo : Todo;
  message :String;
  // todos=[
  //   new Todo(1,'civil engineering',new Date),
  //   new Todo(2,'cse',new Date),
  //   new Todo(3,'electrical engineering',new Date),
  // ]
  
  constructor(private todoService : TodoserviceService,
    private router : Router) { }

  ngOnInit() {
    this.reFreshtods();
  }
  reFreshtods(){
    this.todoService.getTodoResources().subscribe(item=>{
      this.todos= item},
      error =>{ this.handleErrorResponse(error);
        
   });
  }
  handleErrorResponse(error){
    //console.log(error);
    this.apiresponse=error.error.message;
  }
  deleteTodo(id){
    this.todoService.deleteTodo(id).subscribe(data=>{
      this.message=`deletion of todo ${id} sucessfull`;
      this.reFreshtods();
    })
  }
  updateTodo(id){
       this.router.navigate(['uptodo',id]);
   }
   saveToDo(){
    this.router.navigate(['uptodo',-1]);
   }
}
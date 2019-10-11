import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../service/todoservice.service';
import { Todo } from '../model/todo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatetodo',
  templateUrl: './updatetodo.component.html',
  styleUrls: ['./updatetodo.component.css']
})
export class UpdatetodoComponent implements OnInit {
id :  number
todo : Todo;
  constructor(private todoService : TodoserviceService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id']
    if (this.id !=-1) {
      this.todoService.reTriveTodo(this.id).subscribe(items=>{
        this.todo= items});
    } else {
      this.todo=new Todo();
    }
    
  }
  upDateToDo(){
    this.id=this.route.snapshot.params['id'];
    if (this.id!=-1) {
      console.log(this.id);
      console.log("updated");
      
      this.todoService.upDateTodo(this.todo).subscribe(items=>{
        this.router.navigate(['todos']);
      });
    } else {
      console.log(this.id);
      console.log("saved");
      console.log(this.todo);
      this.todoService.saveTodo(this.todo).subscribe(items=>{
        this.router.navigate(['todos']);
      });
    }
    
  }

}

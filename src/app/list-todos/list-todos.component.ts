import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo[]
  // =[
  //   new Todo(1,"Learn to Code",false,new Date()),
  //   new Todo(2,"Learn to Eat",false,new Date()),
  //   new Todo(3,"Learn to Sleep",false,new Date())
  // ]

  // todos=[
  //   {id:1, description: "Learn to code"},
  //   {id:2, description: "Learn to eat"},
  //   {id:3, description: "Learn to sleep"}
  // ]

  message: String
  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos("sarath").subscribe(
      response =>{
        //console.log(response);
        this.todos=response;
      }
    )
  }

  deleteTodo(id){
    this.todoService.deleteTodo("sarath",id).subscribe(
      response=>{
        //console.log("deleted");
        this.message=`Delete of Todo ${id} successful`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
   // console.log(`update todo ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo(){
  
    this.router.navigate(['todos',-1]);
  }

}

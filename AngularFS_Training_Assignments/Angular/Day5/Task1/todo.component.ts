import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  addToDo: string = "";
  toDoItem: string = "";
  id: number = 0;

  toDoArray:any[] = [
    {id: 1, toDoItem: "Learn ReactJS basics"},
    {id: 1, toDoItem: "Practice RewactJS"},
    {id: 1, toDoItem: "Learn Redux"},
    {id: 1, toDoItem: "Code portfolio in React"},
    {id: 1, toDoItem: "Learn React Native"}
  ];


  addToDoItem_click()
  {
    let toDoArray: any = new Object();
    toDoArray.toDoItem = this.addToDo;
    this.toDoArray.push(toDoArray);
  }

  deleteAllItems_click()
  {
    this.toDoArray = [];
  }

  selectToDoItem(id: number)
  {
    let obj: any = this.toDoArray.filter(item => item.id == id);
    this.id = id;
    this.toDoItem = obj[0].toDoItem;
  }

  deleteSelectedItem(id: number)
  {
    let obj: any = this.toDoArray.filter(item => item.id == id);
  }

  deleteClick(id: number): void{
    let index = this.toDoArray.findIndex(item => item.id = id);
    this.toDoArray.splice(index, 1);
  }

  editToDoItem()
  {
    let obj: any = this.toDoArray.filter(item => item.id == this.id);
    obj[0].id = this.id;
    obj[0].toDoItem = this.toDoItem;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

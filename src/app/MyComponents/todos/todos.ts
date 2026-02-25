import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItem } from '../todo-item/todo-item';
import { AddTodo } from '../add-todo/add-todo';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoItem, AddTodo],
  templateUrl: './todos.html',
  styleUrls: ['./todos.css'],
})
export class Todos {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'this is title 1',
        desc: 'description of todo 1',
        active: false,
      },
      {
        sno: 2,
        title: 'this is title 2',
        desc: 'description of todo 2',
        active: true,
      },
      {
        sno: 3,
        title: 'this is title 3',
        desc: 'description of todo 3',
        active: true,
      },
    ];
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}

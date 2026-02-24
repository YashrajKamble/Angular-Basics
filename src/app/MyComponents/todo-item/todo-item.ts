import { Component, Input } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.html',
  styleUrls: ['./todo-item.css'],
})
export class TodoItem {
  @Input() todo!: Todo;
}

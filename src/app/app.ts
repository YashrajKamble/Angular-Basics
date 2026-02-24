import { Component, signal } from '@angular/core';
import { Todos } from './MyComponents/todos/todos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Todos],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {
  protected readonly title = signal('todo-list');
}

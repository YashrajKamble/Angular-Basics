import { Component, signal } from '@angular/core';
import { Todos } from './MyComponents/todos/todos';
import { RouterOutlet, RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Todos, RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {
  protected readonly title = signal('todo-list');
}

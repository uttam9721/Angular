import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Event } from './event/event';

@Component({
  selector: 'app-root',
  imports:[Event],
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dayOne');
  name= "Angular Tutorial"
  age=22
  isAdmin=true;
  count=5
  

}

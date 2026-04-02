import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  handleClick(){
    console.log('Button clicked!');
  }

  onTyping(event: any) {
    console.log('User is typing:', event.target.value);
  }

  onKeyUp(event: any) {
    console.log('Key released:', event.key);
  }

  onHover(){
    console.log('Mouse is hovering over the element!');
  }

  onMouseLeave(){
    console.log('Mouse has left the element!');
  }
  onBlur(){
    console.log('Input field lost focus!');
  }
  onFocus(){
    console.log('Input field is focused!');
  }
}

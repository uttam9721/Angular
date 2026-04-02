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
}

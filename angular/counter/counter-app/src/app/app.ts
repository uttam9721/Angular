import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  email:string="";
  counter:number=0;
  Increment(){
    this.counter++;
  }
  Decrement(){
    this.counter--;
  }
  Reset(){
    this.counter=0;
  }
  getEmail(val:string){
    this.email=val;
  }

}

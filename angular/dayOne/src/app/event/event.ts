import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
  count=0;
  increment(){
    this.count++;
  }
  showEvent(e:any){
    console.log(e);
    
  }
  username='';
  updateUser(value:string){
    this.username=value;
  }
  handleSubmit(e:any){
    e.preventDefault();
    console.log('form submitted');
    
  }
}

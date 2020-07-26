import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prathyushas AWESOME Project';
  emittedEvent = "";
  myFunction(): void { 
       alert('Successfully bound!'); 
   } 
   emitThisEvent($event){
      this.emittedEvent = $event;
   }
}

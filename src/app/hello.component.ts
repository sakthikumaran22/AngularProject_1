import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl:
    '<h1> Hello {{title}}! </h1> <button (click)="emitEvent()"> Emit an Event </button>'
})
export class HelloComponent {
  @Input() title: string;
  @Output() testEvent = new EventEmitter();
  public emitEvent() {
    this.testEvent.emit('Hey you successfully emitted an event');
  }
}

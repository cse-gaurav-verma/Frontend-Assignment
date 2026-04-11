import { Component, EventEmitter, input, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  imports: [],
  templateUrl: './childcomp.html',
  styleUrl: './childcomp.css',
})
export class Childcomp {
  @Input() namegiven:string = ''
  @Output() data = new EventEmitter<string>()
  senddata(){
    this.data.emit(`hey parent child`)
  }
}

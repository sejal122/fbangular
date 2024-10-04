import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  standalone: true,
  imports: [],
  templateUrl: './childcomp.component.html',
  styleUrl: './childcomp.component.css'
})
export class ChildcompComponent {
  
 @Input('parentData')
  public name!: string;
@Output() public childEvent=new EventEmitter();
sendEvent(){
this.childEvent.emit('Event from child')
}
constructor(){

}
  ngOnInit(){
  
  }
}

import { Component ,EventEmitter,Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-childcomp2',
  standalone: true,
  imports: [],
  templateUrl: './childcomp2.component.html',
  styleUrl: './childcomp2.component.css'
})
export class Childcomp2Component implements OnInit {
  ngOnInit(): void {
    
  }
public counter:number=0;

 @Input('parentData') public name!:string;

 @Input('lname') public lastName!:string;
 
 @Output() public childEvent =new EventEmitter()
 sendData(){
  this.childEvent.emit('Hello from child component')
 }
 increment(){
  this.counter++
 }
 decrement(){
  this.counter--
 }
}

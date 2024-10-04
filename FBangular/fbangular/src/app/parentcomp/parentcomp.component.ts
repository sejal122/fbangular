import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Childcomp2Component } from '../childcomp2/childcomp2.component';
import { SetbgDirective } from '../setbg.directive';

@Component({
  selector: 'app-parentcomp',
  standalone: true,
  imports: [Childcomp2Component,SetbgDirective],
  templateUrl: './parentcomp.component.html',
  styleUrl: './parentcomp.component.css'
})
export class ParentcompComponent implements AfterViewInit {

  AfterViewInit(){
    
  }
  ngAfterViewInit(): void {
    
    console.log(this.h1)
    this.h1.last.nativeElement
    .style.color='red'
   
  }
public message!:string;
public name='Shreya'
public lname='Gupta'

  @ViewChildren('h1')
  h1!: QueryList<any>;
  @ViewChild('childComp') child!:Childcomp2Component

inc(){
  this.child.increment()
}
dec(){
  this.child.decrement()
}
}

import { Component } from '@angular/core';
import { MydataService } from '../mydata.service';
@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})

export class LandingpageComponent {
name:string='';

getData(){
this.name=this.dservice.sendData()
}
getstoredata(){
  this.dservice.getApidata()
}
constructor(private dservice:MydataService){

}
}

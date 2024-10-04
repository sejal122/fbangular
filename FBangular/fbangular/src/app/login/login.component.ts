import { Component } from '@angular/core';
import { MydataService } from '../mydata.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  providers:[MydataService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name:string=''

  getData(){
    this.name=this.myservice.sendData();
  }
  constructor(private myservice:MydataService){

  }


}

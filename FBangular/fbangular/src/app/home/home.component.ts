import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  productdata:any;
constructor(private myservice:MydataService){

}
  ngOnInit(): void {
    this.gethttpdata()
  }
gethttpdata(){
 this.myservice.getHttpData().subscribe({
  next:(data)=>{
    this.productdata=data
    console.log(data)
    console.log(this.productdata)

  }
 })
  
}

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
  
})
export class MydataService {
name:string='Jhon '
sendData():string{
  return this.name
}
fullname():string{
  return name+'William'
}
getApidata(){
  fetch('http://localhost:3000/items')
  .then((res)=>res.json())
  .then((data)=>console.log(data))
}
addApidata(){
  fetch('http://localhost:3000/items',{
    method:"POST",
    body:JSON.stringify( {
      "title": "new product",
      "price": 200,
      "description": " this is my new product .Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing new",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
          "rate": 3.9,
          "count": 120
      }
  })
  }


  )
  .then((res)=>res.json())
  .then((data)=>console.log(data))
}
  constructor(private http:HttpClient) {
    

   }
   getHttpData():Observable<any>{
     return this.http.get('http://localhost:8080')

   }
}

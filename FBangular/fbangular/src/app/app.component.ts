import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReversestringPipe } from './reversestring.pipe';
import { MultiplierPipe } from './multiplier.pipe';
import { ChildcompComponent } from './childcomp/childcomp.component';
import { ParentcompComponent } from './parentcomp/parentcomp.component';
import { TemplatedrivenformsComponent } from './templatedrivenforms/templatedrivenforms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { SetbgDirective } from './setbg.directive'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,LoginComponent,RouterOutlet,FormsModule,CommonModule,ReversestringPipe,MultiplierPipe,ParentcompComponent,RouterLink,TemplatedrivenformsComponent,ReactiveformsComponent,SetbgDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})

export class AppComponent {
  title = 'fbangular';
  
   users = [
    { name: 'John Doe', age: 32 },
    { name: 'Jane Smith', age: 28 },
    { name: 'Bob Johnson', age: 45 }
  ];
  isLoggedIn:boolean=true
  name='Rajat'
  
  inStock:number=10
  description='Shampoo'
  cart:number=0
  imagesrc='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRcXFxcXFRUVFRUWFxUVFRcYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0OFQ8PFSsZFRkrKy0rKysrKy0tLS0tKy0rKystLSstKystKy0tKy0tKystLS0tKy0tKyw3LSsrNysrLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAQIDBAUGBwj/xAA8EAACAgADBAcECAQHAAAAAAAAAQIRAxJRBAUTkRQhMUFxobEGYXOBIiQyM1OywdEVUpLwIzRUcoKTwv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAwIE/8QAIBEBAAMBAAAHAQAAAAAAAAAAAAERMQIDExQhMkFREv/aAAwDAQACEQMRAD8A+hgKxmLYAAgGAgsBiYAAgACAEwYBSbExsiwpWJgxMikyLGyLIItiY2RATZFkmQZFJkWNkSBMTQ2RYUhMbEyBMixsRFKxEmRaCgVgABmAVgB6QAA2YgAEVDAAYAIAIoBgIAAQMBCGJhSZBskc/f8A/lsb4U/ysgji762aLae0YNpW1xItpe9J9Rnh7S7E3S2vZ7+LBerPkPs87jtV/hP1PKOX0vmaeXDPzJfpuMk1aaaatNdaa7mmJnF9kMT6js3wMNco0dXiGUtYTZEMwiKTIjE2RUWJjZEgQh2JgITYMCKTENkQoBiHZA1YEGAHpAsAN2IABAMAEAxAFgAMQWACYCsKZFjZGyAMG/F9XxvhT/KzcY97/cYvw5/lYgnHxX2ZXVtfwpep5KX2vmer9nJV0r4U/VHlJfa+Z6Pp533f2Sl9S2f4UTrqRwvZKf1PA+GvVnYjI8s7L1RkNMWSKoMmRTYmwEwATBiIIsQ2IikIGDCkRY2ACsLECIHQhgB6ELIhZsySHZCx2A7AVhZQwFYrAYMjYWQMVgIB2JsVisKGY98v6vjfCxPyMtx5StKLq7v5GLFjmTjKcmmmmqVNPqaeqOJ7iJdx4czD4ruOXXtHvw5nmpNZvmfeJ7hwI3w4RjfbUIRvkjI9z4V9eGn8l+x36iPxx6af0vZGX1LA/wBn/pnYjIo2bAwoxUVGcUuxRkkl4KizGjklV2qi1farXYZf3ctf4qGuEixMwwxS+EyuWmxNleYaYRIiwsApNiY2RsgGILEwoYgCyBAAAIAADu2NMrsLNWayx2V2OyiyxWQsdgTERsMwErFZGwsCVhZGwsBisVisgz7TOpQfvZXGPWPbe75hhGHevT4fxg8TCMc8I68kmrMjwzl2yRwTPvP7T8ILyOpk7fA4+8Z9d+H6lhz1kqsORpw2YsORpwmaMWpFkWUxZNMInYNiBgJiALCkJg2KwCwFYEAxUNiALAQwOu5BmIJhZo4WWPMVWOwLMw7K7BMqLLCyvMGYCywshmFYFtishmCwJ2JsjYmwM+2Ps+ZOMLS667H4+5lO1P8AU0Yfd4GHey9PHxhDGwWl97JOqvqv7Sd9a9zX/J+6pYGDfXxG319+qXPs8y/F7COyzp1qc37uq9kY4LSk8zdRa6/G78TgbxfU/Ffqejx5VCfI8zvOXU/FfqdfcOZyVGDI24TObgyN2Eztk1xZYimLLUwJ2KxWIACwYmwBsQWJsgBBYWAMSBhYBmGIArpZgzELCztwszBZCwsIssLK7CwLLCyuwsCzMOypsEUWWFkLDMBOwbIZhNgVbS+o1Lu8EYdofUa77PBGPWy9HGQ8B7eRfSnSbtQSS6szyxpLmuZyN4bIk2sKKvDTnKUZPLLDyQlGdzfW39N1HuaXcz1HtXuba8XGlLCinBqNfSgnailKrdx7KddtHIfs7t3CWHw1Sld58P7NOop3aVyxHV19N/PSOopJibfQdpbbdnD3v9l+KO5PvOJvxfQfjH1Mo131ksGzyOjgs5OzSOngM7YNsWWRKIsuiUTsVDsTAQMVhYCYBYiAsBAAWArCwpgRADeGYr4i1XMOItUdOFtgV8RarmHEWvmUW2JsrzrVD4i1XMCywsr4i1QLEWq5oCyxWQ4i1QcRaoCYWQ4i1XMM8dVzQE7E2R4i1XMjKa1QEMc0wfZ4Ix4kl/fzNUOtLwMutejjGzEj1GaRqxYrL2dvvMKh19lfO+12+/U4mHcJPsOLv/7t+MfU7TjSOJ7Qv/CfjH1Ooc9ZLj7KzqYDONss1qjq4E1quZ2xdCDLoyMsJrVcy6OItVzQRemFlfEWq5hxFquaKJ2RI8RarmiPEjquZBZYmReItVzRHirVc0BNsLIcWOq5oOJH+Zc0FSbBshxVquaDir+Zc0BOwK+LHVcwA9RlDKTA0Zo5QykhlEcoZSaGEV5QylgUBXlDKWioCvKGUsodAVURlEvojJAcrea6l4leC+pF29OxeJmwX2GHevT4fxdDhpx5977+0o4Cfnr39pdGfUVSxTl2htHYcTfn3b8Y+p1cR2cvfS/w34x9UWNTrHP2HDO3gYJzd2QPQYOH1GtPPaqOF7i5QLVAlQLU5ROJcxNEFDwyLgX0KgqjJ7hZC+hUQUZCLgjQ0KgM/DFkNFCoKoyAX0IDrhZGws0ZpNhZGxWBZYWV2FlFuYdlVhmBS2x2VZh5gUtsCuxqQRYKXYJMGwOVvPsXiUYHcS3vi0jFs+1mHevT4eO/h4VxMuLs7JbNtySJT2yImIWLZ44NnO39g1B+MfVHWjtsUc3e+Mpql2tr1TEHWSzbqwjuQRz9gwqR0YmrzpCYCogGRbGxEUrEOxWAhUMRFKhNDACNAMACv7sBUAHQCzNxnovMOM9EaOLabCzNx3ovMXHeiBbVYrM3GeiDjy0QotoCzNx3ogWNLRAuGqwsy8Z6IOO9EKktrsakZOPLReY+kPReYLa1IlmMXSXog6RLReZRoxsGElUoqS96TXmZ/wCFbP8Ag4X9Ef2DpMtFzDpT0XmQtH+D7N+Bhf0R/YT3Ps3+nwv+uP7E+lPReYulS0XmKLV/wjZ/wML+iP7FuFseFD7OHCPhFL0RF7VLRC6Q9EKLaKIso6RLReYntEtESltexMzraHovMOkPReYoaGIz9Jei8xPaHovMlFtAGZ7Q9EHSHovMUq9gUdIei8xcd6LmyUWvYmZ3jvRB0l6IUWvQ6My2h6LmN7Q9F5ii2mwM/Hei8xihfYWAGrMCbAAEpBYAQGYSmABTUgsACEpDzgAUX3hmAAE5hmQAAZxZwABZwzgACzicgABZhSkAEUnMWcAAVhmAAByFmQARRmI5kABA5oHIAClnQABB/9k='
  public searchText:string='Shoes'
  search:string=''
  show:boolean =true;

  day:any=new Date().toDateString()
  pipeName='RAHUL'
  pipeNumber=0.88;
  isSpecial:boolean=true
  isModified:boolean=true
  isSaved:boolean=true
  public message =''

  myStyles={
    'background-color':this.name==='Vedant'?'red':'blue',
    'font-size':this.isLoggedIn?'24px':'10px'
  }
ngcexample={
  textSpecial:true ,
  saved :true
}

  myClass={
    special:this.isSpecial,
    modified:this.isModified,
    saved:this.isSaved


  }

 getday(){
  console.log(this.day)
 }
 
  decrementCart(){
    if(this.cart>0){
      this.cart--
    }
    
  }
  incrementCart(){
    this.cart++
  }
  updateSearch(event:any){
    this.searchText=event.target.value
    console.log(event.target.value)
  }
  refVarExample(name:HTMLInputElement){
    console.log(name.value)
  }


    // CSS classes: added/removed per current state of component properties
  
  
}

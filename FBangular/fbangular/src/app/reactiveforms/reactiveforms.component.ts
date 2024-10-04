import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule,FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-reactiveforms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveforms.component.html',
  styleUrl: './reactiveforms.component.css'
})
export class ReactiveformsComponent {

constructor(private fb:FormBuilder){}

myForm:FormGroup=this.fb.group({
  firstname:['',Validators.required],
  lastname:[''],
  email:['',Validators.email],
  gender:[''],
  address:this.fb.group({
    city:[''],
    zip:'',
    state:['']
  }),
})
onSubmit(form:FormGroup){
  if(form.status==='INVALID'){
   throw new Error('invalid form values')
  }else{
    console.log(form.value)
    console.log(form.status)
    console.log('firstname:'+ form.value.firstname)
    console.log('lastname:'+ form.value.lastname)
  }
}
}

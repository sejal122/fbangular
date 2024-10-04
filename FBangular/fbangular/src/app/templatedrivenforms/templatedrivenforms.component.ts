import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-templatedrivenforms',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './templatedrivenforms.component.html',
  styleUrl: './templatedrivenforms.component.css'
})
export class TemplatedrivenformsComponent {
onSubmit(loginform:any){
console.log(loginform.value)
}

}

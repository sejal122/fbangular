import { Component } from '@angular/core';
import {Ng2SearchPipe} from 'ng2-search-filter'
@Component({
  selector: 'app-filterexample',
  standalone: true,
  imports: [Ng2SearchPipe],
  templateUrl: './filterexample.component.html',
  styleUrl: './filterexample.component.css'
})
export class FilterexampleComponent {
items:string[]=[
"Fan", "Table","Tablet","Lights","Lamp","Fridge","Food","Pen","Paper"
]

}

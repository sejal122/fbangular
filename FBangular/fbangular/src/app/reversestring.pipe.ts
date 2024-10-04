import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversestring',
  standalone: true
})
export class ReversestringPipe implements PipeTransform {
   revstring:string='';
  transform(value: string, ...args: unknown[]): unknown {
    //code here
    this.revstring=value.split('').reverse().join('')

    return this.revstring;
  }

}

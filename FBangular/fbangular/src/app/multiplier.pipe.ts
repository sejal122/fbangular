import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplier',
  standalone: true
})
export class MultiplierPipe implements PipeTransform {

  transform(value: number, multiply:string): number {
    let multAnswer =parseFloat(multiply)
    return multAnswer*value;
  }

}

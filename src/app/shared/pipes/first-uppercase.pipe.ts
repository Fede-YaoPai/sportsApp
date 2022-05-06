import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUppercase'
})
export class FirstUppercasePipe implements PipeTransform {

  transform(value: string): unknown {
    return value[0].toUpperCase() + value.toLowerCase().slice(1);
  }

}

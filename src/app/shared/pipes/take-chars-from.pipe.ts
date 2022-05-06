import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'takeCharsFrom'
})
export class TakeCharsFromPipe implements PipeTransform {

  transform(value: string, takeFrom: number): unknown {
    return value.slice(takeFrom);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'    // our pipe name
})
export class CustomPipe implements PipeTransform {

  transform(value: number /* upcoming value from html */,
    ...args: number[] /* upcoming parameter from html */): number {
    const [a, b] = args;
    return value + a + b;
  }
}

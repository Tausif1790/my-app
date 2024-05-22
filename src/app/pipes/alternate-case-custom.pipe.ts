import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alternateCaseCustom'
})
export class AlternateCaseCustomPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }
    return value.split('').map((char, index) => 
      index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    ).join('');
  }
}

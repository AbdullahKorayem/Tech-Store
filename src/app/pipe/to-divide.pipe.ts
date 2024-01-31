import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDivide',
  standalone: true,
})
export class ToDividePipe implements PipeTransform {
  transform(value: string) {
    let exactMatch = new RegExp(/^\d(\d{2})(\d{2})(\d{2})(\d{7})$/, 'gi');

    let year: string;
    let month: string;
    let day: string;
    let s: string;
    let match = value.match(exactMatch);
    if (match !== null) {
      [, s, year, month, day] =
        value.match(/(\d{1})(\d{2})(\d{2})(\d{2})/) || [];

      if (Number(s) === 2) {
        return `year:${19 + year} - month:${month} - day:${day}`;
      } else if (Number(s) === 3) {
        return `year:${20 + year} - month:${month} - day:${day}`;
      }else{
       return  "not a number"
      }
    } else {
      return 'Invalid it must be 14 number';
    }
  }
}

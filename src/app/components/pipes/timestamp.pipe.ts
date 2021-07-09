import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

  transform(valueSeconds: number, argTypeOut: string): number {
    switch(argTypeOut) {
      case 'hour':
        return Math.floor(valueSeconds / 3600);
      case 'minute':
        return Math.floor((valueSeconds % 3600) / 60);
      case 'second':
        return valueSeconds % 60;
      default:
        return valueSeconds;
    }
  }
}

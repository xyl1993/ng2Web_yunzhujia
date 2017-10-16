import {Pipe,PipeTransform } from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'nivoSliderPipe'
})
export class NivoSliderPipe implements PipeTransform {
  transform(value: Object) {
    console.log(value);
  }
}
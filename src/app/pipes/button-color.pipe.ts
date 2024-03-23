import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buttonColor'
})
export class ButtonColorPipe implements PipeTransform {

  transform(value:any): Object[] {
    return Object.keys(value).map(key => ({ key, value: value[key] }));
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false                       //--------> again this will cause the pipe to recalculate on each time there's a change (WATCH OUT for performance loss!)             
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    return value.sort((a,b) => {
      if(a[propName] > b[propName]) {                      //----> this will sort alphabetically !
        return 1;
      }else{
        return -1;
      }
    });
  }

}

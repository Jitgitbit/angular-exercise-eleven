import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if(value.length === 0){
      return value;
    }
    const resultArray = [];
    for(const item of value){
      // const resultArray = [];                    
      if(item[propName] === filterString || filterString === ''){
        resultArray.push(item);
      }
      // return resultArray;       //----------> must be outside of the for-loop, otherwise it will stop at it's first find !
    }
    return resultArray;
  }

}
// So you can type "offline" or "stable", and it will show only those !
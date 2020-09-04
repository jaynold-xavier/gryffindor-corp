import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEmployee'
})
export class SearchEmployeePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(args[0]===undefined) return value
    return value.filter(function(per){
      return per.payload.val().name.toLowerCase().startsWith(args[0].toLowerCase())
    })
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeStatus'
})
export class ChangeStatusPipe implements PipeTransform {

  transform(value: any,): any {
    if(value){
      return 'Added';
    }else{
      return 'Removed';
    }
  }

}

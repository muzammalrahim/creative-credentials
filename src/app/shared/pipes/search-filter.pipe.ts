import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, searchQuery: string): any {
    if (searchQuery == ''){
      return value;
    }
    return value.filter(x => x.name.toLowerCase().indexOf(searchQuery.toLowerCase()) != -1);
  }

}

import { SearchFilterPipe } from './search-filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SearchFilterPipe],
  imports: [
    CommonModule
  ],
  exports:[
    SearchFilterPipe
  ]
})
export class PipesModule { }

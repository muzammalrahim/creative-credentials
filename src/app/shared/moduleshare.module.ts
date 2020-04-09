import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatSidenavModule, MatButtonModule, MatProgressSpinnerModule, MatAutocompleteModule, MatBadgeModule, MatMenuModule, MatRadioModule, MatSelectModule, MatTableModule, MatFormFieldModule, MatPaginatorModule, MatSortModule, MatInputModule, MatOption, MatOptionModule } from '@angular/material';


@NgModule({
  declarations: [SearchFilterPipe],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,

  ],
  exports:[
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    SearchFilterPipe
  ]


})
export class ModuleshareModule { }

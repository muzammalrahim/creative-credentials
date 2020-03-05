import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { __values } from 'tslib';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  @Input() incommingData: any;
  displayedColumns: string[] =  ['id', 'userName', 'userEmail','status'];
  dataSource: MatTableDataSource<any>;
  currentScreenWidth: string = '';
  flexMediaWatcher: Subscription;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  confirmation: boolean;

  constructor() {};

toggle(id){
this.confirmation = confirm("Are you want to give access");
console.log(this.confirmation,id);
}

  ngOnInit() {
    console.log(this.incommingData);
    this.dataSource = new MatTableDataSource(this.incommingData);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(): void {

  }

}

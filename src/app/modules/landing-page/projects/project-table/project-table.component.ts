import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss']
})
export class ProjectTableComponent implements OnInit {

  @Input() incommingData: any;
  displayedColumns: string[] =  ['$key', 'clientName', 'clientDetails'];
  dataSource: MatTableDataSource<any>;
  currentScreenWidth: string = '';
  flexMediaWatcher: Subscription;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private media: MediaObserver) {
    this.flexMediaWatcher = media.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias !== this.currentScreenWidth) {
        this.currentScreenWidth = change.mqAlias;
        this.setupTable();
      }
    });
  };
  setupTable() {
    this.displayedColumns = ['$key', 'clientName', 'clientDetails'];
    if (this.currentScreenWidth >= 'sm') {
      this.displayedColumns.pop();
    }
  };


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
    this.flexMediaWatcher.unsubscribe();
  }


}
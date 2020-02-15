import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-credentials-table',
  templateUrl: './credentials-table.component.html',
  styleUrls: ['./credentials-table.component.scss']
})
export class CredentialsTableComponent implements OnInit {


  @Input() incommingData: any;
  displayedColumns: string[] = ['id', 'name', 'company_name', 'address', 'number'];
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
    this.displayedColumns = ['id', 'name', 'company_name', 'address', 'number'];
    if (this.currentScreenWidth >= 'sm') {
      this.displayedColumns.pop();
    }
  };
  ngOnInit() {

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

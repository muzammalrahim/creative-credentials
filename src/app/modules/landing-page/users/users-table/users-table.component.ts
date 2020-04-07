import { environment } from './../../../../../environments/environment';
import { ApiWrapperService } from './../../../../services/apiwrapperservice';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  @Input() incommingData: any;
  @Output() changeEmitter = new EventEmitter();
  displayedColumns: string[] = ['id', 'userName', 'userEmail', 'status'];
  dataSource: MatTableDataSource<any>;
  currentScreenWidth: string = '';
  flexMediaWatcher: Subscription;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  confirmation: boolean;
  messageString: string;
  btntext: string;

  constructor(private api: ApiWrapperService) { };







  toggle(id, status) {
    if (status == true){
      this.messageString = "Are you Sure You want to remove";
      this.btntext = "Remove User"
    }
    if (status == false){
      this.messageString = "Are you Sure You want to add";
      this.btntext = "Add User"
    }
    Swal.fire({  title: 'Are you sure?',
    text: this.messageString,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: this.btntext,
    cancelButtonText: 'No, keep it'})
      .then(willDelete => {
        // console.log(willDelete);
        if (willDelete.value) {



          // console.log(this.confirmation, id);

          this.api.put(environment.statusupdate + id).subscribe(data => {
            // console.log(data);

            this.changeEmitter.emit();

          });
        }



      });



  }

  ngOnInit() {
    // console.log(this.incommingData);
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

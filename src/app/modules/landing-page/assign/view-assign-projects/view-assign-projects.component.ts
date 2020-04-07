import { CompanyService } from './../../../../services/company.service';
import { ApiWrapperService } from './../../../../services/apiwrapperservice';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-assign-projects',
  templateUrl: './view-assign-projects.component.html',
  styleUrls: ['./view-assign-projects.component.scss']
})
export class ViewAssignProjectsComponent implements OnInit {

  // @Input() incommingData: any;
  displayedColumns: string[] = ['row', 'userName', 'projName', 'action'];
  dataSource: MatTableDataSource<any>;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  company$: any = new Subject();
  company_name: string;
  incommingData: any;
  loading: boolean;

  constructor(private api: ApiWrapperService, private companyservice: CompanyService) { };



  ngOnInit() {
    this.loading = true;
    // console.log(this.incommingData);
    this.companyservice.getCompanyName();
    this.company$ = this.companyservice.companyUpdateListner().subscribe(data => {
    this.company_name = data;
    })
    this.api.post(environment.getAssignedProj, {company_name: this.company_name}).subscribe(res => {
      this.loading = false;
      this.incommingData = res.assigndata;
      // console.log( this.incommingData);
      this.dataSource = new MatTableDataSource(this.incommingData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    // this.dataSource = new MatTableDataSource(this.incommingData);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

  }



  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(): void {

  }

  remove(id){
    Swal.fire({  title: 'Are you sure?',
    text: "Are You Sure",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: "Remove",
    cancelButtonText: 'No, keep it'})
      .then(willDelete => {
        // console.log(willDelete);
        if (willDelete.value) {

          this.api.delete(environment.removeassign,id).subscribe(res =>{
            // console.log(res);
            this.ngOnInit();
          });
        }



      });




  }


}

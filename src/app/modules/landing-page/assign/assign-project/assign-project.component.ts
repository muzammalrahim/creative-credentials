import { ApiWrapperService } from '../../../../services/apiwrapperservice';
import { CompanyService } from '../../../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-assign-project',
  templateUrl: './assign-project.component.html',
  styleUrls: ['./assign-project.component.scss']
})
export class AssignProjectComponent implements OnInit {
  assign$: any = new Subject();
  checker: boolean;
  company_name: any;
  dataProj: any;
  dropdownList = [];
  dropdownList1 = [];
  selectedItems = [];
  selectedItems1 = [];
  dropdownSettings = {};
  dropdownSettings1 = {};
  users: any;
  selectedProject: any;
  selectedUser: any;
  data: any;
  loading: boolean;
  company$: any = new Subject();

  constructor(private companyService: CompanyService, private api: ApiWrapperService) { }






  ngOnInit() {

    this.checker = false;
    this.company$ = this.companyService.companyUpdateListner().subscribe(data => {
      this.company_name = data;
      this.api.post(environment.getprojects, { company_name: this.company_name }).subscribe(res => {
        this.dropdownList = res.projects.map((proj, i) => {
          proj.item_id = i + 1;
          proj.item_text = proj.title;
          return proj;
        });
        this.checker = true;
      });
    });

    this.company$ = this.companyService.companyUpdateListner().subscribe(data => {
      this.company_name = data;
      this.checker = false;
      this.api.post(environment.companyusers, { company_name: this.company_name }).subscribe(users => {
        this.users = users.filter(filter => {
          return filter.status == true;
        });
        this.dropdownList1 = this.users.map((user, i) => {
          user.item_id = i + 1;
          user.item_text = user.name;
          return user;
        });
        this.checker = true;
      });
    });
    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangaluru' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text: 'New Delhi' }
    // ];
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };

    this.dropdownSettings1 = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };
  }



  onItemSelect(item: any) {


    this.selectedProject = this.dropdownList.filter((data) => data.item_id == item.item_id);
    // console.log(this.selectedProject);
  }
  onSelectAll(items: any) {
    // console.log(items);
  }
  onItemSelect1(item: any) {
    this.selectedUser = this.dropdownList1.filter((data) => data.item_id == item.item_id);
    // console.log(this.selectedUser);
  }
  onSelectAll1(items: any) {
    // console.log(items);
  }

  submit() {
    this.loading = true;
    // console.log('sub+' + 'mit');
    this.company$ = this.company$ = this.companyService.companyUpdateListner().subscribe(data => {
      this.company_name = data;
    });
    this.data = {
      project_id: this.selectedProject[0]._id,
      user_id: this.selectedUser[0]._id,
      company_name: this.company_name
    };
    // console.log(this.data);

    this.assign$ = this.api.post(environment.assignproj, this.data).subscribe(res => {
      this.loading = false;
      // console.log(res);
      if (res) {
        Swal.fire({
          title: 'Successfully Assigned',
          text: 'Successfully Assigned',
          icon: 'info',
          showCancelButton: false,
          confirmButtonText: 'Submit Next',

        }).then(afterresolve => {
          this.checker = false;
          // console.log(afterresolve);
          this.dropdownList = [];
          this.dropdownList1 = [];
          this.selectedItems = [];
          this.selectedItems1 = [];
          this.dropdownSettings = {};
          this.dropdownSettings1 = {};
          this.ngOnInit();


        }

        );
      }

    },(error:any)=>{
      this.loading = false;
      Swal.fire({
        title: 'Already Assigned',
        text: 'Already Assigned',
        icon: 'error',
        showCancelButton: false,
        confirmButtonText: 'Close',

      }).then(afterresolve => {
        this.checker = false;
        // console.log(afterresolve);
        this.dropdownList = [];
        this.dropdownList1 = [];
        this.selectedItems = [];
        this.selectedItems1 = [];
        this.dropdownSettings = {};
        this.dropdownSettings1 = {};
        this.ngOnInit();


      }

      );
    }

    );
  }
  ngOnDestroy(): void {
    this.company$.unsubscribe();
    this.assign$.unsubscribe();
  }
}


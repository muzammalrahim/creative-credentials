import { Subject } from 'rxjs';
import { CompanyService } from './../../../services/company.service';
import { ApiWrapperService } from './../../../services/apiwrapperservice';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any;
  checker = false;
  company_name: any;
  usercompany$: any = new Subject();
  constructor(private api: ApiWrapperService, private companyService: CompanyService) { }

  ngOnInit() {
    this.checker = false;
    this.companyService.getCompanyName();
    this.usercompany$ = this.companyService.companyUpdateListner().subscribe(data => {
      console.log("Datattaattatatatatat",data);
      this.company_name = data;
      this.checker = false;
      this.api.post(environment.companyusers, { company_name: this.company_name }).subscribe(users => {
        this.users = users;
        this.checker = true;
        console.log("Datattaattatatatatat",this.users);

      });
    });
  }
  emitter() {
    this.ngOnInit();
  }
  ngOnDestroy(): void {
    this.usercompany$.unsubscribe();
  }
}

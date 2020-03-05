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
  user: any;
  users: any;
  checker=false;
  company_name: any;
  constructor(private api: ApiWrapperService,private companyService:CompanyService) { }

  ngOnInit() {
    this.company_name = this.companyService.getCompanyName();
    this.api.post(environment.companyusers, { company_name: this.company_name}).subscribe(users => {
    this.users = users;
    console.log(this.users);
    this.checker=true;
      });
  }

}

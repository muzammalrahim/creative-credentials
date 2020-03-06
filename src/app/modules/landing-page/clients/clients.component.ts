import { CompanyService } from './../../../services/company.service';
import { environment } from './../../../../environments/environment';
import { ApiWrapperService } from './../../../services/apiwrapperservice';



import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  faPlus = faPlus;
  checker: boolean = false;
  clients: any;
  company_name: any;
  constructor(private api: ApiWrapperService, private companyService: CompanyService) { }

  ngOnInit() {
    this.company_name = this.companyService.getCompanyName();
    this.checker = false;
    this.api.post(environment.getclients,{company_name:this.company_name}).subscribe(res => {
      this.checker = true;
      this.clients = res.clients;
    });
  }
}

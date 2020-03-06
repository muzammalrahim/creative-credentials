import { CompanyService } from './../../../services/company.service';
import { ApiWrapperService } from './../../../services/apiwrapperservice';
import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  faPlus = faPlus;
  list = '';
  projects: any;
  checker: boolean;
  comapny_name: any;
  constructor(private api: ApiWrapperService, private companyService: CompanyService) { }

  ngOnInit() {
    this.checker = false;
    this.comapny_name = this.companyService.getCompanyName();
    this.api.post(environment.getprojects,{company_name:this.comapny_name}).subscribe(res => {
      this.projects = res.projects;
      this.checker = true;
    });
  }

}

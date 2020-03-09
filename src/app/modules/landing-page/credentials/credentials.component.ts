import { CompanyService } from './../../../services/company.service';
import { ApiWrapperService } from './../../../services/apiwrapperservice';
import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent implements OnInit {
  faPlus = faPlus;
  cards: any;
  company_name: any;
  checker: boolean=false;
  constructor(private api: ApiWrapperService, private companyService: CompanyService) { }

  ngOnInit() {
    this.checker = false;
    this.company_name  = this.companyService.getCompanyName();
    this.api.post(environment.credentials, {company_name: this.company_name}).subscribe(res => {

this.cards = res.projects.map(data => {
  data.icon = faProjectDiagram;
  data.heading = data.title;
  data.background = '#013220';
  data.stat=[{
    statName:'Client Name:',
    statValue:data.client_id.name
  }]

return data

});
this.checker = true;
console.log(this.cards[0].icon);
    });

    // this.cards = [
    //   {
    //     icon: faProjectDiagram,
    //     heading: 'Users',
    //     background: '#800080',
    //     routerLink: '../users',
    //     stat: [
    //       // {
    //       //   statName: 'Current Users',
    //       //   statValue: ''
    //       // },
    //     ]
    //   },
    // ]


  }

}

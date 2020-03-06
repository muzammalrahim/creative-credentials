import { CompanyService } from './../../../services/company.service';
import { ApiWrapperService } from './../../../services/apiwrapperservice';
import { Component, OnInit } from '@angular/core';
import { faCity, faAddressCard, faMap, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cards;
  user: any;
  comapny_name: any;
  constructor(private api: ApiWrapperService,private companyService:CompanyService) { }

  ngOnInit() {
    this.comapny_name = this.companyService.getCompanyName();
    this.api.post(environment.companyusers, { company_name: this.comapny_name }).subscribe(users => {
      this.cards[0].stat[0].statValue = users.length;
    });



    this.api.post(environment.getprojects,{company_name:this.comapny_name}).subscribe(res => {
      this.cards[2].stat[0].statValue=res.projects.length;

    });


    this.api.post(environment.getclients,{company_name: this.comapny_name}).subscribe(res => {

        this.cards[3].stat[0].statValue=res.clients.length;
    });
    this.cards = [

      // {
      //   icon: faMoneyCheck,
      //   heading: 'Revenue',
      //   background: '#00008b',

      //   stat: [
      //     {
      //       statName: 'Total Revenue',
      //       statValue: 33397
      //     },

      //   ]
      // },
      {
        icon: faAddressCard,
        heading: ' Users',
        background: '#800080',
        routerLink: '../users',
        stat: [
          {
            statName: 'Current Users',
            statValue: ''
          },
        ]
      },
      {
        icon: faAddressCard,
        heading: ' Credentials',
        background: '#013220',
        routerLink: '../credentials',
        stat: [
          // {
          //   statName: 'Total Revenue',
          //   statValue: 33397
          // },
        ]
      },
      {
        icon: faAddressCard,
        heading: 'Projects',
        background: '#FFA500',
        routerLink: '../projects',
        stat: [
          {
            statName: 'Current Projects',
            statValue: '',
          },
        ]
      },
      {
        icon: faUserFriends,
        heading: 'Clients',
        background: '#00008b',
        routerLink: '../clients',
        stat: [
          {
            statName: 'Current Clients',
            statValue: ''
          },
          // {
          //   statName: 'Total Tasks',
          //   statValue: ''
          // }
        ]
      },

    ];

  }

}


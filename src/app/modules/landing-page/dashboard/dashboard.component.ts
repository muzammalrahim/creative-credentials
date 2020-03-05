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
  constructor(private api: ApiWrapperService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user.company_name);
    this.api.post(environment.companyusers, { company_name: this.user.company_name }).subscribe(users => {
      this.cards[0].stat[0].statValue = users.length;
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
          // {
          //   statName: 'Total Revenue',
          //   statValue: 33397
          // },
        ]
      },
      {
        icon: faUserFriends,
        heading: 'Clients',
        background: '#00008b',
        routerLink: '../clients',
        stat: [
          {
            statName: 'Total Clients',
            statValue: ''
          },
          {
            statName: 'Total Tasks',
            statValue: ''
          }
        ]
      },

    ];

  }

}


import { Component, OnInit } from '@angular/core';
import { faCity, faAddressCard,faMap ,faUserFriends} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
cards;
  constructor() { }

  ngOnInit() {
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
        heading: 'Project Credentials',
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


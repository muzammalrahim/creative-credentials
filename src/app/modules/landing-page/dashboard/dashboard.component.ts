import { Subject } from 'rxjs';
import { CompanyService } from './../../../services/company.service';
import { ApiWrapperService } from './../../../services/apiwrapperservice';
import { Component, OnInit } from '@angular/core';
import { faCity, faAddressCard, faMap, faUserFriends, faBackward } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faBackward = faBackward
  cards;
  user: any;
  company_name: any;
  companyuser$: any = new Subject();
  assigncard: any;
  backbutton: boolean;
  role: any;
  constructor(private api: ApiWrapperService, private companyService: CompanyService) { }

  ngOnInit() {
    this.backbutton = false;

    this.companyService.getCompanyName();
    this.companyuser$ = this.companyService.companyUpdateListner().subscribe(data => {
      this.company_name = data;
    });
    this.role = this.companyService.getRole();
    this.api.post(environment.companyusers, { company_name: this.company_name }).subscribe(users => {
      if (users){
      if (this.cards[0] != undefined) {
        this.cards[0].stat[0].statValue = users.length;
      }
    }
    });



    this.api.post(environment.getprojects, { company_name: this.company_name }).subscribe(res => {
      if (this.cards[2] != undefined) {
        this.cards[2].stat[0].statValue = res.projects.length;
      }

    });


    this.api.post(environment.getclients, { company_name: this.company_name}).subscribe(res => {

      if (this.cards[3] != undefined) {
        this.cards[3].stat[0].statValue = res.clients.length;
      }
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
        heading: 'Credentials',
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
    this.assigncard = [{
      icon: faAddressCard,
      heading: 'Assign',
      background: '#ec2222'
      // routerLink: '../assignproj',
      // stat: [
      //   {
      //     statName: 'Current Users',
      //     statValue: ''
      //   },
      // ]
    }
    ];

  }
  back() {
    this.ngOnInit();
  }
  onclick(cardClicked) {

    if (cardClicked == 'Assign') {
      this.cards = [];
      this.backbutton = true;
      this.assigncard = [{
        icon: faAddressCard,
        heading: 'Assignment',
        background: '#ec2222',
        routerLink: '../assignproj',
        // stat: [
        //   {
        //     statName: 'Current Users',
        //     statValue: ''
        //   },
        // ]
      }, {
        icon: faAddressCard,
        heading: 'View',
        background: '#ec2222',
        routerLink: '../view-assign-proj',
        // stat: [
        //   {
        //     statName: 'Current Users',
        //     statValue: ''
        //   },
        // ]
      }
      ];
    }
  }
  ngOnDestroy(): void {
    this.companyuser$.unsubscribe();

  }

}


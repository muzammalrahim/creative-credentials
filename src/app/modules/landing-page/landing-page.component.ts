import { AuthService } from './../../services/auth.service';
import { CompanyService } from './../../services/company.service';
import { ApiWrapperService } from './../../services/apiwrapperservice';

import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBars,
  faHome,
  faAddressCard,
  faUserFriends,
  faArrowAltCircleDown
} from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  numbers: number[];
  company_name: any = '';
  users: any;
  newrequests: any;


  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private api: ApiWrapperService,
    private companyService: CompanyService,
    private authService: AuthService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    // this.numbers = Array(15).fill(0).map((x, i) => i + 1);
  }
  faBars = faBars;
  faHome = faHome;
  faUserFriends = faUserFriends;
  faAddressCard = faAddressCard;
  faArrowAltCircleDown = faArrowAltCircleDown;

  selected = true;
  loading = false;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  obj: {};


  ngOnInit() {

this.companyService.companyUpdateListner().subscribe(data => {
this.company_name=data;
this.api.post(environment.companyusers, { company_name: this.company_name }).subscribe(users => {
  this.users = users.filter(filter => {
    return filter.status == false;
  });

  this.newrequests = this.users.length;
});
    });

  }

  emitter() {
    this.ngOnInit();
  }


  logout() {
    this.authService.logout();
  }




}


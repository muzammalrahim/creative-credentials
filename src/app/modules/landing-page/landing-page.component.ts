
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBars,
  faHome,
  faAddressCard,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  numbers: number[];
  company_name:any ='';


  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,

  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.numbers = Array(500).fill(0).map((x,i)=>i);
  }
  faBars = faBars;
  faHome = faHome;
  faUserFriends = faUserFriends;
  faAddressCard = faAddressCard;

  selected = true;
  loading = false;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  obj: {};


  ngOnInit() {
this.company_name =JSON.parse(localStorage.getItem('user'));


  }



  logout() {

  }




}


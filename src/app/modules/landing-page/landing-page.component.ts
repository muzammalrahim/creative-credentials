
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


  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,

  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
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

  }
  // Get Current Location Coordinates


  logout() {

  }




}


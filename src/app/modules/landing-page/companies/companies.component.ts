import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  faPlus = faPlus;
  data: any;
  list: any[];
  checker: boolean=false;
  constructor() { }

  ngOnInit() {


  }

}

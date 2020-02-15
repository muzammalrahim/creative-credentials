


import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  faPlus = faPlus;
  data: any;
  list: any[];
  checker: boolean=false;
  constructor() { }

  ngOnInit() {



  }

}

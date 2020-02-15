import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.scss']
})
export class AddClientsComponent implements OnInit {
  clientForm: any;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.clientForm = this.fb.group({
      clientName: ['', [Validators.required]],
      clientDetails: ['', [Validators.required]],

    });

  }

  submit(){


  }

}

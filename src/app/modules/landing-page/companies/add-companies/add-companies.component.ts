import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-companies',
  templateUrl: './add-companies.component.html',
  styleUrls: ['./add-companies.component.scss']
})
export class AddCompaniesComponent implements OnInit {
  companiesForm: any;



  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.companiesForm = this.fb.group({
      title: ['', [Validators.required]],
      users: ['', [Validators.required]],
      administrator: ['', [Validators.required]],

    });

  }

  submit() {


  }

}

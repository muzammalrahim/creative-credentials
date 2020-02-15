import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-credentials',
  templateUrl: './add-credentials.component.html',
  styleUrls: ['./add-credentials.component.scss']
})
export class AddCredentialsComponent implements OnInit {



  credentialsForm: any;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.credentialsForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      accessto: ['', [Validators.required]],
      note: ['', [Validators.required]],
      client: ['', [Validators.required]],
      site: ['', [Validators.required]],

    });

  }

  submit(){

  }

}

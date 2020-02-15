import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

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

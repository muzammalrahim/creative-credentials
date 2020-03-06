import { CompanyService } from './../../../../services/company.service';
import { ApiWrapperService } from './../../../../services/apiwrapperservice';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { IfStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  key: any;
  checker: boolean;
  clients: any;
  projectForm: any;
  company_name: any;

  constructor(private fb: FormBuilder, private api: ApiWrapperService, private el: ElementRef, private router: Router, private companyService: CompanyService) { }

  ngOnInit() {
    this.projectForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      clientName: ['', [Validators.required]],
      note: ['', [Validators.required]],
      client_id: ['', [Validators.required]],
      site: ['', [Validators.required]],

    });

    this.company_name = this.companyService.getCompanyName();
    //getting clients list
    this.checker = false;
    this.api.post(environment.getclients,{company_name:this.company_name}).subscribe(res => {
      this.checker = true;
      this.clients = res.clients;
    });
  }
  // displayFn(Subject) {

  //   return Subject ? Subject.name : undefined;
  // }

  optSelected(data) {
    let selectedValue = this.clients.find(x => x == data);
    console.log(selectedValue);
    if (selectedValue) {
      this.projectForm.patchValue({
        clientName: selectedValue.name,
        client_id: selectedValue._id

      });
    }

  }
  submit() {
    this.projectForm.value.company_name=this.companyService.getCompanyName();
    if (this.projectForm.invalid) {
      for (const key of Object.keys(this.projectForm.controls)) {
        this.key = key;
        if (this.projectForm.controls[key].invalid) {
          const invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
          invalidControl.focus();
          break;
        }

      }
      return alert("Please enter " + this.key);
    }
    console.log(this.projectForm.value);
    delete this.projectForm.value.clientName;
    console.log(this.projectForm.value);

    this.api.post(environment.addproject, this.projectForm.value).subscribe(res => {
      if (res) {
        this.router.navigate(['landingPage', 'projects'])
      }
    });
  }

}

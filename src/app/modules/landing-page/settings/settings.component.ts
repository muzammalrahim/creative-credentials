import { ApiWrapperService } from './../../../services/apiwrapperservice';
import { CompanyService } from './../../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsForm: any;
  company_id: any;

  constructor(private fb: FormBuilder, private router: Router, private companyservice: CompanyService, private api: ApiWrapperService) { }

  ngOnInit() {
    this.createForm();
    var company_name = this.companyservice.getCompanyName();
    this.api.post(environment.getSingleCompany, { company_name: company_name }).subscribe(res => {
      this.company_id = res.getCompany._id;
    });
    this.settingsForm.controls['company_name'].value = company_name;

  }


  createForm() {
    this.settingsForm = this.fb.group({
      company_name: ['',],
      company_id: ["",],
      user_id: ["",]
    })
  }

  submit() {
    let user_id = this.companyservice.getUserId();
    this.settingsForm.value.company_id = this.company_id;
    this.settingsForm.value.user_id = user_id;
    this.api.post(environment.updatecompany, this.settingsForm.value).subscribe(res => {
      console.log(res);
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify(res.fetchedUser));
      this.router.navigate(['landingPage']);
    });
  }
}

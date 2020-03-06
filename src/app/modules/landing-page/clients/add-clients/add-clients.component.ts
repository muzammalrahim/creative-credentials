import { CompanyService } from './../../../../services/company.service';
import { Router } from '@angular/router';
import { ApiWrapperService } from './../../../../services/apiwrapperservice';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.scss']
})
export class AddClientsComponent implements OnInit {
  clientForm: any;
  company_name: any;

constructor(private fb:FormBuilder,private api:ApiWrapperService,private router:Router,private companyService:CompanyService  ) { }

  ngOnInit() {
    this.clientForm = this.fb.group({
      clientName: ['', [Validators.required]],
      clientDetails: ['', [Validators.required]],

    });

  }

  submit(){
if(this.clientForm.invalid){
  return;
}
this.company_name = this.companyService.getCompanyName();
this.clientForm.value.company_name=this.company_name;
this.api.post(environment.addclient,this.clientForm.value).subscribe(res => {

this.router.navigate(['landingPage','clients']);

});

  }

}

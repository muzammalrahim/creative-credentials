import { CompanyService } from './../../../../services/company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiWrapperService } from './../../../../services/apiwrapperservice';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.scss']
})
export class AddClientsComponent implements OnInit {
  clientForm: any;
  company_name: any;
  mode: string;
  client_id: string;
  usercompany$: any = new Subject();

  constructor(private fb: FormBuilder, private api: ApiWrapperService, private router: Router, private companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.createForm();
    this.route.paramMap.subscribe((paramMap) => {
      if (paramMap.has('id')) {
        this.mode = "edit";
        this.client_id = paramMap.get('id');
        this.api.get(environment.getclientbyid + paramMap.get('id')).subscribe(res => {
          if (res) {
            this.clientForm.setValue({
              clientName: res.client[0].name,
              clientDetails: res.client[0].detail,
            });
          }
        });
      } else {
        this.mode = "create";
      }
    });

  }
  createForm() {
    this.clientForm = this.fb.group({
      clientName: ['', [Validators.required]],
      clientDetails: ['', [Validators.required]],
    });
  }
  submit() {
    if (this.clientForm.invalid) {
      return;
    }
    this.companyService.getCompanyName();
    this.usercompany$=this.companyService.companyUpdateListner().subscribe(data => {
    this.clientForm.value.company_name =data;
    if (this.mode == "create") {
    this.api.post(environment.addclient, this.clientForm.value).subscribe(res => {
      this.router.navigate(['landingPage', 'clients']);
    });
  }
    if (this.mode == "edit") {
      this.api.put(environment.updateclientbyid + this.client_id, this.clientForm.value).subscribe(res => {
        if (res) {
          this.router.navigate(['landingPage', 'clients']);
        }
      });
    }
  });
  }

ngOnDestroy(): void {
this.usercompany$.unsubscribe();

}
}

import { CompanyService } from './../../../../services/company.service';
import { ApiWrapperService } from './../../../../services/apiwrapperservice';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { IfStmt } from '@angular/compiler';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

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
  mode = "";
  project_id: any;
  usercompany$: any = new Subject();
  constructor(private fb: FormBuilder, private api: ApiWrapperService, private el: ElementRef, private router: Router, private companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.createForm();
    this.route.paramMap.subscribe((paramMap) => {
      if (paramMap.has('id')) {
        this.mode = "edit";
        this.project_id = paramMap.get('id');
        this.api.get(environment.getprojbyid + paramMap.get('id')).subscribe(res => {
          console.log("client_name", res.project[0].client_id.name);
          if (res) {
            this.projectForm.setValue({
              title: res.project[0].title,
              description: res.project[0].description,
              note: res.project[0].note,
              site: res.project[0].site,
              clientName: res.project[0].client_id.name,
              client_id: res.project[0].client_id._id
            });
          }
        });

      } else {
        this.mode = "create";
      }
    });


    this.company_name = this.companyService.getCompanyName();
    //getting clients list
    this.checker = false;
    this.api.post(environment.getclients, { company_name: this.company_name }).subscribe(res => {
      this.checker = true;
      this.clients = res.clients;
    });
  }

  createForm() {
    this.projectForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      clientName: ['', [Validators.required]],
      note: ['', [Validators.required]],
      client_id: ['', [Validators.required]],
      site: ['', [Validators.required]],

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
    this.companyService.getCompanyName();
    this.usercompany$=this.companyService.companyUpdateListner().subscribe(data => {
    this.projectForm.value.company_name = data;
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
    if (this.mode == "create") {
      this.api.post(environment.addproject, this.projectForm.value).subscribe(res => {
        if (res) {
          this.router.navigate(['landingPage', 'projects'])
        }
      });
    } else {
      this.api.put(environment.updateprojbyid + this.project_id, this.projectForm.value).subscribe(res => {
        if (res) {
          this.router.navigate(['landingPage', 'projects'])
        }
      });

    }
  });
  }

  ngOnDestroy(): void {
    this.usercompany$.unsubscribe();
  }

}

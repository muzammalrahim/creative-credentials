import { CompanyService } from './../../../../services/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiWrapperService } from './../../../../services/apiwrapperservice';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-project-detail-page',
  templateUrl: './project-detail-page.component.html',
  styleUrls: ['./project-detail-page.component.scss']
})
export class ProjectDetailPageComponent implements OnInit {
  projectForm: any;
  project_id: string;
  totalUsers: any=[];
  role: string;


  constructor(private fb: FormBuilder, private api: ApiWrapperService, private route: ActivatedRoute,private router:Router,private companyservice:CompanyService) { }

  ngOnInit() {
    this.role = this.companyservice.getRole();
    this.createForm();
    this.route.paramMap.subscribe((paramMap) => {
      if (paramMap.has('id')) {
        this.project_id = paramMap.get('id');
        this.api.get(environment.getprojbyid + paramMap.get('id')).subscribe(res => {
          // console.log("client_name", res.project[0].client_id.name);
          if (res) {
            this.projectForm.setValue({
              title: res.project[0].title,
              description: res.project[0].description,
              note: res.project[0].note,
              site: res.project[0].site,
              clientName: res.project[0].client_id.name,
              client_id: res.project[0].client_id._id,
              createdAt: res.project[0].createdAt,
              status:res.project[0].status,
              creditHrs:res.project[0].creditHrs
            });
          }
        });
        this.api.post(environment.totalusers, { project_id: this.project_id }).subscribe(data => {
       this.totalUsers = data.projects;
      //  console.log( this.totalUsers);
        })
      }
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
      createdAt: ['', [Validators.required]],
      status:[''],
      creditHrs:['']
    });
  }
  submit() {
    this.api.put(environment.updateprojbyid + this.project_id, this.projectForm.value).subscribe(res => {
      if (res) {
        this.router.navigate(['landingPage', 'projects'])
      }
    });
  }
}

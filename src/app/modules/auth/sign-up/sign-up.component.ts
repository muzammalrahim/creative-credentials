import { Subject } from 'rxjs';
import { async } from '@angular/core/testing';
import { ApiWrapperService } from './../../../services/apiwrapperservice';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  data;
  options = [{
    role: "Admin"
  },
  {
    role: "User"
  }]

  @ViewChild('company_name_div', { static: true }) public company_name: ElementRef;
  @ViewChild('show_company_list', { static: true }) public show_company_list: ElementRef;

  @ViewChild('content', { static: true }) public content_: ElementRef;
  message: any;
  companyList: any;
  checker: boolean;

  constructor(private api: ApiWrapperService, private modalService: NgbModal, private router: Router) { }

  ngOnInit() {

    this.api.get(environment.companies).subscribe(res => {
      this.companyList = res.companyList;

    });
  }
  optSelected(data) {
    let selectedValue = this.companyList.find(x => x == data);
  
  }
  displayFn(Subject) {

    return Subject ? Subject.name : undefined;
  }
  onSelect(data) {
    this.data = data;
    if (data == 'Admin') {
      this.company_name.nativeElement.hidden = false;
      this.show_company_list.nativeElement.hidden = true;
    }
    if (data == 'User') {
      this.company_name.nativeElement.hidden = true;
      this.show_company_list.nativeElement.hidden = false;
    }
  }
  signUp(myform: NgForm) {
    if (this.data == "Admin") {
      delete myform.value.company_id;
    }
    if (this.data == "User") {
      delete myform.value.company_name;

      myform.value.company_id = myform.value.company_id._id;
    }
    if (myform.value.password != myform.value.repeat_password) {
      alert("password don't match");
      return;
    }


    this.checker = false;
    this.api.post(environment.signup, myform.value).subscribe(data => {
      this.checker = true;
      this.message = "Successfully Registered";
      this.open(this.content_);
      this.router.navigate(['login']);
    },
      (err: any) => {

        this.message = err.error;
        this.open(this.content_);
      });

  }
  closeResult: string;



  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

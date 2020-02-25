import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  closeResult: string;
  message: any;

  constructor(private authService: AuthService, private modalService: NgbModal) { }

  @ViewChild('content', { static: true }) public content_: ElementRef;

  ngOnInit() {

  }

login(myform : NgForm) {
this.authService.login(myform.value);
this.authService.getAuthStatusListener().subscribe(listner => {
  console.log(listner);
  this.message = listner.message;
  if (listner.status == false) {
this.open(this.content_);
}
})

}



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

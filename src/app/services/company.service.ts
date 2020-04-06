import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({providedIn:'root'})
export class CompanyService
{
  user: any;


  subject  = new BehaviorSubject("");

getCompanyName(){

  this.user = JSON.parse(localStorage.getItem('user'));

  if(this.user) {
if(this.user.company_name == undefined){
  this.subject.next(this.user.company_id.name);
  return this.user.company_id.name;
}else{
  this.subject.next(this.user.company_name);
  return this.user.company_name;
}
  }else{
    return null;
  }
}

companyUpdateListner() {

  return this.subject.asObservable();
}

getUserId(){

  this.user = JSON.parse(localStorage.getItem('user'));
  if(this.user) {
  return this.user._id;
  }else{
    return null;
  }
}
}

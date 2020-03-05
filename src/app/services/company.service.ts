import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class CompanyService
{
  user: any;
getCompanyName(){

  this.user = JSON.parse(localStorage.getItem('user'));
  if(this.user) {
  return this.user.company_name;
  }else{
    return null;
  }
}
}

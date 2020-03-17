import { ApiWrapperService } from "./apiwrapperservice";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Router } from "@angular/router";
import { Subject } from "rxjs";

import { environment } from "../../environments/environment";


@Injectable({ providedIn: "root" })
export class AuthService {
  emp_id: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private api: ApiWrapperService
  ) { }
  private isAuthenticated = false;
  private token: string;
  private authStatusListener = new Subject<any>();



  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  login(formData: Object) {
    this.api.post(environment.login, formData).subscribe(
      response => {
        const token = response.token;
        // console.log('In auth service Id',response.DATA.id );
        // localStorage.setItem('emp_id', response.DATA.id);
        // this.emp_id = response.DATA.id;
        this.token = token;
        if (token) {
          this.isAuthenticated = true;
          this.authStatusListener.next({status:true,message:response.message});
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(response.fetchedUser));
          this.router.navigate(["landingPage"]);
        }
      },
      (err: any) => {
        console.log("error_message : ", err.error);
        this.authStatusListener.next({status:false, message: err.error});
      }
    );
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    } else {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.authStatusListener.next(true);
      this.router.navigate(["landingPage"]);
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(["/login"]);
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    return {
      token: token
    };
  }
}

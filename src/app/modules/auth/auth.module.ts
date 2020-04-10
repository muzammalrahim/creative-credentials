import { MatSelectModule, MatAutocompleteModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';


@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatSelectModule,
    MatAutocompleteModule,
    NgbModalModule,
    FormsModule,
    PipesModule
  ]
})
export class AuthModule {

}

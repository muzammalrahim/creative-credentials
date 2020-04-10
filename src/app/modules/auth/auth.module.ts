import { MatSelectModule, MatAutocompleteModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ModuleshareModule } from 'src/app/shared/moduleshare.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchFilterPipe } from 'src/app/shared/pipes/search-filter.pipe';


@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatSelectModule,
    MatAutocompleteModule,
    NgbModalModule,
    FormsModule,

  ]
})
export class AuthModule {

}

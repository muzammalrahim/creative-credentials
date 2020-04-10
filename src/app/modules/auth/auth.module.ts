import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ModuleshareModule } from 'src/app/shared/moduleshare.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ModuleshareModule,
    // ReactiveFormsModule,
    // HttpClientModule,
    NgbModalModule,
    // RichTextEditorAllModule,
    // FontAwesomeModule,
    // NgMultiSelectDropDownModule.forRoot(),
    FormsModule,

  ]
})
export class AuthModule {

}

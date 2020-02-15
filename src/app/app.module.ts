
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './modules/auth/sign-up/sign-up.component';
import { LoginComponent } from './modules/auth/login/login.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { DashboardComponent } from './modules/landing-page/dashboard/dashboard.component';
import { CardsComponent } from './modules/landing-page/dashboard/cards/cards.component';
import { ClientsComponent } from './modules/landing-page/clients/clients.component';
import { ClientsTableComponent } from './modules/landing-page/clients/clients-table/clients-table.component';

import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';

import { AddClientsComponent } from './modules/landing-page/clients/add-clients/add-clients.component';
import { CredentialsComponent } from './modules/landing-page/credentials/credentials.component';
import { AddCredentialsComponent } from './modules/landing-page/credentials/add-credentials/add-credentials.component';
import { CredentialsTableComponent } from './modules/landing-page/credentials/credentials-table/credentials-table.component';
import { CompaniesComponent } from './modules/landing-page/companies/companies.component';
import { AddCompaniesComponent } from './modules/landing-page/companies/add-companies/add-companies.component';
import { CompaniesTableComponent } from './modules/landing-page/companies/companies-table/companies-table.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    LandingPageComponent,
    DashboardComponent,
    CardsComponent,
    ClientsComponent,
    ClientsTableComponent,
    AddClientsComponent,
    CredentialsComponent,
    AddCredentialsComponent,
    CredentialsTableComponent,
    CompaniesComponent,
    AddCompaniesComponent,
    CompaniesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FontAwesomeModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    NgbModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

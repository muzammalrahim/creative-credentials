
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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './modules/landing-page/dashboard/dashboard.component';
import { CardsComponent } from './shared/cards/cards.component';
import { ClientsComponent } from './modules/landing-page/clients/clients.component';
import { ClientsTableComponent } from './modules/landing-page/clients/clients-table/clients-table.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import { AddClientsComponent } from './modules/landing-page/clients/add-clients/add-clients.component';
import { CredentialsComponent } from './modules/landing-page/credentials/credentials.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsComponent } from './modules/landing-page/projects/projects.component';
import { AddProjectComponent } from './modules/landing-page/projects/add-project/add-project.component';
import { ProjectTableComponent } from './modules/landing-page/projects/project-table/project-table.component';
import { SearchFilterPipe } from './shared/pipes/search-filter.pipe';
import { UsersComponent } from './modules/landing-page/users/users.component';
import { UsersTableComponent } from './modules/landing-page/users/users-table/users-table.component';
import { ColorDirectiveDirective } from './shared/directives/color-directive.directive';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ChangeStatusPipe } from './shared/pipes/change-status.pipe';
import { SettingsComponent } from './modules/landing-page/settings/settings.component';
import { AssignProjectComponent } from './modules/landing-page/assign/assign-project/assign-project.component';
import { ViewAssignProjectsComponent } from './modules/landing-page/assign/view-assign-projects/view-assign-projects.component';
import { ProjectDetailPageComponent } from './modules/landing-page/assign/project-detail-page/project-detail-page.component';
import {MatRadioModule} from '@angular/material/radio';
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
    ProjectsComponent,
    AddProjectComponent,
    ProjectTableComponent,
    SearchFilterPipe,
    UsersComponent,
    UsersTableComponent,
    ColorDirectiveDirective,
    ChangeStatusPipe,
    SettingsComponent,
    AssignProjectComponent,
    ViewAssignProjectsComponent,
    ProjectDetailPageComponent
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
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatMenuModule,
    RichTextEditorAllModule,
    MatRadioModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

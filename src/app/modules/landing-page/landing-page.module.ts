import { ModuleshareModule } from 'src/app/shared/moduleshare.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { AddClientsComponent } from './clients/add-clients/add-clients.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { AssignProjectComponent } from './assign/assign-project/assign-project.component';
import { ViewAssignProjectsComponent } from './assign/view-assign-projects/view-assign-projects.component';
import { ProjectDetailPageComponent } from './assign/project-detail-page/project-detail-page.component';
import { LandingPageComponent } from './landing/landing-page.component';
import { CardsComponent } from 'src/app/shared/cards/cards.component';
import { ClientsTableComponent } from './clients/clients-table/clients-table.component';
import { ProjectTableComponent } from './projects/project-table/project-table.component';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { ColorDirectiveDirective } from 'src/app/shared/directives/color-directive.directive';
import { ChangeStatusPipe } from 'src/app/shared/pipes/change-status.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ClientsComponent,
    AddClientsComponent,
    CredentialsComponent,
    AddProjectComponent,
    ProjectDetailPageComponent,
    ViewAssignProjectsComponent,
    AssignProjectComponent,
    SettingsComponent,
    UsersComponent,
    ProjectsComponent,
    LandingPageComponent,
    CardsComponent,
    ClientsTableComponent,
    ProjectTableComponent,
    UsersTableComponent,
    ColorDirectiveDirective,
    ChangeStatusPipe,

  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RichTextEditorAllModule,
    FontAwesomeModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ModuleshareModule,
    PipesModule
  ]
})
export class LandingPageModule {

 }

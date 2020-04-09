import { ProjectDetailPageComponent } from './modules/landing-page/assign/project-detail-page/project-detail-page.component';
import { ViewAssignProjectsComponent } from './modules/landing-page/assign/view-assign-projects/view-assign-projects.component';
import { AssignProjectComponent } from './modules/landing-page/assign/assign-project/assign-project.component';
import { UsersComponent } from './modules/landing-page/users/users.component';
import { AddClientsComponent } from './modules/landing-page/clients/add-clients/add-clients.component';
import { ClientsComponent } from './modules/landing-page/clients/clients.component';
import { DashboardComponent } from './modules/landing-page/dashboard/dashboard.component';
import { LandingPageComponent } from './modules/landing-page/landing/landing-page.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SignUpComponent } from './modules/auth/sign-up/sign-up.component';
import { CredentialsComponent } from './modules/landing-page/credentials/credentials.component';
import { AddProjectComponent } from './modules/landing-page/projects/add-project/add-project.component';
import { ProjectTableComponent } from './modules/landing-page/projects/project-table/project-table.component';
import { ProjectsComponent } from './modules/landing-page/projects/projects.component';
import {AuthGuard} from './services/auth.guard';
import { SettingsComponent } from './modules/landing-page/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
},
  {path:'auth' ,loadChildren:"./modules/auth/auth.module#AuthModule" },
  {path:'landingPage' , loadChildren:"./modules/landing-page/landing-page.module#LandingPageModule" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }

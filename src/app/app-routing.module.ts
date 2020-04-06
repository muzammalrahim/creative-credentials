import { ProjectDetailPageComponent } from './modules/landing-page/assign/project-detail-page/project-detail-page.component';
import { ViewAssignProjectsComponent } from './modules/landing-page/assign/view-assign-projects/view-assign-projects.component';
import { AssignProjectComponent } from './modules/landing-page/assign/assign-project/assign-project.component';


import { UsersComponent } from './modules/landing-page/users/users.component';

import { AddClientsComponent } from './modules/landing-page/clients/add-clients/add-clients.component';
import { ClientsComponent } from './modules/landing-page/clients/clients.component';
import { DashboardComponent } from './modules/landing-page/dashboard/dashboard.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';

import { LoginComponent } from './modules/auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './modules/auth/sign-up/sign-up.component';
import { CredentialsComponent } from './modules/landing-page/credentials/credentials.component';
import { AddProjectComponent } from './modules/landing-page/projects/add-project/add-project.component';
import { ProjectTableComponent } from './modules/landing-page/projects/project-table/project-table.component';
import { ProjectsComponent } from './modules/landing-page/projects/projects.component';
import {AuthGuard} from './services/auth.guard';
import { SettingsComponent } from './modules/landing-page/settings/settings.component';

const routes: Routes = [
  {path:'' , redirectTo:'login' , pathMatch:'full'},
  {path:'login' , component:LoginComponent},
  {path:'signup' , component:SignUpComponent},
  {path:'landingPage' , component:LandingPageComponent , canActivate:[AuthGuard],children:[
    {path: '' , redirectTo:'dash' , pathMatch:'full' , canActivate:[AuthGuard]},
    {path: 'dash' , component: DashboardComponent, canActivate:[AuthGuard]},
    {path:'clients', component:ClientsComponent, canActivate:[AuthGuard]},
    {path:'addclients', component:AddClientsComponent, canActivate:[AuthGuard]},
    {path:'credentials', component:CredentialsComponent, canActivate:[AuthGuard]},
    {path:'addprojects', component:AddProjectComponent, canActivate:[AuthGuard]},
    {path:'projects', component:ProjectsComponent, canActivate:[AuthGuard]},
    {path:'editprojects/:id', component:AddProjectComponent, canActivate:[AuthGuard]},
    {path:'editclient/:id', component:AddClientsComponent, canActivate:[AuthGuard]},
    {path:'users', component:UsersComponent, canActivate:[AuthGuard]},
    {path:'settings', component:SettingsComponent,canActivate:[AuthGuard]},
    {path:'assignproj', component:AssignProjectComponent,canActivate:[AuthGuard]},
    {path:'view-assign-proj', component:ViewAssignProjectsComponent,canActivate:[AuthGuard]},
    {path:'project-detail-page/:id', component:ProjectDetailPageComponent,canActivate:[AuthGuard]},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }

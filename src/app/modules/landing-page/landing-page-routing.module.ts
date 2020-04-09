import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing/landing-page.component';
import { AuthGuard } from 'src/app/services/auth.guard';
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

const routes: Routes = [
  {path:'' , component:LandingPageComponent , canActivate:[AuthGuard],children:[
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }

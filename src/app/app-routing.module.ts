import { UsersComponent } from './modules/landing-page/users/users.component';

import { AddCredentialsComponent } from './modules/landing-page/credentials/add-credentials/add-credentials.component';
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


const routes: Routes = [
  {path:'' , redirectTo:'login' , pathMatch:'full'},
  {path:'login' , component:LoginComponent},
  {path:'signup' , component:SignUpComponent},

  {path:'landingPage' , component:LandingPageComponent ,children:[
    {path: '' , redirectTo:'dash' , pathMatch:'full' },
    {path: 'dash' , component: DashboardComponent},
    {path:'clients', component:ClientsComponent},
    {path:'addclients', component:AddClientsComponent},


    {path:'addcredentials', component:AddCredentialsComponent},
    {path:'credentials', component:CredentialsComponent},

    {path:'addprojects', component:AddProjectComponent},
    {path:'projects', component:ProjectsComponent},

    {path:'users', component:UsersComponent},

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

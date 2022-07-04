import { RouterModule, Routes } from '@angular/router';

import { AddTicketComponent } from './components/ticket/add-ticket/add-ticket.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditTicketComponent } from './components/ticket/edit-ticket/edit-ticket.component';
import { GenerateReportComponent } from './components/generate-report/generate-report.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewTicketComponent } from './components/ticket/view-ticket/view-ticket.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"landingpage", component:LandingPageComponent},
  {path:"add",component:AddTicketComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:'report',component:GenerateReportComponent},
  { path:'viewticket/:id',component:ViewTicketComponent},
  { path:'viewticket/:id/edit/:id',component:EditTicketComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
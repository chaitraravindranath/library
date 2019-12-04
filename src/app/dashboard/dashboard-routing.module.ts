import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { GetBooksComponent } from './get-books/get-books.component';
import { IssueBooksComponent } from './issue-books/issue-books.component';
import { NewRequestsComponent } from './new-requests/new-requests.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'addBooks',
    component: AddBooksComponent
  },
  {
    path: 'getAllBooks',
    component: GetBooksComponent
  },
  {
    path: 'issueBooks',
    component: IssueBooksComponent
  },
  {
    path: 'newRequests',
    component: NewRequestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
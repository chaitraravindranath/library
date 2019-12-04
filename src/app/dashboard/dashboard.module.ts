import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { GetBooksComponent } from './get-books/get-books.component';
import { IssueBooksComponent } from './issue-books/issue-books.component';
import { NewRequestsComponent } from './new-requests/new-requests.component';
import { routes } from './dashboard-routing.module';
import { RouterModule} from '@angular/router';

@NgModule({

  declarations: [DashboardComponent, AddBooksComponent, GetBooksComponent, IssueBooksComponent,NewRequestsComponent],

  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule.forChild(routes)
  ]
})

export class DashboardModule { }

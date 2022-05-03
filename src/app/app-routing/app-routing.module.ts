import { NgModule } from '@angular/core';

import { ExpenseComponent } from '../expense/expense.component';
import { ExportComponent } from '../export/export.component';
import { FamilyComponent } from '../family/family.component';
import { HomeComponent } from '../home/home.component';
import { IncomeComponent } from '../income/income.component';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from '../logout/logout.component';

import { ExpenseGuard } from '../expense.guard';
import { ViewIncomeComponent } from '../view-income/view-income.component';

const routes: Routes = [
  { path: '' , component: LoginComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'home' , component: HomeComponent },
  { path: 'income' , component: IncomeComponent },
  { path: 'view-income' , component: ViewIncomeComponent},
  { path: 'expense' , component: ExpenseComponent },
  { path: 'family' , component: FamilyComponent },
  { path: 'export' , component: ExportComponent },
  { path: 'logout' , component: LogoutComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

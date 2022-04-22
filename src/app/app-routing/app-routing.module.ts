import { NgModule } from '@angular/core';

import { ExpenseComponent } from '../expense/expense.component';
import { FamilyComponent } from '../family/family.component';
import { HomeComponent } from '../home/home.component';
import { IncomeComponent } from '../income/income.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: '' , component: LoginComponent 
  },
  {
    path: 'login' , component: LoginComponent
  },
  {
    path: 'home' , component: HomeComponent
  },
  {
    path: 'income' , component: IncomeComponent
  },
  {
    path: 'expense' , component: ExpenseComponent
  },
  {
    path: 'family' , component: FamilyComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

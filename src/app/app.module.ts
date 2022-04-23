import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';

import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { FamilyComponent } from './family/family.component';
import { ExportComponent } from './export/export.component';
import { NewIncomeComponent } from './new-income/new-income.component';
import { ViewIncomeComponent } from './view-income/view-income.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IncomeComponent,
    ExpenseComponent,
    FamilyComponent,
    ExportComponent,
    NewIncomeComponent,
    ViewIncomeComponent
  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    BrowserAnimationsModule,
    
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

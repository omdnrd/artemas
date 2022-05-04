import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatListModule} from '@angular/material/list';

import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';

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
import { ViewIncomeComponent } from './view-income/view-income.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewFamilyComponent } from './view-family/view-family.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IncomeComponent,
    ExpenseComponent,
    FamilyComponent,
    ExportComponent,
    ViewIncomeComponent,
    LogoutComponent,
    ViewFamilyComponent
  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    BrowserAnimationsModule,
    
    FormsModule,

    HttpClientModule,

    MatDatepickerModule,
    
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatNativeDateModule,
    MatListModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

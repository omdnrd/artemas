import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FamilyComponent } from '../family/family.component';


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {
  date: string;
  expense: string;
  month!: string;
  day!: number;
  year!: number;
  amount: any;
  description: any;
  Expenses: any = [];

  constructor(private router: Router, ) { 
    this.date = new Date().toDateString();
    this.expense = ""
    this.amount = "00.00"
    this.description = ""
  }

    ngOnInit(): void {

  }
  goToPage(PageName:string):void{


    this.router.navigate([`${PageName}`]);
    // else
    // outterrormessage
  }

  addEntry():void{
    console.log(this.date + " " + this.expense + " " + this.amount + " " + this.description)
    let entry = {
      date: this.date,
      expense: this.expense,
      amount: this.amount,
      description: this.description
    }

  

    this.Expenses.push(entry)
    console.log(this.Expenses)
 }
}
//@Component({  
  //selector: 'datepicker-custom-icon-example',  
  //templateUrl: 'datepicker-custom-icon-example.html',  
//})  
//export class DatepickerCustomIconExample {} 

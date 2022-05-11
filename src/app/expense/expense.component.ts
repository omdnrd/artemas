import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from '../expense.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FamilyComponent } from '../family/family.component';
import { IncomeComponent } from '../income/income.component';
import { IncomeService } from '../income.service';


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

  constructor(private router: Router, private expenseService: ExpenseService, private incomeService: IncomeService) { 
    this.date = new Date().toDateString();
    this.expense = ""
    this.amount = "00.00"
    this.description = ""
  }

    ngOnInit(): void {
      this.getExpenses()
  }
  createNewExpense(){
    let request = {
      expense:  this.expense,
      amount: this.amount,
      date: this.date,
      description: this.description
    }
    console.log(request.expense);
    this.expenseService.createExpense(request).subscribe((response: any) => {
      this.getExpenses()
    });
  }
  getExpenses(){
    let expenseInfo:any = []
    this.expenseService.getExpense().subscribe((res: any) => {
     let arr = res
     arr.forEach((element: any) => {
      // console.log(element)

       expenseInfo.push(element)
     });

    });

    console.log(expenseInfo);
    this.Expenses = expenseInfo
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

 deleteEntry(entry:any):void {
  this.expenseService.deleteExpense(entry._id).subscribe((res: any) => {
    this.getExpenses() // Once the record gets deleted we refetch
  })
} 
}
//@Component({  
  //selector: 'datepicker-custom-icon-example',  
  //templateUrl: 'datepicker-custom-icon-example.html',  
//})  
//export class DatepickerCustomIconExample {} 

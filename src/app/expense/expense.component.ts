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
  expense: string = "Expense";
  amount: number = 84.69;

  constructor(private router: Router) { 
    this.date = new Date().toDateString()
  }

    ngOnInit(): void {

  }
  goToPage(PageName:string):void{


    this.router.navigate([`${PageName}`]);
    // else
    // outterrormessage
  }

  displayInfo():void{
    console.log(this.date + " " + this.expense + " " + this.amount)
    console.log(this.expense)
    console.log(this.amount)

  }
}

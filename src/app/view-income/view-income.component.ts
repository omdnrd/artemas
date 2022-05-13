import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncomeService } from '../income.service';
import { FamilyService } from '../family.service';
import { ExpenseService } from '../expense.service';
import { subscribeOn } from 'rxjs';


@Component({
  selector: 'app-view-income',
  templateUrl: './view-income.component.html',
  styleUrls: ['./view-income.component.scss']
})
export class ViewIncomeComponent implements OnInit {
  totalIncome: any
  totalExpense: any
  incomeByFamily: any

  constructor(private router: Router, private incomeService: IncomeService, private familyService: FamilyService, private expenseService: ExpenseService) {
    this.totalIncome = 0
    this.totalExpense = 0
    this.incomeByFamily = []
  }

  goToPage(PageName:string):void{


    this.router.navigate([`${PageName}`]);
    // else
    // outterrormessage
  }
  ngOnInit(): void {
    this.getAllIncome()
    this.getAllExpense()
    this.getIncomeByFamily()
  }

  getAllIncome() {
    this.incomeService.getAllIncome().subscribe((res: any) => {
      this.totalIncome = res.totalIncome
    })
  }

  getAllExpense() {
    this.expenseService.getAllExpense().subscribe((res: any) => {
      this.totalExpense = res.totalExpense
    })
  }
  
  getIncomeByFamily(){
    this.familyService.getFamily().subscribe((res: any) => {
      let familyInfo:any = []

      let arr = res
      arr.forEach((element: any) => {
      // console.log(element)

        familyInfo.push(element)
      });
        this.incomeService.getIncome().subscribe((res2: any) => {
          let incomeInfo:any = []

          let arr2 = res2
          arr2.forEach((element: any) => {
          // console.log(element)

            incomeInfo.push(element)
          });
          let incomeByFamily:any = []
          familyInfo.forEach((family:any) => {
            let totalIncome = 0

            incomeInfo.forEach((income: any) => {
              if(income.family == family.familyName ) {
                totalIncome += income.amount
              }
            })
            incomeByFamily.push({ familyName: family.familyName, totalIncome})
          })
          this.incomeByFamily = incomeByFamily
        })
    });

  }
  getExpenseByType(){
    this.expenseService.getAllExpense().subscribe((res: any) => {
      let expenseInfo:any =[]

      let arr = res
      arr.forEach((Element: any) => {


        expenseInfo.push(Element)
      })
    })
  }
}


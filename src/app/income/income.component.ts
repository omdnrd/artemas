import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FamilyService } from '../family.service';
import { IncomeService } from '../income.service';


@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  date: any;
  family: any;
  amount: any;
  Incomes: any = [];
  Families: any = [];



  constructor(private router: Router, private familyService: FamilyService, private incomeService: IncomeService) {

    this.date = ""
    this.family = ""
    this.amount = ""


   }



  ngOnInit(): void {
    this.getFamilies()
    this.getIncomes()
  }

  createNewIncome(){
    let request = {
      family:  this.family,
      amount: this.amount,
      date: this.date
    }
    console.log(request.family);
    this.incomeService.createIncome(request).subscribe((response: any) => {
      this.getIncomes()
    });
  }

  getFamilies(){
    let familyInfo:any = []
    this.familyService.getFamily().subscribe((res: any) => {
     let arr = res
     arr.forEach((element: any) => {
      // console.log(element)

       familyInfo.push(element)
     });

    });

    console.log(familyInfo);
    this.Families = familyInfo
  }

  getIncomes(){
    let incomeInfo:any = []
    this.incomeService.getIncome().subscribe((res: any) => {
     let arr = res
     arr.forEach((element: any) => {
      // console.log(element)

       incomeInfo.push(element)
     });

    });

    console.log(incomeInfo);
    this.Incomes = incomeInfo
  }

  goToPage(PageName:string):void{


    this.router.navigate([`${PageName}`]);
    // else
    // outterrormessage
  }

  addEntry():void{
    console.log(this.date + " " + this.family + " " + this.amount)
    let entry = {
      date: this.date,
      family: this.family,
      amount: this.amount
    }

    this.Incomes.push(entry)
    console.log(this.Incomes)
  }
}

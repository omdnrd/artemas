import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FamilyComponent } from '../family/family.component';


@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  date: string;
  family: any;
  amount: any;
  Incomes:any = [];

  

  constructor(private router: Router, ) {

    this.date = new Date().toDateString();
    this.family = ""
    this.amount = "00.00"
    

   }

  

  ngOnInit(): void {
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

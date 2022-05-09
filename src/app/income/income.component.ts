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
  term: string;
  family: any;
  amount: any;
  Incomes: any = [];

  

  constructor(private router: Router, ) {

    this.term = ""
    this.family = ""
    this.amount = ""
    

   }

  

  ngOnInit(): void {
  }


  goToPage(PageName:string):void{


    this.router.navigate([`${PageName}`]);
    // else
    // outterrormessage
  }

  addEntry():void{
    console.log(this.term + " " + this.family + " " + this.amount)
    let entry = {
      date: this.term,
      family: this.family,
      amount: this.amount
    }

    this.Incomes.push(entry)
    console.log(this.Incomes)
  }
}

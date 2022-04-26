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
  family: string = "Franklin";
  amount: number = 0;

  constructor(private router: Router, ) {

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
    console.log(this.date + " " + this.family + " " + this.amount)
    console.log(this.family)
    console.log(this.amount)
  }
}

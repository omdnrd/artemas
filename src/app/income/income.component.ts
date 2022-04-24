import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  date: any = "";
  family: string = "";
  amount: number = 0;

  constructor(private router: Router, ) {

   }

  

  ngOnInit(): void {
  }


  goToPage(PageName:string):void{


    this.router.navigate([`${PageName}`]);
    // else
    // outterrormessage
  }

  displayInfo():void{
    console.log(this.date)
    console.log(this.family)
    console.log(this.amount)
  }
}

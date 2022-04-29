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
  Incomes = [
    { firstName: 'Frank', lastName: 'Franklin', amount: '$ 400.00', date: 'Thu Apr 28 2022' },
    { firstName: 'Vic', lastName: 'Saunders', amount: '$ 200.00', date: 'Thu Apr 28 2022' },
    { firstName: 'Gina', lastName: 'Jones', amount: '$ 100.00', date: 'Thu Apr 28 2022' },
    { firstName: 'Jessi', lastName: 'Glaser', amount: '$ 500.00', date: 'Thu Apr 28 2022' },
    { firstName: 'Jay', lastName: 'Bilzerian', amount: '$ 400.00', date: 'Thu Apr 28 2022' }
];

  

  constructor(private router: Router, ) {

    this.date = new Date().toDateString();
    this.family = {

    }
    this.amount = {

    }
    

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
  }
}

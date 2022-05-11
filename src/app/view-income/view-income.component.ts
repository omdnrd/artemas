import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncomeService } from '../income.service';


@Component({
  selector: 'app-view-income',
  templateUrl: './view-income.component.html',
  styleUrls: ['./view-income.component.scss']
})
export class ViewIncomeComponent implements OnInit {
  totalIncome: any

  constructor(private router: Router, private incomeService: IncomeService) {
    this.totalIncome = 0
  }

  goToPage(PageName:string):void{


    this.router.navigate([`${PageName}`]);
    // else
    // outterrormessage
  }
  ngOnInit(): void {
    this.getAllIncome()
  }

  getAllIncome() {
    this.incomeService.getAllIncome().subscribe((res: any) => {
      this.totalIncome = res.totalIncome
    })
  }

}

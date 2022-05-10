import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FamilyService } from '../family.service';


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

  

  constructor(private router: Router, private familyService: FamilyService) {

    this.term = ""
    this.family = ""
    this.amount = ""
    

   }

  

  ngOnInit(): void {
  }
  createNewIncome(){
    let request = {
      family:  this.family,
      amount: this.amount,
      term: this.term
    }
    console.log(request.family);
    this.familyService.createFamily(request).subscribe((response: any) => {
      console.log(response);
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

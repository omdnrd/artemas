import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {
  firstName!: string;
  lastName!: string;
  family!: string;
  Families: any = [];

  constructor(private router: Router) {
    
    this.firstName =""
    this.lastName = ""
    this.family = ""
  }

  ngOnInit(): void {
  }


  goToPage(PageName:string):void{


    this.router.navigate([`${PageName}`]);
    // else
    // outterrormessage
  }
  addEntry():void{
    console.log()
    let entry = {
      family: this.firstName + " " + this.lastName
    }

    this.Families.push(entry)
    console.log(this.Families)
  }

}

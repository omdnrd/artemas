import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { FamilyService } from '../family.service';


@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {
  firstName!: string;
  lastName!: string;
  family!: string;
  status!: boolean;
  Families: any = [];

  constructor(private router: Router, private familyService: FamilyService) {
    
    this.firstName = ""
    this.lastName = ""
    this.family = this.firstName + this.lastName
  }

  ngOnInit(): void {
  }

  createNewFamily(){
    this.familyService.createFamily(this.family).subscribe((response: any) => {
      console.log(response);
    });
  }

  getFamilies(){
    this.familyService.getFamily().subscribe((response2: any) => {
      console.log(response2);
    });
  }

  updateFamilies(){
    this.familyService.updateFamily('Testing').subscribe((response3: any) => {
      console.log(response3);
    });
  }

  deleteFamilies(){
    this.familyService.deleteFamily().subscribe((response4: any) => {
      console.log(response4);
    })
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

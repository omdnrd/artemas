import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  status!: string;
  Families: any = [];


  constructor(private router: Router, private familyService: FamilyService) {

    this.firstName = ""
    this.lastName = ""
    this.family =  ""
    this.status = "active"
  }

  ngOnInit(): void {
    this.getFamilies()
  }

  createNewFamily(){
    let request = {
      name:  this.firstName + " " + this.lastName,
      status: this.status,
    }
    console.log(request.name);
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
    this.Families = familyInfo
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
      familyName: this.firstName + " " + this.lastName,
      status: this.status
    }
    this.Families.push(entry)
    console.log(this.Families)
  }

}

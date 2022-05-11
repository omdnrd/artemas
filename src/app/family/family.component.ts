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
  deleteEntry(entry:any):void {
    this.familyService.deleteFamily(entry._id).subscribe((res: any) => {
      this.getFamilies() // Once the record gets deleted we refetch
    })
  }
  editEntry(entry:any, payload: object):void {
    this.familyService.updateFamily(entry._id, payload).subscribe((res:any) => {
      this.getFamilies() // After the record gets edited we refetch
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {

  constructor(private router: Router) { }
  goToPage(PageName:string):void{


    this.router.navigate([`${PageName}`]);
    // else
    // outterrormessage
  }

  ngOnInit(): void {
  }

}

import { Component, Injectable, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   userName!: string;
   password!: string;
   formData!: FormGroup;

  constructor(private authService : AuthService, private router: Router) { }
  //goToPage(PageName:string):void{


    //this.router.navigate([`${PageName}`]);
    // else
    // outterrormessage
  ngOnInit() {
    // this.formData = new FormGroup({
    //   userName: new FormControl(""),
    //   password: new FormControl(""),
    // });
  }

  onClickSubmit() {



    console.log("Login Page: " + this.userName);
    console.log("Login page: " + this.password);

    this.authService.login(this.userName, this.password)
      .subscribe( data => {
        console.log("Is Login Succcess: " + data);

        if(data) this.router.navigate(['/home']);
      });
  }
}

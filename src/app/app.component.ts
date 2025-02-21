import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = "SHEILA'S CHILDCARE AND PRESCHOOL";
  isUserLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    let storeData = localStorage.getItem("isUserLoggedIn");
    console.log("StoreData: " + storeData);


    if( storeData != null && storeData == "true")
      this.isUserLoggedIn = true;

    else

      this.isUserLoggedIn = false;

  }


}

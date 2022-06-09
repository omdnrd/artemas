import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {tap, delay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;

  //Any is only being used for now, will edit later if needed
  login(userName: string, password: string): Observable<any> {
    console.log(userName);
    console.log(password);
    this.isUserLoggedIn = userName == 'Sheila' && password == 'DarthVader1977';
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 
  
    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => { 
         console.log("Is User Authentication is successful: " + val); 
      })
   );
   }

   logout(): void {
   this.isUserLoggedIn = false;
      localStorage.removeItem('isUserLoggedIn'); 
   }
    

    constructor() {
      
     }
}

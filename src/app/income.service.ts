import { Injectable } from '@angular/core';

import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {


  constructor(private webReqService: WebRequestService ) { }

  createIncome(income: object){
    console.log(JSON.stringify(income))
   // let req = JSON.stringify(income)
    // Sends a web request to create a income
    return this.webReqService.post('api/income', income);
  }
  getIncome(){
    //Sends a web request to get all families
    return this.webReqService.get('api/income');
  }
  updateIncome(title: string){
    console.log(title)
    //Sends a web request to update a income
    return this.webReqService.patch('api/income', {title});
  }
  deleteIncome(id:any){
    //Sends a web request to deleta a income
    return this.webReqService.delete(`api/income/${id}`);
  }
}


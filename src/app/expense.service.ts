import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private webReqService: WebRequestService ) { }

  createExpense(expense: object){
    console.log(JSON.stringify(expense))
   // let req = JSON.stringify(income)
    // Sends a web request to create a income
    return this.webReqService.post('api/expense', expense);
  }
  getExpense(){
    //Sends a web request to get all families
    return this.webReqService.get('api/expense');
  }
  updateExpense(title: string){
    console.log(title)
    //Sends a web request to update a income
    return this.webReqService.patch('api/expense', {title});
  }
  deleteExpense(id:any){
    //Sends a web request to deleta a income
    return this.webReqService.delete(`api/expense/${id}`);
  }
}

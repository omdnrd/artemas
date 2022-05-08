import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor(private webReqService: WebRequestService ) { }

  createFamily(title: string){
    console.log(title)
    // Sends a web request to create a family
    return this.webReqService.post('api/family', {title});
  }
  //getFamily(id: any){
    // Sends a web request to get a family
    //return this.webReqService.get('/api/family', id);
  //}
}

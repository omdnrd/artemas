import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {


  constructor(private webReqService: WebRequestService ) { }

  createFamily(family: object){
    console.log(JSON.stringify(family))
   // let req = JSON.stringify(family)
    // Sends a web request to create a family
    return this.webReqService.post('api/family', family);
  }
  getFamily(){
    //Sends a web request to get all families
    return this.webReqService.get('api/family');
  }
  updateFamily(id:any, family: object){
    console.log(id)
    //Sends a web request to update a family
    return this.webReqService.patch(`api/family/${id}`, family);
  }
  deleteFamily(id:any){
    //Sends a web request to deleta a family
    return this.webReqService.delete(`api/family/${id}`);
  }
}

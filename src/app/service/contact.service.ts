import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ContactModel} from '../models/contact.model';
const httpOptions={headers:new HttpHeaders({
    'content-type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ContactService {
apiUrl : string="http://localhost:8080/api"
  contact!:ContactModel[]
  constructor(private http:HttpClient) { }
  ContactList(){
   return this.http.get<ContactModel[]>(this.apiUrl + "/contacts" , httpOptions)

  }

  save(newContact:ContactModel){

  return this.http.post(this.apiUrl + "/contacts" ,  newContact)

  }
}

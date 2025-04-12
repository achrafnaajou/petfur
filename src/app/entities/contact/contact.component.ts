import {NgFor, NgStyle} from '@angular/common';
import { Component } from '@angular/core';
import {ContactModel} from '../../models/contact.model';
import {ContactService} from '../../service/contact.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-contact',
  imports: [
    FormsModule
  ],
  providers: [HttpClient],
  templateUrl: './contact.component.html',
  standalone: true,
  styleUrl: './contact.component.css'
})
export class ContactComponent  {
  newContact = new ContactModel()
  constructor(private contactservice : ContactService , private router:Router) {}

  add(){debugger
    this.contactservice.save(this.newContact).subscribe(c =>{
      this.router.navigate(['home'])
    })
  }




}

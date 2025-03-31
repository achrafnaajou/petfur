import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {fill} from "@cloudinary/url-gen/actions/resize";
import {  CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary } from '@cloudinary/url-gen/index';


@Component({
  selector: 'app-new-arrv-home',
  standalone: true,
  imports: [NgFor,CommonModule],
  providers:[CloudinaryModule],
  templateUrl: './new-arrv-home.component.html',
  styleUrl: './new-arrv-home.component.css'
})
export class NewArrvHomeComponent implements OnInit {
  products: {id:number; title: string; price: number; image: any }[] = [
    { id :1,title: 'The Honest Kitchen Whole Food Clusters Whole Grain Chicken & Oat Dry Dog Food, 5 lb Bag', price: 24.49, image: '' },
    
    
  ];

  

  ngOnInit() {
    const cld = new Cloudinary({
      cloud:{
        cloudName:'du1rqxwmr',
      },
    })
  
    this.products[0].image=cld.image('nf4xlq27ootpu3ukj8gt').resize(fill().width(508).height(681)).toURL();
   
  }

}

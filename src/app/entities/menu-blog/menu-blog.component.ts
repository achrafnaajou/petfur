import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import {fill} from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from '@cloudinary/url-gen/index';
import { Tutorial } from '../../models/tutorial';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-menu-blog',
  standalone: true,
  imports: [NgIf],
  providers:[CloudinaryModule],
  templateUrl: './menu-blog.component.html',
  styleUrl: './menu-blog.component.css'
})
export class MenuBlogComponent implements OnInit {
  blogId!:number
  blogDetails:any

constructor(private router:Router , private route:ActivatedRoute){}

tutorials: Tutorial[] = [
    {
      id:1,
      title: 'How to Color: Hologram',
      image: '',
      colors: ['Y030', 'RV030', 'BG', 'YR030', 'V330'],
      description: 'Creating a holographic effect in your coloring projects can add a unique and futuristic touch to your artwork.',
      date: 'March 12, 2025'
    },
    // Ajoutez d'autres tutoriels ici
    {
      id:2,
      title: 'How to Color: Sunset',
      image: '',
      colors: ['R050', 'Y060', 'B080'],
      description: 'Learn how to create a beautiful sunset effect with these colors.',
      date: 'April 15, 2025'
    }
  ];



  ngOnInit(): void {debugger
this.route.params.subscribe(params =>{
this.blogId = +params['id'];
this.loadBlogdetails();

})

    this.initBlogImage();
  }
  initBlogImage(){
    const cld = new Cloudinary({
      cloud:{
        cloudName: 'du1rqxwmr'
      }
    })

    const imageName = [
      'nf4xlq27ootpu3ukj8gt',
      'ic5aet7ilrdbqfsgly7e'


    ];

    this.tutorials.forEach((tutorial , index  )=>{
      if (imageName[index]){
         tutorial.image = cld.image(imageName[index]).resize(fill().width(400).height(500)).toURL()
         }
    })

    
  }

  loadBlogdetails(){

    this.blogDetails = this.tutorials.find(tutorial => tutorial.id === this.blogId);

    if(this.blogDetails && this.blogDetails.image){
      const cld = new Cloudinary({
        cloud:{
          cloudName: 'du1rqxwmr',
        }
      });
      this.blogDetails.image = cld.image(this.blogDetails.image).resize(fill().width(500).height(500)).toURL();
    }


  }
  }



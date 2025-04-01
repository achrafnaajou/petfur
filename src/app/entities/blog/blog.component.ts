import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../../models/tutorial';
import { Router } from '@angular/router';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary } from '@cloudinary/url-gen/index';
import {fill} from "@cloudinary/url-gen/actions/resize";



@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor],
  providers:[CloudinaryModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
constructor(private router:Router){}
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

ngOnInit(): void {
  const cld = new Cloudinary({
    cloud:{
      cloudName:'du1rqxwmr',
    },
  })
  this.tutorials[0].image=cld.image('nf4xlq27ootpu3ukj8gt').resize(fill().width(508).height(681)).toURL();
  this.tutorials[1].image=cld.image('ic5aet7ilrdbqfsgly7e').resize(fill().width(508).height(670)).toURL();
  
}



  navigateToBlog(blogId:number){
    this.router.navigate(['/menu-blog',blogId])
  }
}

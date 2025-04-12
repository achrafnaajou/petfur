import { Component, OnInit } from '@angular/core';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import {fill} from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from '@cloudinary/url-gen/index';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  providers:[CloudinaryModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {
  currentSlide = 0;
  img!:any
  ngOnInit(): void {
    const cld = new Cloudinary({cloud:{
      cloudName:'du1rqxwmr'
    }})
        // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
        this.img = cld.image('utd7g19suirph3obyha7').resize(fill().width(950).height(150));

        ;

  }

  prevSlide() {
    const slides = document.querySelectorAll('.slide');
    slides[this.currentSlide].classList.remove('active');
    this.currentSlide = (this.currentSlide - 1 + slides.length) % slides.length;
    slides[this.currentSlide].classList.add('active');
  }

  nextSlide() {
    const slides = document.querySelectorAll('.slide');
    slides[this.currentSlide].classList.remove('active');
    this.currentSlide = (this.currentSlide + 1) % slides.length;
    slides[this.currentSlide].classList.add('active');
  }

  startSlider() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Change every 5 seconds
  }

}

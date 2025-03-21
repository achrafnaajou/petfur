import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  currentSlide = 0;

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

}

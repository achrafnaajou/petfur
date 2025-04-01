import { Component, HostListener, ElementRef, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  standalone:true,
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {
  private lastScrollTop = 0;

  constructor(private el: ElementRef, private router:Router) {}
   
  goToUrl(targetRoute: string) {
    this.router.navigate([targetRoute]);
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = this.el.nativeElement.querySelector('.header');
    const scrollTop = window.scrollY;

    if (scrollTop > this.lastScrollTop && scrollTop > 50) {
      // Si on scroll vers le bas → cacher le header
      header.classList.add('hidden-header');
    } else {
      // Si on scroll vers le haut → réafficher le header
      header.classList.remove('hidden-header');
    }

    this.lastScrollTop = scrollTop;
  }
}


import { Router } from '@angular/router';
import { Component, HostListener, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import {  NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  standalone: true,
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  private lastScrollTop = 0;
  private routerSub: Subscription | undefined;

  constructor(private el: ElementRef, private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    // 🔁 Fermer le menu lors de la navigation
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.closeNavbar();
      }
    });
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
  }
  
  navigateToProduit(produitId : number){
    this.router.navigate(['/produit', produitId])
  }

  goToUrl(targetRoute: string) {
    this.router.navigate([targetRoute]);
  }

  toggleDropdown(event: Event): void {
    const dropdown = event.currentTarget as HTMLElement;
    const parent = dropdown.closest('.dropdown') as HTMLElement;
    parent.classList.toggle('active'); // Toggle the 'active' class to show/hide the dropdown
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = this.el.nativeElement.querySelector('.header');
    const scrollTop = window.scrollY;

    if (scrollTop > this.lastScrollTop && scrollTop > 50) {
      header.classList.add('hidden-header');
    } else {
      header.classList.remove('hidden-header');
    }

    this.lastScrollTop = scrollTop;
  }


  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent) {
    const clickedInside = this.el.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.closeNavbar();
    }
  }

  private closeNavbar() {
    const navbar = this.el.nativeElement.querySelector('.navbar-collapse');
    const isShown = navbar.classList.contains('show');

    if (isShown) {
      const toggleBtn = this.el.nativeElement.querySelector('.navbar-toggler');
      if (toggleBtn) {
        toggleBtn.click(); // simule un clic pour refermer le menu
      }
    }
  }
}

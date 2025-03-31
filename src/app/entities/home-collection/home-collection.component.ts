import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-collection',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home-collection.component.html',
  styleUrl: './home-collection.component.css'
})
export class HomeCollectionComponent {
  books = [
    { title: 'Little Friends Cute & Easy Coloring Book', image: 'assets/book1.png', price: '$7.99' },
    { title: 'Spooky Summer Cute & Easy Coloring Book', image: 'assets/book2.png', price: '$7.99' },
    { title: 'Fresh Glow Cute & Easy Coloring Book', image: 'assets/book3.png', price: '$7.99' },
    { title: 'Fuzzy In Love Cute & Easy Coloring Book', image: 'assets/book4.png', price: '$7.99' },
    { title: 'Little Cozy Cute & Easy Coloring Book', image: 'assets/book5.png', price: '$7.99' },
    { title: 'Girl Spaces Cute & Easy Coloring Book', image: 'assets/book6.png', price: '$7.99' },
    { title: 'Little Fuzzy Cute & Easy Coloring Book', image: 'assets/book7.png', price: '$7.99' },
    { title: 'Hygge Corner Cute & Easy Coloring Book', image: 'assets/book8.png', price: '$7.99' }
  ];
}

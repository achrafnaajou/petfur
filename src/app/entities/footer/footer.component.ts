import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email: string = '';

  subscribe() {
    if (this.email) {
      console.log('Subscribed with email:', this.email);
      alert('Thank you for subscribing!');
      this.email = ''; // Réinitialisation du champ après l'inscription
    }
  }
}


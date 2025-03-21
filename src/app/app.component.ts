import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './entities/nav/nav.component';
import { SliderComponent } from './entities/slider/slider.component';
import { HomeCollectionComponent } from './entities/home-collection/home-collection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,SliderComponent,HomeCollectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecom';
}

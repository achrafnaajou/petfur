import { Routes } from '@angular/router';
import { HomeComponent } from './entities/home/home.component';
import { ContactComponent } from './entities/contact/contact.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'contact', component:ContactComponent},
];

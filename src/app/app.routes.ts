import { Routes } from '@angular/router';
import { HomeComponent } from './entities/home/home.component';
import { CategoryComponent } from './entities/category/category.component';
import { NewArrvHomeComponent } from './entities/new-arrv-home/new-arrv-home.component';
import { SocialMediaHomeComponent } from './entities/social-media-home/social-media-home.component';
import { BlogComponent } from './entities/blog/blog.component';
import { ProduitComponent } from './entities/produit/produit.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'category',component:CategoryComponent},
    {path:'new-arrv-home',component:NewArrvHomeComponent},
    {path:'social-media-home',component:SocialMediaHomeComponent},
    {path:'category',component:CategoryComponent},
    {path:'blog',component:BlogComponent},
    {path:'produit',component:ProduitComponent}
];


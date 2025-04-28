import { Routes } from '@angular/router';
import { HomeComponent } from './entities/home/home.component';
import { CategoryComponent } from './entities/category/category.component';
import { NewArrvHomeComponent } from './entities/new-arrv-home/new-arrv-home.component';
import { SocialMediaHomeComponent } from './entities/social-media-home/social-media-home.component';
import { BlogComponent } from './entities/blog/blog.component';
import { ProduitComponent } from './entities/produit/produit.component';
import path from 'path';
import { Component } from '@angular/core';
import { MenuBlogComponent } from './entities/menu-blog/menu-blog.component';
import {ContactComponent} from './entities/contact/contact.component';
import { CategorieFilterComponent } from './entities/categorie-filter/categorie-filter.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'category',component:CategoryComponent},
    {path:'new-arrv-home',component:NewArrvHomeComponent},
    {path:'social-media-home',component:SocialMediaHomeComponent},
    {path:'category',component:CategoryComponent},
    {path:'blog',component:BlogComponent},
    {path:'produit',component:ProduitComponent},
    { path:'menu-blog/:id' , component:MenuBlogComponent},
    { path:'produit/:id' , component:ProduitComponent},

    {path:'contact' , component:ContactComponent},
    {path:'categorie-filter/:category' , component:CategorieFilterComponent}


];


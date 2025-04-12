import {NgFor, NgOptimizedImage} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {fill} from "@cloudinary/url-gen/actions/resize";
import {  CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary } from '@cloudinary/url-gen/index';


@Component({
  selector: 'app-new-arrv-home',
  standalone: true,
  imports: [NgFor, CommonModule, NgOptimizedImage],
  providers:[CloudinaryModule],
  templateUrl: './new-arrv-home.component.html',
  styleUrl: './new-arrv-home.component.css'
})
export class NewArrvHomeComponent implements OnInit {
  products: {id:number; title: string; price: number; image: any ; category: string }[] = [
    { id :1,title: 'The Honest Kitchen Whole Food Clusters Whole Grain Chicken & Oat Dry Dog Food, 5 lb Bag', price: 24.49, image: '', category: 'DOG' },
    {id :2, title: 'The Honest Kitchen Whole Food Clusters Grain Free Beef Dry Dog Food, 5 lb Bag', price: 29.99, image: '',category: 'CAT' },
    {id:3, title: 'The Honest Kitchen Whole Food Clusters Human Grade Dry Dog Food - Grain Free Turkey 5 lbs', price: 34.29, image: '',category: 'DOG' },
    {id:4, title: 'JustFoodForDogs Frozen Fresh Dog Food, Complete Meal or Dog Food Topper, Beef & Russet Potato Human Grade Dog Food Recipe, 18 oz (Pack of 7)', price:83.99, image: '' ,category: 'DOG'},
    {id:5, title: 'Blue Buffalo Life Protection Formula Adult Dry Dog Food, Helps Build and Maintain Strong Muscles, Made with Natural Ingredients, Beef & Brown Rice Recipe, 15-lb. Bag', price: 41.84, image: '' ,category: 'DOG'},
    {id:6, title: 'Blue Buffalo Life Protection Formula Adult Small Breed Dry Dog Food, Supports High Energy Needs, Made with Natural Ingredients, Chicken & Brown Rice Recipe, 15-lb Bag', price: 39.88, image: '',category: 'DOG' },
    {id:7, title: 'Royal Canin Size Health Nutrition Small Adult Dry Dog Food, 4 lb', price: 26.49, image: '' ,category: 'DOG'},
    {id:8, title: 'IAMS Minichunks Adult Dry Dog Food Lamb & Rice Recipe Dog Kibble, 30 lb. Bag', price: 46.98, image: '',category: 'DOG' },
    {id:9, title: 'IAMS Proactive Health Minichunks Adult Dry Dog Food with Real Chicken, 30 lb. Bag', price: 46.98, image: '',category: 'DOG' },
    {id:10, title: 'Nylabone Customer Favorites Power Chew Toy Bundle for Dogs, Indestructible Dog Toys for Aggressive Chewers, Pack of 3 Dog Toys, Flavor Medley, Large Dogs - Up to 50 lbs, 3 Pack', price: 25.00, image: '',category: 'DOG' },
    {id:11, title: 'Potaroma Dog Puzzle Toy 2 Levels, Slow Feeder, Pup Food Treat Feeding Dispenser for IQ Training and Entertainment for All Breeds 4.2 Inch Height', price: 23.69, image: '',category: 'DOG' },
    {id:12, title: 'WOOF Pupsicle - Long-Lasting Interactive Dog Toy to Keep Your Pup Distracted - Safe for Dogs - Low-Mess Design - Dog Toys for XL Dogs 75 lbs and Up', price: 24.99, image: '',category: 'DOG' },


  ];


  activeCategory: string = 'NEW ARRVS'; // valeur par défaut

  get filteredProducts() {
    if (this.activeCategory === 'NEW ARRVS') {
      return this.products; // ou filtrer par date si tu veux
    }
    return this.products.filter(p => p.category === this.activeCategory);
  }

  setCategory(category: string) {
    this.activeCategory = category;
  }



  ngOnInit() {
    const cld = new Cloudinary({
      cloud:{
        cloudName:'du1rqxwmr',
      },
    })

    this.products[0].image=cld.image('nf4xlq27ootpu3ukj8gt').resize(fill().width(508).height(681)).toURL();
    this.products[1].image=cld.image('ic5aet7ilrdbqfsgly7e').resize(fill().width(508).height(670)).toURL();
    this.products[2].image=cld.image('xkelrojnxplgglldc8hd').resize(fill().width(493).height(664)).toURL();
    this.products[3].image=cld.image('ujg3yr5acx06f9n46vze').resize(fill().width(676).height(649)).toURL();
    this.products[4].image=cld.image('gmov7efxjiauvohtbyw0').resize(fill().width(414).height(670)).toURL();
    this.products[5].image=cld.image('ekg6eipy8aff4dm0dlo2').resize(fill().width(430).height(660)).toURL();
    this.products[6].image=cld.image('ub4rcueldvygrmkitgl9').resize(fill().width(433).height(660)).toURL();
    this.products[7].image=cld.image('xc2qwczqbpp7tfdhrb8u').resize(fill().width(487).height(657)).toURL();
    this.products[8].image=cld.image('w9vjtzpdflivck7g7z8q').resize(fill().width(490).height(657)).toURL();
    this.products[9].image=cld.image('rvf7qxqfaberjvxmtsrp').resize(fill().width(1100).height(1151)).toURL();
    this.products[10].image=cld.image('knltezjpmmsy0lk0vnwx').resize(fill().width(699).height(652)).toURL();
    this.products[11].image=cld.image('zarglkdvcsyknh5ckha2').resize(fill().width(670).height(664)).toURL();

  }

}

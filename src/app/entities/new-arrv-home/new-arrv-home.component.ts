import {NgFor, NgOptimizedImage} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {fill} from "@cloudinary/url-gen/actions/resize";
import {  CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary } from '@cloudinary/url-gen/index';
import { ProduitModel } from '../../models/produit.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-arrv-home',
  standalone: true,
  imports: [NgFor, CommonModule, NgOptimizedImage],
  providers:[CloudinaryModule],
  templateUrl: './new-arrv-home.component.html',
  styleUrl: './new-arrv-home.component.css'
})
export class NewArrvHomeComponent implements OnInit {
  products: ProduitModel[] = [
    { id: 1, title: 'The Honest Kitchen Whole Food Clusters Whole Grain Chicken & Oat Dry Dog Food', price: 27.43, image: '', description: 'Chicken, oats, barley, chicken liver, carrots, eggs, ground flaxseed, broccoli, pumpkin, apples, natural chicken flavor, coconut oil, kale, chia seed, salmon oil, minerals [tricalcium phosphate, sodium chloride, potassium chloride, iron amino acid chelate, copper amino acid chelate, manganese amino acid chelate, zinc amino acid chelate, sodium selenite], fenugreek seed, dried kelp, taurine, L-carnitine, vitamins [vitamin A supplement, vitamin D3 supplement, vitamin E supplement, niacin supplement, folic acid, thiamine mononitrate (vitamin B1), riboflavin (vitamin B2), calcium pantothenate (vitamin B5), pyridoxine hydrochloride (vitamin B6), vitamin B12 supplement, choline chloride ], mixed tocopherols (a natural preservative), turmeric, dried bacillus coagulans fermentation product, rosemary extract.', si1: '', si2: '', si3: '', si4: '',category:'food dog' },
    { id: 11,category:'toys dog', title: 'Nylabone Customer Favorites Power Chew Toy Bundle for Dogs, Indestructible Dog Toys for Aggressive Chewers, Pack of 3 Dog Toys, Flavor Medley', price: 28.66, image: '', description: 'This Nylabone Dog Toy Bundle includes three of their most popular chew toys, built with durable material to withstand even the toughest chewers. Designed for large dogs over 50 pounds, the set features a textured chew ring, an ergonomic wishbone for easy holding, and engaging shapes to keep your pup entertained. Each toy is infused with irresistible flavors like beef, bison, and peanut butter, and includes ridges and nubs that help clean teeth as your dog chews. Perfect for keeping dogs busy, supporting dental health, and satisfying natural chewing instincts, these toys are made with love and purpose to keep your dog happy and healthy. ', si1: '', si2: '', si3: '', si4: '' },
    { id: 24,category:'dog', title: 'Purina Pro Plan Veterinary Supplements Calming Care - Calming Dog Supplements - 30 ct. Box', price: 0, image: '', description: 'Purina Calming Care is the #1 veterinarian-recommended probiotic supplement for dogs (Kantar Veterinary Tracker, 2021), designed to support calm behavior in anxious pets. This calming powder helps reduce signs of stress like excessive barking, jumping, pacing, and spinning. It aids dogs in coping with stressors such as separation, unfamiliar visitors, loud noises, or changes in routine. Formulated with beneficial probiotics, it also promotes a healthy emotional state, supports immune health, and helps maintain positive cardiac activity during stressful situations—making it an ideal daily supplement for overall well-being.', si1: '', si2: '', si3: '', si4: '' },
    { id: 36,category:'dog', title: 'Turtleneck Knitted Knitwear for Pet,Easy On Doggie Sweatshirt Dog Sweater', price: 34.99, image: '', description: 'This cozy turtleneck dog sweater is made from soft, stretchable acrylic yarn to keep pets of all sizes warm and comfortable in cold weather. Designed with sleeves and a high belly cut for easy potty breaks, the pullover style makes it simple to put on and take off. The snug fit wraps the neck, chest, and belly for full warmth, while the neutral solid color adds a classic, stylish look suitable for male and female dogs. Perfect for holidays or daily wear, it’s great for all occasions—birthdays, Christmas, Halloween, or just everyday warmth. Available in multiple sizes and colors to fit small to extra-large breeds, including Dobermans and Rottweilers.', si1: '', si2: '', si3: '', si4: '' },
    { id: 49,category:'foodmmm', title: 'Royal Canin Indoor Adult Dry Cat Food, 15 lb bag', price: 67.99, image: '', description: 'This dog food formula features chicken meal as the primary protein, combined with wholesome grains like brown rice, corn, and rice for balanced energy. It includes chicken fat for flavor and essential fatty acids, along with pea fiber and beet pulp for healthy digestion. Enriched with anchovy oil for omega-3s, dried egg product, and key vitamins like A, C, D, and E, it supports immune health and overall wellness. Additional nutrients like taurine and L-carnitine promote heart and muscle health, while natural preservatives and rosemary extract ensure freshness. Suitable for dogs of all sizes and breeds.', si1: '', si2: '', si3: '', si4: '' },
    { id: 61,category:'toys', title: 'Potaroma Smart Sensor Cat Laser Toys Interactive, Motion Activated Truly Random Trjajectory, Clamp Design, Automatic Chargeable Kitten Toy Indoor Exercise', price: 16.99, image: '', description: 'This cat laser toy features the first truly random trajectory using a built-in specular reflection mechanism that mimics real prey movement, keeping cats entertained and stimulating their hunting instincts. It offers motion-activated play, running for 5 minutes when pet activity is detected, then entering standby or powering off when inactive. With multiple modes like sensing and timer, and adjustable speed and range via tilt, it suits all activity levels. The dual-clamp design prevents knock-overs and allows secure attachment to chairs, doors, and more. Its energy-efficient design, using mirror adjustments instead of motors, extends battery life to 5–10 days per charge, and it can be used while charging for non-stop fun.', si1: '', si2: '', si3: '', si4: '' },
    { id: 72,category:'cat', title: 'Advantage II Large Cat Vet-Recommended Flea Treatment & Prevention | Cats Over 9 lbs. | 2-Month Supply', price: 33.58, image: '', description: 'Advantage II for Large Cats is a vet-recommended, fragrance-free topical flea treatment for cats over 9 lbs. and 8 weeks old. This easy-to-apply, waterproof formula requires no prescription and provides total protection by killing adult fleas, larvae, and eggs on contact. It begins working within 12 hours and offers continuous flea control for up to 30 days, with no need for pills or messy applications.', si1: '', si2: '', si3: '', si4: '' },
    { id: 82,category:'cat', title: 'T\'CHAQUE Sticky Hair Cat Clothes, Soft Cat Onesie Pajamas Long Sleeve Prevent Lost Hair, Kitten Surgery Recovery Suit, Anti-Shedding Shirt Outfit, Kitten Sweaters for Male & Female', price: 25.39, image: '', description: 'This long-sleeved cat onesie, made from professional hair-sticking material, helps catch shedding hair during seasonal changes, saving time on cleaning fur from clothes, furniture, and carpets. Designed for all pet sizes and available in various colors, it provides full coverage to reduce shedding while keeping cats comfortable and free to move. Ideal for use as indoor wear or pajamas, it keeps both your cat and home cleaner with less effort.', si1: '', si2: '', si3: '', si4: '' },
    { id: 82,category:'cat', title: 'T\'CHAQUE Sticky Hair Cat Clothes, Soft Cat Onesie Pajamas Long Sleeve Prevent Lost Hair, Kitten Surgery Recovery Suit, Anti-Shedding Shirt Outfit, Kitten Sweaters for Male & Female', price: 25.39, image: '', description: 'This long-sleeved cat onesie, made from professional hair-sticking material, helps catch shedding hair during seasonal changes, saving time on cleaning fur from clothes, furniture, and carpets. Designed for all pet sizes and available in various colors, it provides full coverage to reduce shedding while keeping cats comfortable and free to move. Ideal for use as indoor wear or pajamas, it keeps both your cat and home cleaner with less effort.', si1: '', si2: '', si3: '', si4: '' },
    { id: 83,category:'cat', title: 'Cat Suit for After Surgery, Anti Licking Breathable Cat Outfits for Female Cats Neuter Recovery Suit Male E-Collar Alternative Kitten Onesie for Cats Abdominal Wounds Or Skin Diseases', price: 6.49, image: '', description: 'This soft, breathable cat onesie is ideal for all pet sizes and colors, offering a comfortable alternative to cones after surgery. It helps reduce anxiety, supports healing from wounds or weaning, and prevents licking of incisions, making recovery easier. Designed with adjustable neckbands and stretchy straps for a snug fit, it allows your cat to move, eat, and use the litter box normally. Fun patterns keep your pet stylish while healing. Easy to wash and reusable, it’s a thoughtful and practical recovery suit for both male and female cats.', si1: '', si2: '', si3: '', si4: '' },

    { id: 72,category:'cat', title: 'Advantage II Large Cat Vet-Recommended Flea Treatment & Prevention | Cats Over 9 lbs. | 2-Month Supply', price: 33.58, image: '', description: 'Advantage II for Large Cats is a vet-recommended, fragrance-free topical flea treatment for cats over 9 lbs. and 8 weeks old. This easy-to-apply, waterproof formula requires no prescription and provides total protection by killing adult fleas, larvae, and eggs on contact. It begins working within 12 hours and offers continuous flea control for up to 30 days, with no need for pills or messy applications.', si1: '', si2: '', si3: '', si4: '' },
    { id: 73,category:'cat', title: 'Flea and Tick Prevention for Cats, 200 Soft Chews for Fleas Treatment for Cats, Natural Cat Oral Flea Chewables Support Supplement, Flea and Tick Chews for All Breeds & Sizes', price: 0, image: '', description: 'This natural flea treatment for cats comes in soft chews made with gentle, effective ingredients like coconut oil, flaxseed, and brewer’s yeast, offering flea, tick, and mosquito defense without harsh chemicals. Each bottle contains 200 chews, providing up to three months of protection while supporting your cat’s skin, coat, and immune health. Enriched with fish oil and B vitamins, the chews reduce itching and promote a shiny coat. Suitable for all breeds and ages, they offer a mess-free alternative to sprays or drops—just serve as a treat or mix into food for easy, consistent protection.', si1: '', si2: '', si3: '', si4: '' },
    

    { id: 61,category:'cat', title: 'Potaroma Smart Sensor Cat Laser Toys Interactive, Motion Activated Truly Random Trjajectory, Clamp Design, Automatic Chargeable Kitten Toy Indoor Exercise', price: 16.99, image: '', description: 'This cat laser toy features the first truly random trajectory using a built-in specular reflection mechanism that mimics real prey movement, keeping cats entertained and stimulating their hunting instincts. It offers motion-activated play, running for 5 minutes when pet activity is detected, then entering standby or powering off when inactive. With multiple modes like sensing and timer, and adjustable speed and range via tilt, it suits all activity levels. The dual-clamp design prevents knock-overs and allows secure attachment to chairs, doors, and more. Its energy-efficient design, using mirror adjustments instead of motors, extends battery life to 5–10 days per charge, and it can be used while charging for non-stop fun.', si1: '', si2: '', si3: '', si4: '' },
    { id: 62,category:'cat', title: 'LUCKITTY Geometric Straight Cat Tunnel with Plush Inside,Cats Toys Collapsible Tunnel Tube with Balls, for Rabbits, Kittens, Ferrets,Puppy, Diameter 9.8 Inch', price: 19.90, image: '', description: 'This cat tunnel features a soft flannel interior for comfort and a waterproof, durable oxford cloth exterior for long-lasting use. Measuring 47.2 inches in length and 9.8 inches in diameter, it offers ample space for big cats to move freely. The strong, sprung steel frame ensures the tunnel pops out and retracts easily for quick setup and compact storage. Designed for both fun and functionality, it provides a cozy hideout and play area for cats of all sizes, combining comfort, durability, and portability in one.', si1: '', si2: '', si3: '', si4: '' },
   

    { id: 49,category:'cat', title: 'Royal Canin Indoor Adult Dry Cat Food, 15 lb bag', price: 67.99, image: '', description: 'This dog food formula features chicken meal as the primary protein, combined with wholesome grains like brown rice, corn, and rice for balanced energy. It includes chicken fat for flavor and essential fatty acids, along with pea fiber and beet pulp for healthy digestion. Enriched with anchovy oil for omega-3s, dried egg product, and key vitamins like A, C, D, and E, it supports immune health and overall wellness. Additional nutrients like taurine and L-carnitine promote heart and muscle health, while natural preservatives and rosemary extract ensure freshness. Suitable for dogs of all sizes and breeds.', si1: '', si2: '', si3: '', si4: '' },
    { id: 50,category:'cat', title: 'Royal Canin Adult Feline Health Nutrition Instinctive Thin Slices in Gravy Canned Wet Cat Food', price: 26.18, image: '', description: 'Water sufficient for processing, pork by-products, chicken by-products, chicken liver, pork liver, salmon, wheat flour, wheat gluten, gelatin, pork plasma, powdered cellulose, natural flavors, modified corn starch, calcium sulfate, guar gum, potassium chloride, sodium tripolyphosphate, carrageenan, taurine, vitamins [DL-alpha tocopherol acetate (source of vitamin E), thiamine mononitrate (vitamin B1), niacin supplement, biotin, D-calcium pantothenate, pyridoxine hydrochloride (vitamin B6), riboflavin supplement, folic acid, vitamin B12 supplement, vitamin D3 supplement], trace minerals [zinc proteinate, zinc oxide, ferrous sulfate, copper sulfate, manganous oxide, sodium selenite, calcium iodate], choline chloride.', si1: '', si2: '', si3: '', si4: '' },
   
    


  ];
  navigateToProduit(produitId : number){debugger
    this.router.navigate(['/produit', produitId])
  }

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
  constructor(private router:Router){

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

import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import {fill} from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from '@cloudinary/url-gen/index';
import { Router } from '@angular/router';
import { ProduitModel } from '../../models/produit.model';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgFor, CommonModule],
  providers:[CloudinaryModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
constructor(private router:Router){}
  products: ProduitModel[] = [
    { id :1,title: 'The Honest Kitchen Whole Food Clusters Whole Grain Chicken & Oat Dry Dog Food, 5 lb Bag', price: 24.49, image: '',description:'',si1:'',si2:'', si3:'',si4:'',},
    {id :2, title: 'The Honest Kitchen Whole Food Clusters Grain Free Beef Dry Dog Food, 5 lb Bag', price: 29.99, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:3, title: 'The Honest Kitchen Whole Food Clusters Human Grade Dry Dog Food - Grain Free Turkey 5 lbs', price: 34.29, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:4, title: 'JustFoodForDogs Frozen Fresh Dog Food, Complete Meal or Dog Food Topper, Beef & Russet Potato Human Grade Dog Food Recipe, 18 oz (Pack of 7)', price:83.99, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:5, title: 'Blue Buffalo Life Protection Formula Adult Dry Dog Food, Helps Build and Maintain Strong Muscles, Made with Natural Ingredients, Beef & Brown Rice Recipe, 15-lb. Bag', price: 41.84, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:6, title: 'Blue Buffalo Life Protection Formula Adult Small Breed Dry Dog Food, Supports High Energy Needs, Made with Natural Ingredients, Chicken & Brown Rice Recipe, 15-lb Bag', price: 39.88, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:7, title: 'Royal Canin Size Health Nutrition Small Adult Dry Dog Food, 4 lb', price: 26.49, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:8, title: 'IAMS Minichunks Adult Dry Dog Food Lamb & Rice Recipe Dog Kibble, 30 lb. Bag', price: 46.98, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:9, title: 'IAMS Proactive Health Minichunks Adult Dry Dog Food with Real Chicken, 30 lb. Bag', price: 46.98, image: '' ,description:'',si1:'',si2:'', si3:'',si4:'',},
    {id:10, title: 'Nylabone Customer Favorites Power Chew Toy Bundle for Dogs, Indestructible Dog Toys for Aggressive Chewers, Pack of 3 Dog Toys, Flavor Medley, Large Dogs - Up to 50 lbs, 3 Pack', price: 25.00, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:11, title: 'Potaroma Dog Puzzle Toy 2 Levels, Slow Feeder, Pup Food Treat Feeding Dispenser for IQ Training and Entertainment for All Breeds 4.2 Inch Height', price: 23.69, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:12, title: 'WOOF Pupsicle - Long-Lasting Interactive Dog Toy to Keep Your Pup Distracted - Safe for Dogs - Low-Mess Design - Dog Toys for XL Dogs 75 lbs and Up', price: 24.99, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:13, title: 'Original Snuggle Puppy Toys - Heartbeat Puppy for Dogs - Dog Plush for Anxiety Relief, Calming Aid, and Comfort Toy for Behavioral Training in Biscuit', price: 39.95, image: '' ,description:'',si1:'',si2:'', si3:'',si4:'',},
    {id:14, title: 'Nylabone New Puppy Starter Kit, 2 Chew Toys and 1 Natural Treat for Puppies, Bacon & Chicken Flavor, Small - Up to 25 lbs, 3 Pack', price: 8.59, image: '' ,description:'',si1:'',si2:'', si3:'',si4:'',},
    {id:15, title: 'KIPRITII 25 Pack Various Puppy Dog Toys for Teething, Entertainment & Interaction, Puppy Chew Toys Pack with Rope Toys, Treat Balls and Dog Squeaky Toys for Puppy & Small Dogs', price: 15.98, image: '' ,description:'',si1:'',si2:'', si3:'',si4:'',},
    {id:16, title: 'Dog Interactive Treat Dispenser Toy, Food Puzzle Slow Feeder', price: 24.99, image: '' ,description:'',si1:'',si2:'', si3:'',si4:'',},
    {id:17, title: 'Interactive Dog Toys with Motion Activated, Squeaky Dog Toy Active Rolling Ball Wicked Ball for Daily Training', price: 25.99, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:18, title: 'Pawstruck Large 5-6” Filled Dog Bones Variety Pack - Peanut Butter, Cheese & Bacon, Beef Flavors - Made in USA, Long Lasting Stuffed Femur Treat for Aggressive Chewers - Pack of 3, Packaging May Vary', price: 20.27, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:19, title: 'Benebone Medium 4-Pack Dog Chew Toys for Aggressive Chewers, Made in USA, 60lbs and Under', price: 29.95, image: '' ,description:'',si1:'',si2:'', si3:'',si4:'',},
    {id:20, title: 'MON2SUN Dog Treats, Rawhide Twist Chicken Hide Sticks, Suitable for Puppy and Small Dogs, 5 Inch (Chicken, Pack of 40)', price: 18.90, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:21, title: 'BALANCE Orthopedic Dog Bed for Large Dogs, Comfortable Dog Sofa Beds with Removable Washable Cover & Waterproof Lining, Egg Crate Foam Dogs Couch for Pet Sleeping, Grey', price: 39.99, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:22, title: 'Purina Pro Plan Veterinary Supplements Calming Care - Calming Dog Supplements - 30 ct. Box', price: 30.99, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:23, title: 'Seresto Large Dog Vet-Recommended Flea & Tick Treatment & Prevention Collar for Dogs Over 18 lbs. | 8 Months Protection', price: 47.98, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:24, title: 'FRONTLINE Plus Flea and Tick Treatment for Large Dogs Up to 45 to 88 lbs. 3 Treatments', price: 39.98, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:25, title: 'FRONTLINE Plus Flea and Tick Treatment for Small Dogs Upto 5 to 22 lbs. 3 Treatments', price: 39.98, image: '' ,description:'',si1:'',si2:'', si3:'',si4:'',},
    {id:26, title: 'Flea and Tick Prevention for Dogs Chewables - 170 Treats - Natural Dog Flea and Tick Treatment Chewable Supplement - Oral Pills - All Breeds & Ages - Soft Chews - Made in USA', price: 23.97, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:27, title: 'Yaya Organics Tick Ban | Extra Strength Tick Repellent Made with Essential Oils and All Natural, DEET Free Ingredients | Proven Effective, Safe for Adults, Kids and Dogs | 4 Ounce 2 Pack', price: 21.99, image: '' ,description:'',si1:'',si2:'', si3:'',si4:'',},
    {id:28, title: 'PetArmor Plus Flea and Tick Prevention for Dogs, Dog Flea and Tick Treatment, 6 Doses, Waterproof Topical, Fast Acting, Large Dogs Dogs (45-88 lbs)', price: 39.93, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:29, title: 'Capstar(nitenpyram) for Dogs Fast-Acting Oral Flea Treatment for Dogs 2-25 lbs, Vet-Recommended Medication Tablets Start Killing in 30 Minutes, 6 Doses', price: 38.12, image: '' ,description:'',si1:'',si2:'', si3:'',si4:'',},
    {id:30, title: 'Activate II Flea and Tick Prevention for Dogs | 4 Count | Large Dogs 21-55 lbs | Topical Drops | 4 Months Flea Treatment', price: 26.97, image: '' ,description:'',si1:'',si2:'', si3:'',si4:'',},
    {id:31, title: 'Wondercide - Flea, Tick & Mosquito Spray for Pets and Home with Natural Essential Oils - Killer, Control, Prevention, Treatment - Lemongrass 16 oz', price: 26.99, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:32, title: 'Ear Mite Treatment For Dogs and Cats Over 12 Weeks, Kills Ear Mites On Contact, Relief For Dogs and Cats Suffering From Ear Mites, Soothing Aloe and Lanolin Formula .5 Fl Oz', price: 7.99, image: '' ,description:'',si1:'',si2:'', si3:'',si4:'',},
    {id:33, title: 'Pet MD - Dog Ear Cleaner Wipes - Otic Cleanser for Dogs to Stop Ear Itching, and Infections with Aloe and Eucalyptus - 100 Count', price: 11.99, image: '' ,description:'',si1:'',si2:'', si3:'',si4:'',},
    {id:34, title: 'IECOii Extra-Large Dog Sweater 4XL,Christmas Dog Sweaters for Extra Large Dogs Girl Boy,Turtleneck Knitted Knitwear for Pet,Easy On Doggie Sweatshirt Dog Sweater for Doberman,Great Dane(Green,XXXXL)', price: 27.19, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:35, title: 'PUPTECK Dog Hoodie Puppy Sweatshirt Warm Dog Sweater Winter Clothes Cold Weather Coats for Small Medium Large Dogs, Pink, M', price: 8.49, image: '' ,description:'',si1:'',si2:'', si3:'',si4:'',},
    {id:36, title: 'ROZKITCH Dog Winter Coat Soft Fleece Pullover Pajamas, Pet Windproof Warm Cold Weather Jacket Vest Cozy Jumpsuit Apparel Outfit Clothes for Small Medium Large Dog Walking Sleep Purple 2XL', price: 41.99, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:37, title: 'IECOii XXL Dog Sweater,Knit Big Dog Sweater Christmas,Pet Turtleneck Doggy Sweatshirt for Extra Large Dogs boy Girl,Large Size Dog Cold Weather Outfit English Bulldog Clothes for Winter,(Red XXL)', price: 24.64, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:38, title: 'Spark Paws Dog Cooling Vest - Summer Heat Relief, Lightweight, SPF 50 UV Sun Protection - Ice Blue, 4XL', price: 31.00, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:39, title: 'Dog Raincoat, Waterproof Dog Rain Coats for Large Dogs, Lightweight Rain Jacket, Adjustable 4 Legs Pet Poncho with Hood, Snow-Proof Dog Vest Rainwear, Rain Clothes Apparel with Leash Hole', price: 22.09, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:40, title: 'ROZKITCH Dog Winter Coat Soft Fleece Pullover Pajamas, Pet Windproof Warm Cold Weather Jacket Vest Cozy Jumpsuit Apparel Outfit Clothes for Small Medium Large Dog Walking Hiking Sleep Blue M', price: 29.74, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:41, title: 'TONY HOBY Female/Male Pet Dog Pajamas Stripes 4 Legged Dog pjs Jumpsuit Soft Cotton Dogs Clothes (M, Pink+White-Girls)', price: 18.99, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:42, title: 'Warm Dog Winter Clothes Cute Fruit Dog Coat Hoodies Fleece Pet Dogs Costume Jacket for French Bulldog Chihuahua Ropa para Perro(Green,XS)', price: 9.89, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:43, title: 'Tomkas Small Dog Sling Carrier - Classic Pocket & Classic Strap - for 3-10 lbs Pets(Grey)', price: 11.99, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:44, title: 'Outward Hound Granby Splash Orange Dog Life Jacket, XS', price: 15.99, image: '' ,description:'',si1:'',si2:'', si3:'',si4:'',},
    {id:45, title: '3 Pieces Pet Dog Hawaiian Costume, Includes Puppy Cool T-Shirts Summer Clothes, Funny Cute Dog Retro Fashion Sunglasses and a Colorful Wreath for Small to Medium pet(Green Series)', price: 8.99, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:46, title: 'Jecikelon Winter Dog Hoodie Sweatshirts with Pockets Warm Dog Clothes for Small Dogs Chihuahua Coat Clothing Puppy Cat Custume (X-Small, Coffee)', price: 9.99, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:47, title: '', price: 7.99, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },
    {id:48, title: '', price: 7.99, image: '',description:'',si1:'',si2:'', si3:'',si4:'', },

   
];

  paginatedProducts: {
   id: number; title: string; price: number; image: string ; 
    }[] = [];
  productsPerPage = 12;
  currentPage = 1;
  totalPages = 1;
  totalItems = 9;
  img!:any;

  
  ngOnInit() {
    
    this.totalPages = Math.ceil(this.products.length / this.productsPerPage);
    this.updatePaginatedProducts();
     
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
    this.products[12].image=cld.image('evx5rsjrc72nmsoqve7l').resize(fill().width(1392).height(504)).toURL();
    this.products[13].image=cld.image('mshehvzjujcsontkoguj').resize(fill().width(592).height(649)).toURL();
    this.products[14].image=cld.image('lzrqdnw7sgfjlpvmetai').resize(fill().width(700).height(676)).toURL();
    this.products[15].image=cld.image('zhnteugrdije01du9nio').resize(fill().width(658).height(661)).toURL();
    this.products[16].image=cld.image('hjyeyb51xw1tmjpibdkk').resize(fill().width(675).height(651)).toURL();
    this.products[17].image=cld.image('ex4efbabi8qib6o7pjyf').resize(fill().width(589).height(640)).toURL();
    this.products[18].image=cld.image('o8xgle7ymcep6fxpisb9').resize(fill().width(498).height(649)).toURL();
    this.products[19].image=cld.image('q2hnnp2yqzenuy57go9u').resize(fill().width(879).height(664)).toURL();
    this.products[20].image=cld.image('izweyy1qzbynmtvdglkv').resize(fill().width(667).height(646)).toURL();
    this.products[21].image=cld.image('idpuk7ezp7yws7aw9drh').resize(fill().width(633).height(688)).toURL();
    this.products[22].image=cld.image('ahpj9uwe0lglntg5frah').resize(fill().width(730).height(660)).toURL();
    this.products[23].image=cld.image('iniuyqctcngjhkddg2to').resize(fill().width(883).height(660)).toURL();
    this.products[24].image=cld.image('rws18paletuoh0cf0eyv').resize(fill().width(898).height(655)).toURL();
    this.products[25].image=cld.image('tftotsqho297azg12xya').resize(fill().width(648).height(669)).toURL();
    this.products[26].image=cld.image('jdmotl5xgucshumeg77h').resize(fill().width(391).height(667)).toURL();
    this.products[27].image=cld.image('nfckbskbkihmz0psqxkw').resize(fill().width(883).height(666)).toURL();
    this.products[28].image=cld.image('qhbwmlhrda8pxlf2xmsf').resize(fill().width(1029).height(664)).toURL();
    this.products[29].image=cld.image('jb46xbqw8nwbj72nvt4b').resize(fill().width(547).height(663)).toURL();
    this.products[30].image=cld.image('datwh2ysfwxtgnunxpal').resize(fill().width(424).height(663)).toURL();
    this.products[31].image=cld.image('wiebrjyckzk8gzzi8bvu').resize(fill().width(343).height(660)).toURL();
    this.products[32].image=cld.image('qbr6hyuavlrxensoluxt').resize(fill().width(661).height(666)).toURL();
    this.products[33].image=cld.image('tafsrphm9fmifmvsqfre').resize(fill().width(636).height(655)).toURL();
    this.products[34].image=cld.image('sualonexjghc2bn6f0ex').resize(fill().width(463).height(664)).toURL();
    this.products[35].image=cld.image('akbht4mml4axafoltqid').resize(fill().width(649).height(654)).toURL();
    this.products[36].image=cld.image('mu7jtrzuzka5ukj9gv3t').resize(fill().width(673).height(664)).toURL();
    this.products[37].image=cld.image('j8duzldjubeyzd0nmxk9').resize(fill().width(592).height(661)).toURL();
    this.products[38].image=cld.image('afu5jut97yorghlveylp').resize(fill().width(631).height(658)).toURL();
    this.products[39].image=cld.image('uc1kop3mmllttzr6h4gu').resize(fill().width(682).height(663)).toURL();
    this.products[40].image=cld.image('ykoydhimqvehcvb9red8').resize(fill().width(693).height(693)).toURL();
    this.products[41].image=cld.image('s0ncecnl3sycji5wtqlc').resize(fill().width(664).height(643)).toURL();
    this.products[42].image=cld.image('n3vbe9b9mkxppdtjznxu').resize(fill().width(501).height(652)).toURL();
    this.products[43].image=cld.image('b7x6tx5y2nyfucqtbsmm').resize(fill().width(1246).height(660)).toURL();
    this.products[44].image=cld.image('v9vqnv3abmdtxjnyvoky').resize(fill().width(736).height(687)).toURL();
    this.products[45].image=cld.image('dusou8s2yxohkmg4lads').resize(fill().width(568).height(676)).toURL();
    this.products[46].image=cld.image('').resize(fill().width(1550).height(1700)).toURL();
    this.products[47].image=cld.image('').resize(fill().width(1550).height(1700)).toURL();
    this.products[48].image=cld.image('').resize(fill().width(1550).height(1700)).toURL();
  }

  updatePaginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    this.paginatedProducts = this.products.slice(startIndex, startIndex + this.productsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedProducts();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedProducts();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedProducts();
    }
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  navigateToProduit(produitId : number){
    this.router.navigate(['/produit', produitId])
  }
}

import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import {fill} from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from '@cloudinary/url-gen/index';
import { Router } from '@angular/router';
import { ProduitModel } from '../../models/produit.model';
import { ProductService } from '../../service/product.service';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgFor, CommonModule],
  providers:[CloudinaryModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
constructor(private router:Router, private produitservice:ProductService){
  this.products=this.produitservice.productLIst();
}
  products: ProduitModel[] = [
   

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
    // food dog // food dog// food dog// food dog// food dog// food dog// food dog
    this.products[0].image=cld.image('oo2xgkm5la2qckikjz09').toURL();
    this.products[1].image=cld.image('xwhf4gpjz4otunhoisoe').toURL();
    this.products[2].image=cld.image('kejqdlslfmqdhvzsnuef').toURL();
    this.products[3].image=cld.image('pggznqdopjbfhotxqjkj').toURL();
    this.products[4].image=cld.image('mkiyyqzadikggyixidrp').toURL();
    this.products[5].image=cld.image('bj5slzioc4dkdplzyors').toURL();
    this.products[6].image=cld.image('olletxflxa6kinbufwnc').toURL();
    this.products[7].image=cld.image('usrzfdxkaxeusrzteytu').toURL();
    this.products[8].image=cld.image('t465rznnpsrdjgroxfqc').toURL();
    this.products[9].image=cld.image('ljaaxigxmpkhdlhppezo').toURL();

    // toys dog // toys dog// toys dog// toys dog// toys dog// toys dog// toys dog// toys dog// toys dog// toys dog// toys dog// toys dog
    this.products[10].image=cld.image('jqzjmwfxoe7gnreullx7').toURL();
    this.products[11].image=cld.image('shle3pns7joanhlngnz8').toURL();
    this.products[12].image=cld.image('xoepfbkthipdtla9h2cm').toURL();
    this.products[13].image=cld.image('frupcnmqddmhs6zlj4rc').toURL();
    this.products[14].image=cld.image('i1jr9ttfwq0mf9xqglr7').toURL();
    this.products[15].image=cld.image('byoyt02otkb4fywin0v2').toURL();
    this.products[16].image=cld.image('cognxybgakkyoftgfokd').toURL();
    this.products[17].image=cld.image('ghxie3t4awtqlsvskqar').toURL();
    this.products[18].image=cld.image('vm4jtkhrbay5p9v1vddl').toURL();
    this.products[19].image=cld.image('glkfyivhkqhexj7xkwle').toURL();
    this.products[20].image=cld.image('kg5yicn8qpndoxumomyz').toURL();
    this.products[21].image=cld.image('k1rutzx1tnmocot4nwnd').toURL();
    this.products[22].image=cld.image('rp0wjbwfbruzhxrbmwzu').toURL();
    //health and suppllies dog //health and suppllies dog //health and suppllies dog //health and suppllies dog
    this.products[23].image=cld.image('nnui7jlrtlxe7is0aymo').toURL();
    this.products[24].image=cld.image('rvqqofpmzhhvulvljy81').toURL();
    this.products[25].image=cld.image('cznpdjkpiunwvfnqtash').toURL();
    this.products[26].image=cld.image('dvdemvdllo4mcc8ixspx').toURL();
    this.products[27].image=cld.image('tfseuvwgwk9kpdb5cqyv').toURL();
    this.products[28].image=cld.image('zjplzimcbjksmmfhguss').toURL();
    this.products[29].image=cld.image('bosmmj1d4xjgavzefso2').toURL();
    this.products[30].image=cld.image('jg04kwv75zmpcwehv3xy').toURL();
    this.products[31].image=cld.image('qdkaguqv6ezz81y9u9d9').toURL();
    this.products[32].image=cld.image('mt8ehmsmytw8mfficgis').toURL();
    this.products[33].image=cld.image('thnd0pcwkvxxh3bgg9re').toURL();
    this.products[34].image=cld.image('gm60rkpg8e2t9gu2cnnj').toURL();
    // clothes dog // clothes dog// clothes dog // clothes dog // clothes dog // clothes dog // clothes dog // clothes dog // clothes dog // clothes dog
    this.products[35].image=cld.image('hl6ef2jmmijot4ns3xci').toURL();
    this.products[36].image=cld.image('n2q0uostu5a0np7df8m5').toURL();
    this.products[37].image=cld.image('no2tvgnnb9aqojr6xhyl').toURL();
    this.products[38].image=cld.image('yuzjeg9o4n6yfvyggkps').toURL();
    this.products[39].image=cld.image('dw62tvcvqqh7lta4xy6w').toURL();
    this.products[40].image=cld.image('q27aej7e1phwskzrgv9w').toURL();
    this.products[41].image=cld.image('vkx0cxwqnrsksnqry9xb').toURL();
    this.products[42].image=cld.image('ybf9r6d0kju8arfzh0y6').toURL();
    this.products[43].image=cld.image('tqpyywqqlr1asq2st5gt').toURL();
    this.products[44].image=cld.image('cspuyesdide4p6px1zvf').toURL();
    this.products[45].image=cld.image('hg0aokad4rmr7h8cvj1t').toURL();
    this.products[46].image=cld.image('c38l0ibwooyizbkb5vmj').toURL();
    this.products[47].image=cld.image('jyhfa74k3oaegmb0crfo').toURL();
    // cat food// cat food// cat food// cat food// cat food// cat food// cat food// cat food// cat food// cat food
    this.products[48].image=cld.image('tvmat5uyulwchperr6ne').toURL();
    this.products[49].image=cld.image('vg2iqo7ryx6dalzuko4m').toURL();
    this.products[50].image=cld.image('ccoyhhltmxjxintttlf1').toURL();
    this.products[51].image=cld.image('uom9c1duygult2el6bng').toURL();
    this.products[52].image=cld.image('goilyarqaki7j3u6gplb').toURL();
    this.products[53].image=cld.image('oji2bl1tsefapkxjjuc6').toURL();
    this.products[54].image=cld.image('ozvwcw7zapomkc7k5wkl').toURL();
    this.products[55].image=cld.image('jar1syqyftg4lyho9hvu').toURL();
    this.products[56].image=cld.image('nnbrifrccgitbv3ihrj3').toURL();
    this.products[57].image=cld.image('la43qwnexg3vumaaj1zy').toURL();
    this.products[58].image=cld.image('cbiifnrhuypai10plron').toURL();
    this.products[59].image=cld.image('cswz9jio0pfiifsanrlv').toURL();
    //cat toys//cat toys//cat toys//cat toys//cat toys//cat toys//cat toys//cat toys//cat toys//cat toys//cat toys
    this.products[60].image=cld.image('tcrdnv1c2q3z4idqc2vn').toURL();
    this.products[61].image=cld.image('yhdt12jiz9okanblisae').toURL();
    this.products[62].image=cld.image('csskwrkhoylaoocwab62').toURL();
    this.products[63].image=cld.image('eksrx2cvty9pqncxm5kn').toURL();
    this.products[64].image=cld.image('shmv1r3owvjk9hc1iulh').toURL();
    this.products[65].image=cld.image('rf3jsune3qxceunytv2w').toURL();
    this.products[66].image=cld.image('tabv84iq03i9fvpwncre').toURL();
    this.products[67].image=cld.image('kly5mxzxjviosusxgm5b').toURL();
    this.products[68].image=cld.image('x7rpwbhfimpdmk7nkrgn').toURL();
    this.products[69].image=cld.image('knyvhyhwx4owmb1rsusu').toURL();
    this.products[70].image=cld.image('hrm29hsu9qdh8fdiao51').toURL();
    //health and supplies cat//health and supplies cat//health and supplies cat//health and supplies cat//health and supplies cat//health and supplies cat

    this.products[71].image=cld.image('ybg3vmxzp5f0gxsnuzw5').toURL();
    this.products[72].image=cld.image('nd9dpjpwmujnl01s5ry5').toURL();
    this.products[73].image=cld.image('qpcazoxsemubsx3vata0').toURL();
    this.products[74].image=cld.image('rzwmaaabkpbsn5cpn1yk').toURL();
    this.products[75].image=cld.image('jijmbmka1enyndxp7pkp').toURL();
    this.products[76].image=cld.image('xxob1i8ul9uamo4soytg').toURL();
    this.products[77].image=cld.image('blnd94dp822gxc4x3oz8').toURL();
    this.products[78].image=cld.image('ad0vsdg0dq5wrnkgqxpy').toURL();
    this.products[79].image=cld.image('hrwt18t4pydp3xryzjqn').toURL();
    this.products[80].image=cld.image('rkiz176z8jgswfwzkicc').toURL();
    //clothes cat//clothes cat//clothes cat//clothes cat//clothes cat//clothes cat//clothes cat//clothes cat
    this.products[81].image=cld.image('jumbqrk9o1xtoa74wgqe').toURL();
    this.products[82].image=cld.image('o5xm9nz9dcrx4xnapesf').toURL();
    this.products[83].image=cld.image('kuspk2gm0rxpauoprm2x').toURL();
    this.products[84].image=cld.image('chlpx6nhtjdifjnqxjzh').toURL();
    this.products[85].image=cld.image('rzxgqf7r9gepuzsuaoir').toURL();
    this.products[86].image=cld.image('jwb80bn2ucbphn3gjiln').toURL();
    this.products[87].image=cld.image('blv3xpjmvxpkugvwbgv4').toURL();
    this.products[88].image=cld.image('pa2gld3igchabvlbawnn').toURL();
    this.products[89].image=cld.image('cw8efcgwfwaloyisytue').toURL();
    this.products[90].image=cld.image('dkx1t9aba7sglynvem5d').toURL();
    this.products[91].image=cld.image('mbszpbxbpnelbtbhzlyx').toURL();
    this.products[92].image=cld.image('ofvsxs1qjkimlzireo9x').toURL();





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

  navigateToProduit(produitId : number){debugger
    this.router.navigate(['/produit', produitId])
  }
}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from '@cloudinary/url-gen/index';
import { ActivatedRoute, Router } from '@angular/router';
import {CommonModule, NgIf} from '@angular/common';
import { ProduitModel } from '../../models/produit.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [NgIf,CommonModule],
  providers: [CloudinaryModule],
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  productId!: number;
  productDetails: any;
  
  products: ProduitModel[] = [
      ];





  constructor(private route: ActivatedRoute, private router: Router ,private produitservice : ProductService){
    this.products=this.produitservice.productLIst();
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.loadProductDetails();
    });
    this.initializeProductImages();
  }

  initializeProductImages() {
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'du1rqxwmr',
      },
    });

    const imageNames = [
      // Images principales
      // food dog // food dog // food dog
      'oo2xgkm5la2qckikjz09', // Produit 1
      'xwhf4gpjz4otunhoisoe', // Produit 2
      'kejqdlslfmqdhvzsnuef', // Produit 3
      'pggznqdopjbfhotxqjkj', // Produit 4
      'mkiyyqzadikggyixidrp', // Produit 5
      'bj5slzioc4dkdplzyors', // Produit 6
      'olletxflxa6kinbufwnc', // Produit 7
      'usrzfdxkaxeusrzteytu', // Produit 8
      't465rznnpsrdjgroxfqc', // Produit 9
      'ljaaxigxmpkhdlhppezo', // Produit 10

      // dog toys // dog toys // dog toys
      'jqzjmwfxoe7gnreullx7', // Produit 1
      'shle3pns7joanhlngnz8', // Produit 2
      'xoepfbkthipdtla9h2cm',
      'elnukhtefemz7ciojy40',
      'i1jr9ttfwq0mf9xqglr7',
      'byoyt02otkb4fywin0v2',
      'cognxybgakkyoftgfokd',
      'ghxie3t4awtqlsvskqar',
      'vm4jtkhrbay5p9v1vddl',
      'glkfyivhkqhexj7xkwle',
      'kg5yicn8qpndoxumomyz',
      'k1rutzx1tnmocot4nwnd',
      'rp0wjbwfbruzhxrbmwzu',

      //health and suppllies dog //health and suppllies dog //
      'nnui7jlrtlxe7is0aymo', // Produit 1
      'rvqqofpmzhhvulvljy81',
      'cznpdjkpiunwvfnqtash',
      'dvdemvdllo4mcc8ixspx',
      'tfseuvwgwk9kpdb5cqyv',
      'zjplzimcbjksmmfhguss',
      'bosmmj1d4xjgavzefso2',
      'jg04kwv75zmpcwehv3xy',
      'qdkaguqv6ezz81y9u9d9',
      'mt8ehmsmytw8mfficgis',
      'thnd0pcwkvxxh3bgg9re',
      'gm60rkpg8e2t9gu2cnnj',
      //clothes dog//clothes dog//clothes dog//clothes dog//clothes dog
      'hl6ef2jmmijot4ns3xci',
      'lmc4wdgh3orp17malwxu',
      'z7f9zi4nc2acmberabgg',
      'yuzjeg9o4n6yfvyggkps',
      'ifw6ii1oc6bxfhdlxf3x',
      'wrngeoknmz3pwyoo1nnu',
      'vkx0cxwqnrsksnqry9xb',
      'ybf9r6d0kju8arfzh0y6',
      'tqpyywqqlr1asq2st5gt',
      'cspuyesdide4p6px1zvf',
      'wgwjga9mjrltyyd0oqho',
      'c38l0ibwooyizbkb5vmj',
      'jyhfa74k3oaegmb0crfo',
      // cat food// cat food// cat food// cat food// cat food// cat food// cat food
      'tvmat5uyulwchperr6ne',
      'vg2iqo7ryx6dalzuko4m',
      'ccoyhhltmxjxintttlf1',
      'uom9c1duygult2el6bng',
      'dgymao8c7ezu1xgrovs9',
      'oji2bl1tsefapkxjjuc6',
      'xohj8m91klaxskbmtqoo',
      'xutdyghki8zzrds8apat',
      'bkqetp5y2kgxuryo5009',
      'la43qwnexg3vumaaj1zy',
      'cbiifnrhuypai10plron',
      'cswz9jio0pfiifsanrlv',
      //cat toys//cat toys//cat toys//cat toys//cat toys//cat toys//cat toys//cat toys
      'tcrdnv1c2q3z4idqc2vn',
      'yhdt12jiz9okanblisae',
      'csskwrkhoylaoocwab62',
      'eksrx2cvty9pqncxm5kn',
      'shmv1r3owvjk9hc1iulh',
      'rf3jsune3qxceunytv2w',
      'tabv84iq03i9fvpwncre',
      'kly5mxzxjviosusxgm5b',
      'yb6eaxzqfz7mvuecr226',
      'knyvhyhwx4owmb1rsusu',
      'hrm29hsu9qdh8fdiao51',
      //health and supplies cat//health and supplies cat//health and supplies cat//health and supplies cat//health and supplies cat//health and supplies cat
      'ybg3vmxzp5f0gxsnuzw5',
      'nd9dpjpwmujnl01s5ry5',
      'qpcazoxsemubsx3vata0',
      'rzwmaaabkpbsn5cpn1yk',
      'jijmbmka1enyndxp7pkp',
      'xxob1i8ul9uamo4soytg',
      'blnd94dp822gxc4x3oz8',
      'ad0vsdg0dq5wrnkgqxpy',
      'hrwt18t4pydp3xryzjqn',
      'rkiz176z8jgswfwzkicc',
      //clothes cat//clothes cat//clothes cat//clothes cat//clothes cat//clothes cat//clothes cat//clothes cat
      'jumbqrk9o1xtoa74wgqe',
      'o5xm9nz9dcrx4xnapesf',
      'kuspk2gm0rxpauoprm2x',
      'chlpx6nhtjdifjnqxjzh',
      'rzxgqf7r9gepuzsuaoir',
      'zozhbtbjahrqv20zulg2',
      'blv3xpjmvxpkugvwbgv4',
      'pa2gld3igchabvlbawnn',
      'knahzdl0rlqfz20yzaig',
      'dkx1t9aba7sglynvem5d',
      'mbszpbxbpnelbtbhzlyx',
      'ofvsxs1qjkimlzireo9x',




      // food dog // food dog // food dog // food dog // food dog // food dog// food dog // food dog // food dog// food dog // food dog // food dog
      // Images supplémentaires produit 1
      'mfw0nf5g3gydi4aucolh', 'ml20x3tgemfkqaiyvcs7', 'thgkixuyeh5grabocarj', 'paygb5srbjcnyqexyv07',

      // Produit 2
      'vrmbnjcyhjmxb3rq5r5f', 'xfjsrzaxnduxfoakv1n4', 'mfyunmy4i32lxypsqzhx', 'gvoa43h9a5inam6elx0i',

      // Produit 3
      'opex3qo5n7s9nfd1zw9d', 'klq1etz5oqpwo9ftar9j', 'u9we6kep0eqq5augajuo', 'si0njizvhkxjafln6z34',

      // Produit 4
      'hwh4lkwbyhf3ejs10cxl', 'sba5glzpzomvrhuuij7h', 'dm5vxanysmeroc3thbyv', 'zi5xjp1hx1unzcugpmvp',

      // Produit 5
      't4vhshrfkuwctj0nak3d', 'ue6e4qolivoc0ammns4n', 'uf6pegga5n6aaosni07a', 'hzox4dimjlklerksnfql',

      // Produit 6
      'huycr6nmrtbtpr2mfofr', 'phgimef5b6bonesvwvno', 'dmirkh88k9mjdoxg7kxt', 'bxtlausiyhtxcl9feitx',

      // Produit 7
      'dkxukrrvbtv50v7zucs6', 'k0udqn00qxs873dryxqs', 'jlhbi8kobhkxdsxwkfyb', 'eakd3uhbqp2ay6a5dm4a',

      // Produit 8
      'omkjoucuknfdgu5evhei', 'elvmv7flw1uy5p9bmlaf', 'qj2fj8erygkanisbsfye', 'zvrhkqcdbpbfiq3mvjkz',

      // Produit 9
      'f81i3qrjcuypherltxrm', 'uat4e8gas8tamxhqdgr6', 'oggddpuwubtu04wnkbqb', 'rkmvrubnyx3r8s0lhpau',
      // Produit 10
      'tritzuuprw5eqg15ppae','fxziygkprr965ipcaffk','hpqvgjqcv0didsr1pwfb','d6kbmclmbaslvyguwzeb',


      // dog toys // dog toys // dog toys// dog toys // dog toys // dog toys// dog toys // dog toys // dog toys
      // Images supplémentaires produit 1
      'wzq8uywxrmbb1erytdrk', 'liwujei8vnqsy1b6qjim', 'n7cowngforcmko30wvrd', 'xhh3kidouxbq3knyi3cj',

      // Produit 2
      'byrdedol7agyomaipi2m', 'cmdl28cfrr5jrueb3xm4', 'sjeucgnjzn0m1jhfvyvi', 'h2sojnshydwb3lojysn5',

      // Produit 3
      'vsmtaabgacdxw68awhoc', 'c5zayokcynxocu3csyzi', 'a4vbmyc5qerh3fhiz5ce', 's0wztzcn5cw10kr2s773',

      // Produit 4
      'frupcnmqddmhs6zlj4rc', 'ndhxcpucpjctqr7sqtzg', 'zgkaevbplf7fncco2xrg', 'ozgilprxylvxapsu5kui',

      // Produit 5
      'iolutejvuamjnsie0df0', 'ekpykeoqcnjck7oluuyr', 'b4mgwo8rrpmb97frrd9u', 'c9zezplzexar9y7mxpvm',

      // Produit 6
      'ompqy6ahxwnsznxe1cpk', 'n8kzbmne9irgi8zncslk', 'aquorfybb3l8gerhkmnx', 'jqvmlb7cdzbzo8ai4s52',

      // Produit 7
      'hanud074xzi01skghu14', 'w1ms0areodtewxgktl6d', 'vvgxatu4pbl1wi2nvz5j', 'ql3j1esp5lgt1hzatx8y',

      // Produit 8
      'oeigok4xisyyhfxmqzff', 'huaw1xmwo7mqpenzlqfl', 'k0kishj2fiulwgj4zocz', 'tbwoxqn9spnsqdeb9bov',

      // Produit 9
      'jvlhnxqyfkrr5gxzyg1j', 'a5l0lb68fcvhewdighlq', 'lycrp7ncchqz6zy7ggyu', 'l838wt48s5xdeztrcrfq',
      // Produit 10
      'oxmq6wo3zoqbnbdr1ikp','joocrczpprrgqpjrpeeb','zdtojbu98hwh345kpqbb','jzcio2y8ehklrlkeegda',
      // Produit 11
      'n4en4yxaoqjhs4kf53oc', 'rlv8dj325k6qzer9zdlp', 'ga66smy0nylir5siaksy', 'hvspjr71e1rfxtst6i62',
      // Produit 12
      'km9s71mmhvn18vp2jpwo', 'duczg1v6napkkxgerqi6', 'kvp6ulg6ohxtfi2qhut3', 'ybrgiqx25vgz3gazlwbw',
      // Produit 13
      'bln8l0fvaqaaletspmrm','eitldhd9mlfuc0nzbbqc', 'mn4ljf2r4ayb64ulwrpo', 'dnqxibm85w52xpypatje',

      //health and suppllies dog //health and suppllies dog //health and suppllies dog //health and suppllies dog //
      // Images supplémentaires produit 1
      'uflb13rmvilo4yxyknkh', 'zeu4us5c84zxc5deiwdx', 'rbiz2qpxb4cyf9xpme3y', 'sm3vetotsotcxannu02z',

      // Produit 2
      'jjua92ipeyorxrr5azee', 'xyez33btmxp9n4pmyexn', 'cmaikr9qbqamya5cz7ga', 'mqksd15zbf9xbvc9jeyw',

      // Produit 3
      'pzccjawzrbw15c31nkwd', 'zomdydopbpinocgqvdvv', 'zzhmqffobws22pppvwoz', 'jcgvbmderpx7bd6wmysx',

      // Produit 4
      'pzccjawzrbw15c31nkwd', 'zomdydopbpinocgqvdvv', 'zzhmqffobws22pppvwoz', 'jcgvbmderpx7bd6wmysx',

      // Produit 5
      'q3n2ls8n07oh1d5d1jzr', 'zado0xmuzea7yiaxnflz', 'vv4uqbybq0d9pyzrbjnj', 's9ydrup2fplxzi20stgs',

      // Produit 6
      'lzufqsdyurcimdgffgo4', 'fewxu60hogzxacwhvqky', 'ube4oxouhhmnlca6z9da', 'krtkii9vxa6gcjwgbllt',

      // Produit 7
      'j4zucod7bpqzatshiei3', 'slba6yyrhkxklxjtl7se', 'jd8qczg3a5vukcjylsga', 'fuiy6y30ridpbnq3dgw6',

      // Produit 8
      'rgjis2scwhnlb6ivhfct', 'l2vcqujazlsdx63ze1we', 'grfrqtk18lme4twkvzm9', 'zccbai3csywqamlczicz',

      // Produit 9
      'ivxwq3n5rdun0l1nyzb9', 'nmx1ckkrvvysv6jz59tc', 'mcqnm6toj6nxkjo2pzmn', 'e5wybpujrfixgjau91ps',
      // Produit 10
      'eypnwiqtt1wbhk200qfo','zgyfwsjtkqwcxbjk5x92','iqujx96cf6x1lda9ollv','ectwfxpru5xbomqtsiel',
      // Produit 11
      'zu3saevpgkz2sycktde5','ghcw5ecmvo2mfcoa1mre','vzy0q3q3ibwqnsldxif1','dnrnhtk9fer377lvmdjc',
      // Produit 12
      'hs7s8zol2ifxodwx6wki','wkfosnpdtxcvbyq0z33a','qljv0chdssmvaku72kvt','oc5ixlfr26wzsa5moocr',


      //clothes dog//clothes dog//clothes dog//clothes dog//clothes dog//clothes dog//clothes dog//clothes dog//clothes dog
      // Images supplémentaires produit 1
      'gihm8umbqufxuha49zur', 'ooghl090kmm4fh8vvbmj', 'wzsv2wbpxhnmpxn7gwsx', 'gmcti6mevcdudoil09kn',

      // Produit 2
      'n2q0uostu5a0np7df8m5', 'sbddhaqblfjlarvjinzs', 'wlzp7puldyorkqrnglnh', 'hhg2yrieirqqcmq2jqmf',

      // Produit 3
      'no2tvgnnb9aqojr6xhyl', 'oh6tmm0sid9b8iyezfp3', 'wuoqmabiwzoqzoedlok0', 'yxgykvnhuzb0ohdhvqwo',

      // Produit 4
      'vshsvukmcjxugp0mj1gm', 'jybus1ggmrrsfyrtgmxr', 'bebvqkblbnw2yfp2qwxh', 'nq5sda5hz5abi5n55bnx',

      // Produit 5
      'ht46ibpgnkygmxaln2hv', 'dw62tvcvqqh7lta4xy6w', 'dvpaw3gquaspogtijcx0', 'vognaslcyo8asy1hufdz',

      // Produit 6
      'unasgpurrhzud1nuciq9', 'q27aej7e1phwskzrgv9w', 'cb0atvlzzjtd1c6ojdzl', 'spyqvtw1felhh7vj4te0',

      // Produit 7
      'wc3lbosx9aand25jrfzu', 'x8tyg7m6entm9rbseij5', 'wvnlfjbaqzadpk6azjag', 'bvniuiblke50wzvfbidg',

      // Produit 8
      'jznfgyvlm44hawqxg8in', 'yt1bhd9el3gdl3mlq8d6', 'jxgu2lc8s9kcmykkmdxx', 'rm8v5s5yb7mjq6dbrp6m',

      // Produit 9
      'xmwsdlkz2o5cs2ojcdtx', 'mkfzlkdtgdf9stlit1vc', 'bfpqhd7o1ea0nkulynv0', 'dq4zwcltnslkeciv4ork',
      // Produit 10
      'mgizx87ovwvaolht5qkt','ok1jpozbsluj2jivgsib','j1o0llbiuw8p0cqsqrz2','mvbxq7x4kkhtrgopnsbs',
// Produit 11
      'hg0aokad4rmr7h8cvj1t', 'p0qd7pfqhzz9ttrq8lge', 'lqtztw119usx9xqd4p46', 'oamxbrxugjedxnc4zntw',
      // Produit 12
      'd79qxko7gmjsmxzqj56k', 'tsjgmtifpfpmlubh92mo', 'puekqadrjqu6daqvhilt', 'sgihdtqecqsu5fuhsbdw',
      // Produit 13
      'okmw5pgooghis08rff5k', 'lgg4tvldobkuoyuzir2b', 'pnhleskpicfllz3uyq9p', 'fztescfunrmpi7rsybum',



      // cat food// cat food// cat food// cat food// cat food// cat food// cat food// cat food// cat food// cat food// cat food
      // Images supplémentaires produit 1
      'pdto2qbwrp2nazxn3pwq', 'zcq81vnrahbnmia61hqn', 'g4fggjzwjtn0xhbox5fr', 'ohlw5k0o8ll2irtscymy',

      // Produit 2
      'tmzrdsqmgsf1x5tjh1ki', 'hlzbxny2ugehkixbwkc2', 'aeohvg1ov1jrgiluq3jd', 'kctimdx0ba6bsepom6ne',

      // Produit 3
      'nafzdokgd2xsj7spdrgi', 'vi6opikgbsscffwgqekl', 'mile4tb6osohsx5s0mtb', 'uvi8tk1ykp5kvfmazwxc',

      // Produit 4
      'xtzxbzrlxndvkj7w7hh8', 'yoqoobqmrvt3ptanreef', 'ji9lfnm3dgteeistrhmw', 'xjp72u6k13rhevknk4rv',

      // Produit 5
      'goilyarqaki7j3u6gplb','mkc2kwkkkd7oeg1vskeh', 'lxnfcrgid7gkuqc2kbbq', 'ej70u373vat2xaom4fab',

      // Produit 6
      'ttoawfowzqh9sk0cisys', 'vswupihkc1qpbva8lwfs', 'qj7pdiuewyyruaik24dm', 'tsweyttmf4l0re9shusa',

      // Produit 7
      'ozvwcw7zapomkc7k5wkl', 'clvhjhqqjestkv2yukq5', 'o1ccwmkk7wkkxhp5yfcv', 'gfsqv5sm6aojeszl9b8g',

      // Produit 8
      'jar1syqyftg4lyho9hvu', 'wdq0hly1ag1jf7yszecw', 'qw2bdw61tmc6nxpviflw', 'c4eyagxkgrkj5behfz10',

      // Produit 9
      'nnbrifrccgitbv3ihrj3', 'mnn7vvoxv1drh4nicq3o', 'vow3hijp3cyrduz4ozpt', 'ojamz13sochdzum3iowc',
      // Produit 10
      'a8bzz1fr7nsennrndpg9','afeqdxmanhakpvntfib9','svcf3qgeaxz0mikeuyps','kqdrq38xgg6cxmchqrh5',
     // Produit 11
      'n9ohfx4mj8pzugpezoyh','s2p5wmwgya9l41dbrpuk','p3whevxd6phaddbxrqjo','q97r20hijxuvh0jbydif',
// Produit 12
      'hvjcpkevizqezjdydjvk','ltdbdim8pt0t8g37ta3o','yob26omqfhhhfknkk5ng','sgamxadamlnh69xkibwd',


      // cat toys // cat toys// cat toys// cat toys// cat toys// cat toys// cat toys// cat toys// cat toys// cat toys// cat toys
      // Images supplémentaires produit 1
      'sgkrb19x8iyn5bkg4xvp', 'r9tjd4jj1p7qfwp3pe1i', 'aej5ohx06v05wnaizc8v', 's3kazttcxt3m3lwpf0ml',

      // Produit 2
      'zrrgjvr3onnmayxpt1y8', 'hsulabhxiyg3gtpa9rfv', 'oxv0535bbgcts9r9fn8v', 'czjk71hkst4zgovcna2z',

      // Produit 3
      'epizfvvohyl7ygddmcqy', 'l7jgezvnozcbk8vmaxyt', 'o8hdu2diyv4kalxink2u', 'badpbxm0afoadkkt4qsw',

      // Produit 4
      'qxbdzioxzzile7sdgssb', 'hlyvk0fawkckzxwni5jj', 'vlft5xxhzylu5erg2kvu', 'rddxbd9azzrkxjambajl',

      // Produit 5
      'zsrtqud3b9bztjdtczl9', 'ixiavkujdky6haq0keua', 'l7hanq3vwksjl9zlqvtn', 'k2kmj6pagupbyb9r6rit',

      // Produit 6
      'mvqpy2wkeo1fcpn08wvo', 'wetbyxk2ylherakxqhwq', 'jlacbjx1xcgm9hem0kvg', 'aygwbplmss32tumncrkq',

      // Produit 7
      'ufld6dgwsccv8n6pfd9k', 'mngpflp7dftc6fcd3jdn', 'jin8mfcufkofjrtdynm9', 'vn0wrigryn3boxbwj3bt',

      // Produit 8
      'ehzlrtdjcnucd5rxxcin', 'tshnj2updmo89ddryefw', 'xyl4wjkekz5nef5g1s8f', 'hk51risasiyc8psjlb6q',

      // Produit 9
      'ju42elzveuethawwq9sk', 'data03hkea01jrkbrr4a', 'gshlyd4mc3egndu0d6sv', 'x7rpwbhfimpdmk7nkrgn',
      // Produit 10
      'obcavothinpucss27pvj','ctss4lsyxmjyeyof9pkp','ppmzp6k0jlsyspgbfk3q','bj4syuhjxs0sdmqkzlda',
      // Produit 11
      'd1u0pzp7m442vhnhs7ky','x6lkhqkuormyrgyby4xe','x9fbtf5ymokcutqehtrq','os8uqwd46v0fghvv1fqw',


      //health and supplies cat//health and supplies cat//health and supplies cat//health and supplies cat//health and supplies cat//health and supplies cat
      // Images supplémentaires produit 1
      'r78awzulrr2t1q2oqxk1', 'g17ut24zk6jdzc0owbth', 'irxbghsqje4jbkjm6hxs', 'ufcj4km1kludig2xguhq',

      // Produit 2
      'jbjfmx3ywwkg5xcwtoys', 'b2mugl0j3r7o2ndrmjlo', 'yw149lnb5t1lsjiw7uv3', 'k8as6xuxgnmuhsop7gn9',

      // Produit 3
      'atfzmpcezeiqpmz40dgi', 'odrq1hoglhtfbpssllrq', 'gtoa8doxcv0imtpxuwzo', 'jgyx8bmu5tei5cosbmhj',

      // Produit 4
      'xctblg4utghev5frj8ak', 'xvjwfn8czjzphqlefoyx', 'ihoellj0jhpmk3jmdik9', 'goy2pci1gdjuc4yfiwzr',

      // Produit 5
      'o40iz1yyhe20hmrqtpll', 'ozjlkunfajnhaobzp78v', 'y8anr5igtiapffp2bph0', 'l1cuaamijvoqppksfb9m',

      // Produit 6
      'usqfz3bj9vet5hr07fe7', 'ai4cclzlgivvpvldgjvz', 'gwoa67kjxoxrywt8iita', 'aodumk9rhxivmqdzie2i',

      // Produit 7
      'z08z6iew863lmlwlpf9u', 'zldvg5dwlec1jlcecuzl', 'f95jmxfelsutnj4quxmk', 'sdj2ezvaglb6urnwdlo3',

      // Produit 8
      'zdbbkeg5hzliydlu3dnt', 'hqeeivyxljquiku5vrhc', 'cbxxnnlxqmyirmtdm2zw', 'ib67w6vgdb8zzdy9znbn',

      // Produit 9
      'gyile1sdic21lx8eklhl', 'xmkufqlf7fugyiaz6ctw', 'ppgfy3inzq4sy2kxlmv5', 'uggw1bs4ixpepswdpys1',
      // Produit 10
      'rmi5caexotlzxglvmlp3','yjcpifigtqa4mhllrhpc','dy6vrynq9icf9qpflhf6','hu1voxy10vrj1oonryyg',


      //clothes cat//clothes cat//clothes cat//clothes cat//clothes cat//clothes cat//clothes cat//clothes cat
      // Images supplémentaires produit 1
      'kdualsezqejlr2tktvkj', 'eqb5ri179dfiblacb2et', 'kp1t7uwphne6uve8ii7l', 'y5d4rwfgz3jswvrnfu4j',

      // Produit 2
      'eyxywdka3hnyilycgkiz', 'yypquodwnifyjsn6dfsy', 'jvd1uwmfqs86d5qtrdet', 'i2ivucuifnf3py39enfm',

      // Produit 3
      'r7hv8tj2nlgtftkssrma', 'byniyforsugerv2ylu4p', 'pjwgwbbv6lwrkaobq1hg', 'tqhwsvijlxzjfafusjif',

      // Produit 4
      'wktlt8fc7sihbktlz364', 'yolovknhmjlq5vds26bb', 'alebn2xsgl6gwiqjoimw', 'o1yztaxd769aswycak4k',

      // Produit 5
      'cz7wnyietfyyuhkhzpp4', 'ou9tuolixbbel7em9oao', 'gkpuwxqmhz15sdbnhxbs', 'gcsb6ho5gvzto9iyvpgu',

      // Produit 6
      'jwb80bn2ucbphn3gjiln', 'civyzo2lptyvrbxfty05', 'o6rif09vvqifydrqsqh2', 'rom9sn5skv8ir0nhxlqe',

      // Produit 7
      'dzileot1iqbw2m6zgrxd', 'hbrj7rkyfv99sdjhqqmk', 'f1ryq1n49oaonexixl9n', 'k5ygzrnlelhbypusv3qo',

      // Produit 8
      'f5dwjuyuqaeyw4hpcipb', 'c1jzk66q5vfxwyvta1bp', 'oh6xbcu5vazxvp43qywp', 'qxba3oo5qhr5cn402qqy',

      // Produit 9
      'cw8efcgwfwaloyisytue', 'ot8qxp1wscggtjup5r2l', 'scexqcspstmxoqse0x9z', 'bzetyskqsc02lmyd3evo',
      // Produit 10
      'exk3vjwjl6snerf9aaml','ainickcyoayufjpehy4d','aid4nlvfktitacliabdv','jw8mt6rp9cwlms1tnoq3',

      // Produit 11
      'bgwwqi2wszuwgyjynrtt','znpir3pby0fiyljqahpy','tnnegdsxo6bybshnffri','mxtwxzgsrynd9taecpqm',
      // Produit 12
      'p4nqcjrcoymp2o78aa5q','f2czkmtqkyf8ir4g8are','cqsicgm50yijnzuhernw','wxq8vbnimej7jzbuprfd',



    ];


    this.products.forEach((product, index) => {
      // Assigner image principale
      product.image = cld.image(imageNames[index]).toURL();

      // Calculer base pour les images supplémentaires
      const base = 93+ index * 4; // 9 = nombre d'images principales
      product.si1 = cld.image(imageNames[base]).toURL();
      product.si2 = cld.image(imageNames[base + 1]).toURL();
      product.si3 = cld.image(imageNames[base + 2]).toURL();
      product.si4 = cld.image(imageNames[base + 3]).toURL();
    });
  }

    loadProductDetails() {
    this.productDetails = this.products.find(product => product.id === this.productId);
    if (this.productDetails && this.productDetails.image) {
      const cld = new Cloudinary({
        cloud: {
          cloudName: 'du1rqxwmr',
        },
      });
      this.productDetails.image = cld.image(this.productDetails.image).resize(fill().width(500).height(500)).toURL();
    }
  }

  goBack(): void {
    window.location.href = '/category';
  }

  redirectToAmazon(): void {
    window.open('https://www.amazon.com', '_blank');
  }

  /**
   * Propriétés de pagination pour les produits suggérés
   */
  currentPage: number = 0;
  pageSize: number = 4; // Afficher 4 produits par page


  /**
   * Fonctionnalité de suggestion de produits
   * Retourne les produits de la même catégorie que le produit actuel
   * avec pagination (4 produits par page)
   */
  getSuggestedProducts() {
    if (!this.productDetails) return [];

    // Filtrer les produits de la même catégorie (excluant le produit actuel)
    const filteredProducts = this.products.filter(p =>
      p.category === this.productDetails.category && p.id !== this.productDetails.id
    );

    // Calculer l'index de début et de fin pour la pagination
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    // Retourner les produits pour la page actuelle
    return filteredProducts.slice(startIndex, endIndex);
  }

  /**
   * Retourne le nombre total de pages pour les produits suggérés
   */
  getTotalPages(): number {
    if (!this.productDetails) return 0;

    const filteredProducts = this.products.filter(p =>
      p.category === this.productDetails.category && p.id !== this.productDetails.id
    );

    return Math.ceil(filteredProducts.length / this.pageSize);
  }

  /**
   * Retourne le nombre total d'éléments pour les produits suggérés
   */
  getTotalItems(): number {
    if (!this.productDetails) return 0;

    const filteredProducts = this.products.filter(p =>
      p.category === this.productDetails.category && p.id !== this.productDetails.id
    );

    return filteredProducts.length;
  }

  /**
   * Passe à la page suivante des produits suggérés
   */
  nextPage(): void {
    if (this.currentPage < this.getTotalPages() - 1) {
      this.currentPage++;
    }
  }

  /**
   * Revient à la page précédente des produits suggérés
   */
  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  /**
   * Navigue vers une page spécifique
   * @param page Numéro de page (commençant à 0)
   */
  goToPage(page: number): void {
    if (page >= 0 && page < this.getTotalPages()) {
      this.currentPage = page;
    }
  }

  /**
   * Génère un tableau de numéros de page à afficher
   * Limite le nombre de pages affichées à 5 maximum
   */
  getPageNumbers(): number[] {
    const totalPages = this.getTotalPages();
    if (totalPages <= 1) return [];

    // Si moins de 6 pages, afficher toutes les pages
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i);
    }

    // Sinon, afficher 5 pages autour de la page courante
    let startPage = Math.max(0, this.currentPage - 2);
    let endPage = Math.min(totalPages - 1, startPage + 4);

    // Ajuster si on est proche de la fin
    if (endPage - startPage < 4) {
      startPage = Math.max(0, endPage - 4);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }

  /**
   * Vérifie s'il y a une page suivante disponible
   */
  hasNextPage(): boolean {
    return this.currentPage < this.getTotalPages() - 1;
  }

  /**
   * Vérifie s'il y a une page précédente disponible
   */
  hasPreviousPage(): boolean {
    return this.currentPage > 0;
  }


  /**
   * Navigue vers la page de détails d'un produit
   * @param productId ID du produit vers lequel naviguer
   */
  navigateToProduct(productId: number): void {
    this.router.navigate(['/produit', productId]).then(() => {
      // Mettre à jour l'ID du produit et recharger les détails après la navigation
      this.productId = productId;
      this.loadProductDetails();
      window.location.reload();
    });
  }
  /**
   * Fonctionnalité de zoom sur l'image
   */
  @ViewChild('zoomImg') zoomImg!: ElementRef;
  @ViewChild('zoomImgView') zoomImgView!: ElementRef;

  zoomVisible = false;

  /**
   * Gère le mouvement de la souris pour l'effet de zoom
   * @param event Événement de la souris
   */
  onMouseMove(event: MouseEvent) {
    this.zoomVisible = true;

    const img = this.zoomImg.nativeElement;
    const zoomedImg = this.zoomImgView.nativeElement;

    const rect = img.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    const percentX = (offsetX / rect.width) * 100;
    const percentY = (offsetY / rect.height) * 100;

    zoomedImg.style.transformOrigin = `${percentX}% ${percentY}%`;
    zoomedImg.style.transform = 'scale(2)'; // Adjust to desired zoom level
  }

  /**
   * Gestion des images du produit
   */

  /**
   * Définit l'image principale du produit
   * @param imageUrl URL de l'image à définir comme principale
   */
  setMainImage(imageUrl: string) {
    this.productDetails.image = imageUrl;
  }

  /**
   * Gère l'événement quand la souris quitte la zone de l'image
   * Désactive l'effet de zoom
   */
  onMouseLeave() {
    this.zoomVisible = false; // Cache le zoom
    // Ne pas appeler resetMainImage ici pour ne pas changer l'image
  }

  /**
   * Réinitialise l'image principale à l'image par défaut du produit
   */
  resetMainImage() {
    // Réinitialise l'image principale
    const product = this.products.find(p => p.id === this.productId);
    if (product) {
      // Utiliser Cloudinary pour formater l'URL de l'image
      const cld = new Cloudinary({
        cloud: {
          cloudName: 'du1rqxwmr',
        },
      });
      this.productDetails.image = cld.image(product.image).toURL();
    }
  }
}

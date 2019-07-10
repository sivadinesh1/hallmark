import { Component, OnInit, NgModule, ViewChild, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {


  sticky = 'false';
  stickyval: any;
  currentClickedMenu = '';

  customOptions: any = {
    items: 1,
    center: true,

    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    animateIn: false,
    animateOut: false,
    navSpeed: 1000,
    navText: ['', ''],
    autoplay: true,
    autoHeight: true,
    nav: false,
    checkVisible: false,

  };

  slidesStore: any;
  slidesTestimony: any;
  productStore: any;

  country = 'sg';

  services: any;

  topFloat = 'false';
  @ViewChild('foo', { static: false }) foo: ElementRef;


  @ViewChild('aboutus', { static: false }) aboutus: ElementRef;
  @ViewChild('whatwedo', { static: false }) whatwedo: ElementRef;
  @ViewChild('testimonials', { static: false}) testimonials: ElementRef;
  @ViewChild('products', { static: false }) products: ElementRef;
  @ViewChild('contactus', { static: false }) contactus: ElementRef;


  constructor(private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef,
              @Inject(PLATFORM_ID) private platformId: any) {
    this.slidesStore = [
      {src: 'assets/images/Slide13.jpg', id: '1', alt: 'image1', title: 'Stop battling your pain. You need physiotherapy'},
      {src: 'assets/images/Slide31.jpg', id: '2', alt: 'image2', title: 'Recovery is not easy but worth it'},

    ];

    this.slidesTestimony = [
      { id: '1', client: 'Theresa Low', title: `"Hallmark Physiotherapy has an excellent team. They provide professional services with a personal touch which is rare in today’s environment. Their caring, dedicated staff and experienced physiotherapists has helped me to a full recovery. Thank you, Hallmark!"`},
      { id: '2', client: 'Rajaletchumi', title: `"Hallmark Physiotherapy has an experienced physiotherapist and tender loving care staffs, helped meheal frozen shoulder and long lasting heel pain. “Thank You” Hallmark Physiotherapy."`},
      { id: '3', client: 'Veronica Lee and family', title: `"Our family has entrusted sprained ankles, back pains, and tennis elbows to the healing hands of Mr Ravi and his staff at Hallmark Physiotherapy. Their professional experience and dedication towards seeing their patients to full recovery is certainly praiseworthy! We would certainly continue to recommend Hallmark Physiotherapy to our other family members and friends."`},
      { id: '4', client: 'Cindy Shen', title: `"Hallmark Physiotherapy has an excellent team. They provide professional services and are dedicated. They understand the need of women suffering from pain and are very empathetic."`},
      // { id: '5', client: 'Lim Bee Leng', title: `"I was recommended by a friend to seek treatment from Mr Ravi after my visits to 3 other physiotherapists didn not seem effective after a duration of about 6 months. Mr Ravi is very professional, he studied the possible causes of my cervical and back pain and treated it effectively. My pain has subsided considerably and I am able to resume the activities which I could not do previously due to my pain. I would definitely recommend Mr Ravi to anyone with my condition or any other problems. Besides having a wealth of experience and knowledge, he is a very caring and dedicated physiotherapist who will do his best to help his patients get better! I am really very thankful to Mr Ravi and his assistant, Ms Vaishu for helping me in my recovery!"`},
      { id: '5', client: 'Lim Bee Leng', title:
      sanitizer.bypassSecurityTrustHtml(`<span style="font-size:16px; line-height:18px" >I was recommended by a friend to seek treatment from Mr Ravi after my visits to 3 other physiotherapists didn not seem effective after a duration of about 6 months. Mr Ravi is very professional, he studied the possible causes of my cervical and back pain and treated it effectively. My pain has subsided considerably and I am able to resume the activities which I could not do previously due to my pain. I would definitely recommend Mr Ravi to anyone with my condition or any other problems. Besides having a wealth of experience and knowledge, he is a very caring and dedicated physiotherapist who will do his best to help his patients get better! I am really very thankful to Mr Ravi and his assistant, Ms Vaishu for helping me in my recovery!</span>`)},

    ];

    this.productStore = [
      {src: 'assets/images/medirub-100.png', id: '1', alt: 'MEDIRUB 100G', title: 'MEDIRUB 100G'},
      {src: 'assets/images/medirub-250.png', id: '2', alt: 'MEDIRUB 250G', title: 'MEDIRUB 250G'},
      {src: 'assets/images/thera-band.png', id: '3', alt: 'THERA-BAND', title: 'THERA-BAND'},
      {src: 'assets/images/emu-oil.png', id: '4', alt: 'EMU OIL', title: 'EMU OIL'},
      {src: 'assets/images/rock-tape.png', id: '5', alt: 'ROCK TAPE', title: 'ROCK TAPE'},
      {src: 'assets/images/repair-gel.png', id: '6', alt: 'REPARIL GEL', title: 'REPARIL GEL'},

    ];

    this.services = [
      {src: 'assets/images/pain-relief.png', id: '1', alt: 'Pain relief and management',
        desc: sanitizer.bypassSecurityTrustHtml(`
        <b>Pain is a sign of inflammation due to the injury to the tissues.</b><br><br>
        <span style="color:darkgreen;">&#9658;</span> Pain has to be treated in order for the tissues to heal. <br>
        <span style="color:darkgreen;">&#9658;</span> When it is not treated, it will cause discomforts and affect our daily life, which can be annoying. <br>
        <span style="color:darkgreen;">&#9658;</span> Our team works together to treat all kinds of pain from head to toe.
      `),

        title: 'Pain relief and management'},
      {src: 'assets/images/post_op.gif', id: '2', alt: 'Post-surgical rehabilitation',
        desc: sanitizer.bypassSecurityTrustHtml(`
        <span style="color:darkgreen;">&#9658;</span> Pain, weakness and restricted range of motion is seen in most patient after they went through a surgery. <br>
        <span style="color:darkgreen;">&#9658;</span> Thus, post-surgical rehabilitation is important, to help bring you back to your daily activities.  <br>
        <span style="color:darkgreen;">&#9658;</span> We help to ensure a safe and effective post-surgical recovery.`),
      title: 'Post-surgical rehabilitation'},
      {src: 'assets/images/fitness.png', id: '3', alt: 'Fitness',
        desc: sanitizer.bypassSecurityTrustHtml(`
        <span style="color:darkgreen;">&#9658;</span> The Hallmark Physiotherapy is able to provide a comprehensive and individually tailored health and fitness service to our clients due to the expertise and knowledge-base of our staff.  <br>
        <span style="color:darkgreen;">&#9658;</span> Our programs will be designed based on up-to-date evidence-based practices combined with the most professionalism.  <br>
        <span style="color:darkgreen;">&#9658;</span> Clients will also be able to select between individual or corporate training packages with us.`),
      title: 'Fitness'},
      {src: 'assets/images/bunion1.png', id: '4', alt: 'Other conditions / services',
      desc: sanitizer.bypassSecurityTrustHtml(`
      <span style="color:darkgreen;">&#9658;</span> We provide a variety of services, not just for patients who are injured or in pain, but also conservative treatments for foot deformity. (eg. Bunion)`),
      title: 'Other conditions / services'},


    ];


  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
    const navbar = document.getElementById('myTopnav');
    this.stickyval = navbar.offsetTop;

    console.log(' height ' + this.stickyval);
    }
  }

  // const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;


  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {

    const hashAboutus = this.aboutus.nativeElement.offsetTop;
    const hashWhatwedo = this.whatwedo.nativeElement.offsetTop;
    const hashTestimonials = this.testimonials.nativeElement.offsetTop;
    const hashProducts = this.products.nativeElement.offsetTop;
    const hashContactus = this.contactus.nativeElement.offsetTop;

    const verticalOffset = window.pageYOffset;

    console.log('VERTICAL << >> ' + verticalOffset );


    if ((verticalOffset > hashAboutus) && (verticalOffset < hashWhatwedo)) {
      this.currentClickedMenu = 'aboutus';
      this.cdr.markForCheck();
    } else if ((verticalOffset > hashWhatwedo) && (verticalOffset < hashTestimonials)) {
      this.currentClickedMenu = 'whatwedo';
      this.cdr.markForCheck();
    } else if ((verticalOffset > hashTestimonials) && (verticalOffset < hashProducts)) {
      this.currentClickedMenu = 'testimonials';
      this.cdr.markForCheck();
    } else if ((verticalOffset > hashProducts) && (verticalOffset < hashContactus)) {
      this.currentClickedMenu = 'products';
      this.cdr.markForCheck();
    } else if (verticalOffset > hashContactus) {
      this.currentClickedMenu = 'contactus';
      this.cdr.markForCheck();
    } else {
      this.currentClickedMenu = '';
      this.cdr.markForCheck();
    }

    const horizontalOffset = screen.width;

    if (verticalOffset >= this.stickyval) {
      this.sticky = 'true';

      if (horizontalOffset <= 768) {
        this.sticky = 'false';

      }

    } else {
     this.sticky = 'false';
    }

    if (verticalOffset >= 600) {

      this.topFloat = 'true';
    } else {
      this.topFloat = 'false';
    }


  }

  scroll(el: HTMLElement, menu: string) {
    this.currentClickedMenu = menu;
    el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start' });
}

changeCountry(val) {
  this.country = val;
}

myFunction() {
  const x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

onClick(filename: string) {
  window.open(`/assets/pdf/${filename}`, '_blank');
}

appointment() {
  window.open('https://calendly.com/hphysio/30min', '_blank');
}

scrollTop() {
  window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
}

}

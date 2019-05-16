import { Component, OnInit, NgModule } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  sticky = 'false';
  stickyval: any;

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

  constructor() {
    this.slidesStore = [
      {src: 'assets/images/Slide13.jpg', id: '1', alt: 'image1', title: 'Stop battling your pain. You need physiotherapy'},
      {src: 'assets/images/Slide31.jpg', id: '2', alt: 'image2', title: 'Recovery is not easy but worth it'},

    ];

    this.slidesTestimony = [
      { id: '1', client: 'Theresa Low', title: `"Hallmark Physiotherapy has an excellent team. They provide professional services with a personal touch which is rare in today’s environment. Their caring, dedicated staff and experienced physiotherapists has helped me to a full recovery. Thank you, Hallmark!"`},
      { id: '2', client: 'Rajaletchumi', title: `"Hallmark Physiotherapy has an experienced physiotherapist and tender loving care staffs, helped meheal frozen shoulder and long lasting heel pain. “Thank You” Hallmark Physiotherapy."`},
      { id: '3', client: 'Veronica Lee and family', title: `"Our family has entrusted sprained ankles, back pains, and tennis elbows to the healing hands of Mr Ravi and his staff at Hallmark Physiotherapy. Their professional experience and dedication towards seeing their patients to full recovery is certainly praiseworthy! We would certainly continue to recommend Hallmark Physiotherapy to our other family members and friends."`},
      { id: '4', client: 'Cindy Shen', title: `"Hallmark Physiotherapy has an excellent team. They provide professional services and are dedicated. They understand the need of women suffering from pain and are very empathetic."`},
      { id: '5', client: 'Lim Bee Leng', title: `"I was recommended by a friend to seek treatment from Mr Ravi after my visits to 3 other physiotherapists didn not seem effective after a duration of about 6 months. Mr Ravi is very professional, he studied the possible causes of my cervical and back pain and treated it effectively. My pain has subsided considerably and I am able to resume the activities which I could not do previously due to my pain. I would definitely recommend Mr Ravi to anyone with my condition or any other problems. Besides having a wealth of experience and knowledge, he is a very caring and dedicated physiotherapist who will do his best to help his patients get better! I am really very thankful to Mr Ravi and his assistant, Ms Vaishu for helping me in my recovery!"`},


    ];

    this.productStore = [
      {src: 'assets/images/medirub-100.png', id: '1', alt: 'MEDIRUB 100G', title: 'MEDIRUB 100G'},
      {src: 'assets/images/medirub-250.png', id: '2', alt: 'MEDIRUB 250G', title: 'MEDIRUB 250G'},
      {src: 'assets/images/thera-band.png', id: '3', alt: 'THERA-BAND', title: 'THERA-BAND'},
      {src: 'assets/images/emu-oil.png', id: '4', alt: 'EMU OIL', title: 'EMU OIL'},
      {src: 'assets/images/rock-tape.png', id: '5', alt: 'ROCK TAPE', title: 'ROCK TAPE'},
      {src: 'assets/images/repair-gel.png', id: '6', alt: 'REPAIR GEL', title: 'REPAIR GEL'},
      
    ];



  }
  ngOnInit() {
    const navbar = document.getElementById('myTopnav');
    this.stickyval = navbar.offsetTop;

    console.log(' height ' + this.stickyval);
  }



  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    // console.log("scrolling" + event);
    const verticalOffset = window.pageYOffset;
    console.log('scrolling' + verticalOffset);

    if (verticalOffset >= this.stickyval) {
      console.log('iam sticky ');
      this.sticky = 'true';
    } else {
      console.log('iam NON sticky ');
      this.sticky = 'false';
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

appointment() {
  window.open('https://calendly.com/hphysio/30min', '_blank');
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

}

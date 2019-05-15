import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
      {src: 'assets/images/Slide13.jpg', id: '1', alt: 'image1', title: 'Your health is always in the first place'},
      {src: 'assets/images/Slide31.jpg', id: '2', alt: 'image2', title: 'title2'},
      {src: 'assets/images/slider2-new.jpg', id: '3', alt: 'image3', title: 'title3'},
    ];

    this.slidesTestimony = [
      { id: '1', client: 'Theresa Low', title: `"Hallmark Physiotherapy has an excellent team. They provide professional services with a personal touch which is rare in today’s environment. Their caring, dedicated staff and experienced physiotherapists has helped me to a full recovery. Thank you, Hallmark!"`},
      { id: '2', client: 'Rajaletchumi', title: `"Hallmark Physiotherapy has an experienced physiotherapist and tender loving care staffs, helped meheal frozen shoulder and long lasting heel pain. “Thank You” Hallmark Physiotherapy."`},
      { id: '3', client: 'Veronica Lee and family', title: `"Our family has entrusted sprained ankles, back pains, and tennis elbows to the healing hands of Mr Ravi and his staff at Hallmark Physiotherapy. Their professional experience and dedication towards seeing their patients to full recovery is certainly praiseworthy! We would certainly continue to recommend Hallmark Physiotherapy to our other family members and friends."`},
      { id: '4', client: 'Cindy Shen', title: `"Hallmark Physiotherapy has an excellent team. They provide professional services and are dedicated. They understand the need of women suffering from pain and are very empathetic."`},
      { id: '5', client: 'Lim Bee Leng', title: `"I was recommended by a friend to seek treatment from Mr Ravi after my visits to 3 other physiotherapists didn not seem effective after a duration of about 6 months. Mr Ravi is very professional, he studied the possible causes of my cervical and back pain and treated it effectively. My pain has subsided considerably and I am able to resume the activities which I could not do previously due to my pain. I would definitely recommend Mr Ravi to anyone with my condition or any other problems. Besides having a wealth of experience and knowledge, he is a very caring and dedicated physiotherapist who will do his best to help his patients get better! I am really very thankful to Mr Ravi and his assistant, Ms Vaishu for helping me in my recovery!"`},


    ];

    this.productStore = [
      {src: 'assets/images/product1.png', id: '1', alt: 'Product 1', title: 'Product 1'},
      {src: 'assets/images/product2.png', id: '2', alt: 'Product 2', title: 'Product 2'},
      {src: 'assets/images/product3.png', id: '3', alt: 'Product 3', title: 'Product 3'},
      {src: 'assets/images/product4.png', id: '4', alt: 'Product 4', title: 'Product 4'},
      {src: 'assets/images/product5.png', id: '5', alt: 'Product 5', title: 'Product 5'},
      {src: 'assets/images/product6.png', id: '6', alt: 'Product 6', title: 'Product 6'},
      {src: 'assets/images/product7.png', id: '7', alt: 'Product 7', title: 'Product 7'},
      {src: 'assets/images/product8.png', id: '8', alt: 'Product 8', title: 'Product 8'},
      {src: 'assets/images/product9.png', id: '9', alt: 'Product 9', title: 'Product 9'},
      {src: 'assets/images/product10.png', id: '10', alt: 'Product 10', title: 'Product 10'},
    ];

  }
  ngOnInit() {
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

}

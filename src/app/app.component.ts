import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  products: Product[] = [
    {
      id: '1',
      name: 'Borrador',
      price: 4000,
      img: './assets/images/eraser.jpg',
    },
    {
      id: '2',
      name: 'Hojas',
      price: 150,
      img: './assets/images/paper.jpg',
    },
    {
      id: '3',
      name: 'Boligrafo',
      price: 2500,
      img: './assets/images/pen.png',
    },
    {
      id: '4',
      name: 'Lapiz de Papel',
      price: 100,
      img: './assets/images/pencil.jpg',
    },
    {
      id: '5',
      name: 'Tractor de Juguete',
      price: 35000,
      img: './assets/images/toy.jpg',
    },
  ];

  onLoaded(img: string) {
    console.log('Log Padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}

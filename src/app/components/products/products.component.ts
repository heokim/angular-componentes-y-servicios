import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
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
  myShoppingCart: Product[] = [];
  total: number = 0;

  onAddToShoppingCart(product: Product) {
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}

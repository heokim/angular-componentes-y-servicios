import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Product[] = [
    /*{
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
    },*/
  ];
  myShoppingCart: Product[] = [];
  total: number = 0;

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}

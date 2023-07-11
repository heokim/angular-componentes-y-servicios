import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product = {
    id: '',
    title: '',
    image: '',
    price: 0,
    category: '',
    description: '',
  };

  @Output() addedProduct = new EventEmitter<Product>();

  /*
  si se quiere que la propiedad tenga otro nombre
  se le tiene que pasar como argumento al
  @Input('nombre-de-la-propiedad')

  @Input('myProduct') product: Product = {
    id: '',
    name: '',
    img: '',
    price: 0,
  };
  */

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }
}

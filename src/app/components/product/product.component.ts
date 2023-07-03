import { Component, Input } from '@angular/core';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product = {
    id: '',
    name: '',
    img: '',
    price: 0,
  };

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
}

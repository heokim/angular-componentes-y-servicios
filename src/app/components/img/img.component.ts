import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  @Input() img: string = 'Valor por Defecto';
  @Output() loaded = new EventEmitter<string>();

  imgDefault = './assets/images/default.png';

  constructor() {
    // before render
    // NO async -- once time
    console.log('constructor', 'imgValue => ', this.img);
  }

  ngOnInit(): void {
    // before render
    // async -- fetch  -- once time
    console.log('ngOnInit', 'imgValue => ', this.img);
  }

  ngOnChanges(): void {
    // before - During render
    // changes Inputs  --  all time
    console.log('onChanges', 'imgValue => ', this.img);
  }

  ngAfterViewInit(): void {
    // after render
    // handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // delete
    console.log('ngOnDestroy');
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    console.log('Log Hijo');
    this.loaded.emit(this.img);
  }
}

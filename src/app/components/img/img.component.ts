import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  img: string = 'Valor por Defecto';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img ', this.img);
    // code
  }
  @Input() alt: string = 'Valor por Defecto';
  @Output() loaded = new EventEmitter<string>();

  imgDefault = './assets/images/default.png';
  counter = 0;
  counterFuntion: number | undefined;

  constructor() {
    // before render
    // NO async -- once time
    console.log('constructor', 'imgValue => ', this.img);
  }

  ngOnInit(): void {
    // before render
    // async -- fetch  -- once time
    console.log('ngOnInit', 'imgValue => ', this.img);
    this.counterFuntion = window.setInterval(() => {
      this.counter += 1;
      console.log('run counter');
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // before - During render
    // changes Inputs  --  all time
    console.log('onChanges', 'imgValue => ', this.img);
    console.log('changes', changes);

    /*
    if(changes.){
       code ....
    }
    */
  }

  ngAfterViewInit(): void {
    // after render
    // handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // delete
    console.log('ngOnDestroy');
    window.clearInterval(this.counterFuntion);
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    console.log('Log Hijo');
    this.loaded.emit(this.img);
  }
}

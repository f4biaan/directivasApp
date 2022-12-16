import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _mensaje: string = 'Campo requerido';
  private _color: string = 'red';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor: string) {
    // this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
    this.setColor();
  }
  // @Input() mensaje: string = 'Campo requerido';
  @Input() set mensaje (valor: string) {
    // this.htmlElement.nativeElement.innerText = valor;
    this._mensaje = valor;
    this.setMensaje();
  }
  @Input() set valido (valor: boolean) {
    if (valor) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    console.log('Constructor de la directiva');
    console.log(el);

    this.htmlElement = el;
  }

  ngOnInit(): void {
    // console.log('ngOnInit de la directiva');
    // console.log(this.color); // undefined
    // console.log(this.mensaje); // undefined
    this.setEstilo();
    this.setColor();
    this.setMensaje();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // no es eficiente para hace de forma dinamica el cambio de propiedades segun los cambios que se realicen
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}

import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  constructor() {
    console.log('Constructor de la directiva');
  }

  ngOnInit(): void {
    console.log('ngOnInit de la directiva');
  }

}

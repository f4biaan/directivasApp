import {
  Directive,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[customIf]',
})
export class CustomIfDirective /* implements OnDestroy */ {

  @Input() set customIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {
    // console.log('customIf');
  }

  // una opción con el OnDestroy
  /* ngOnDestroy(): void {
    console.log('ngOnDestroy customIf');
  } */
}

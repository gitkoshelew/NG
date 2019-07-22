import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[delayParam__dir]'
})
export class DelayParamDirective {

  @Input() delayParam__dir: number;

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) { }

  ngOnInit(){

    setTimeout(_ =>  {
      this.view.createEmbeddedView(this.template)
    }, this.delayParam__dir * 1000)
  }

}

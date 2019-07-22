import { Directive, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[delay--dir]'
})
export class DelayDirective implements OnInit{

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) { }

  ngOnInit(){

    setTimeout(_ =>  {
      this.view.createEmbeddedView(this.template)
    }, 2000)
  }

}

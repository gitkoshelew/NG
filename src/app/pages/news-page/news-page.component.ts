import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DynamicComponent} from '../../molecules/dynamic/dynamic.component'

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  constructor(private ViewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {

   }

  ngOnInit() {
    setTimeout(_=>{
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
      const componentRef = this.ViewContainerRef.createComponent(componentFactory)
    }, 3000)
  }

}

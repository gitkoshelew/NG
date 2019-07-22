import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { PricePageComponent } from './price-page/price-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: HomePageComponent,
    },
    {
      path: 'about',
      component: AboutPageComponent,
    },
    {
      path: 'news',
      component: NewsPageComponent,
    },
    {
      path: 'product/:id',
      component: ProductPageComponent,
    },
    {
      path: 'price',
      component: PricePageComponent,
      data:{
        title: 'news',
        staticParam: 'anotherParam'
      }
    },
    // {
    //   path: 'layout',
    //   loadChildren: () => import('./layout/layout.module')
    //     .then(m => m.LayoutModule),
    // },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotfoundPageComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

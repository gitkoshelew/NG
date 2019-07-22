import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { KeysPipe } from '../@core/pipes/keys';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { DataService } from '../@core/services/data.service';
import { InterceptService } from '../@core/services/intersept.service';

import { BoldDirective} from '../@core/directives/bold.directive';
import { TimeoutDirective } from '../@core/directives/timeout.directive';
import { DelayDirective } from '../@core/directives/delay.directive';
import { DelayParamDirective } from '../@core/directives/delay-param.directive';
import { ExpAsDirective } from '../@core/directives/expas.directive';

import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { PricePageComponent } from './price-page/price-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';

import { UserComponent } from '../organizms/user/user.component';
import { HeaderComponent } from '../organizms/header/header.component';
import { FooterComponent } from '../organizms/footer/footer.component';
import { NavlistComponent } from '../organizms/navlist/navlist.component';
import { FormComponent } from '../organizms/form/form.component';
import { FormModelComponent } from '../organizms/form-model/form-model.component';
import { FormModelchangeComponent } from '../organizms/form-modelchange/form-modelchange.component';
import { MainComponent } from './main/main.component';
import { ButtonComponent } from '../molecules/button/button.component';
import { DynamicComponent } from '../molecules/dynamic/dynamic.component';
import { ProductPageComponent } from './product-page/product-page.component';

const API_BASE_URL = new InjectionToken<string>('API_BASE_URL')

@NgModule({
  declarations: [
    KeysPipe,
    BoldDirective,
    TimeoutDirective,
    DelayDirective,
    DelayParamDirective,
    ExpAsDirective,
    PagesComponent,
    HomePageComponent,
    AboutPageComponent,
    NewsPageComponent,
    ProductPageComponent,
    PricePageComponent,
    NotfoundPageComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    NavlistComponent,
    FormComponent,
    FormModelComponent,
    FormModelchangeComponent,
    MainComponent,
    ButtonComponent,
    DynamicComponent
  ],
  entryComponents:[
    DynamicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers:[
    // { token, recipe }
    { provide : API_BASE_URL, useValue: 'api.mysite.com'},
    // { provide : DataService, useClass: DataService}
    DataService,
    { provide : HTTP_INTERCEPTORS, useClass: InterceptService, multi: true }
    // { provide: DataService, useFactory: function(){
    //   return new DataService()
    // }, deps: [/*dependencies*/]},
    // { provide : DataService, useExisting: DataService},
  ]
})
export class PagesModule { }

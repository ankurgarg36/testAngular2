import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app-component/app.component';
import {HomeRoutingModule, routedComponents} from './home-routing.module';
import {HeaderComponent} from './header-component/header.component';
import {FooterComponent} from './footer-component/footer.component';
import {BottomBlockComponent} from './bottom-block-component/bottom-block.component';
import {TopArrivalComponent} from './top-arrival-component/top-arrival.component';
import {APP_CONFIG, AppConfig} from '../../app-config.constants';
import {HomeTabComponent} from './home-tab-component/home-tab.component';
import {NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProductModule} from '../product/product.module';
import {LoadersCssModule} from 'angular2-loaders-css';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BottomBlockComponent,
    TopArrivalComponent,
    routedComponents,
    HomeTabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductModule,
    HomeRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    LoadersCssModule,
    NgbCarouselModule
  ],
  providers: [{provide: APP_CONFIG, useValue: AppConfig}],
  bootstrap: [AppComponent, HeaderComponent]
})
export class HomeModule {
}

import {NgModule, OnInit} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {HomeComponent} from './home-component/home.component';
import {PageNotFoundComponent} from './page-not-found-component/page-not-found.component';
import {ContactComponent} from './contact-component/contact.component';
import {AboutUsComponent} from './about-us-component/about-us.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}

export const routedComponents = [HomeComponent, ContactComponent, AboutUsComponent, PageNotFoundComponent];

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {DemoComponent} from './demo.component';
import {TestComponent} from './test.component';

const appRoutes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'demo', component: DemoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
      DemoComponent,
      TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

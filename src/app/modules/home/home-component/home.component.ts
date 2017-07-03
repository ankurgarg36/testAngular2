import {Component, ElementRef, Inject} from '@angular/core';

import {NavigationEnd, Router} from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  moduleId: module.id,
  selector: 'home-component',
  templateUrl: 'home.component.html',
})

export class HomeComponent {
  elementRef: ElementRef;
  constructor(
    @Inject(ElementRef) elementRef: ElementRef,
    private router: Router,
    config: NgbCarouselConfig
  ) {
    config.interval = 4000;
    config.wrap = true;
    this.elementRef = elementRef;
    router.events.subscribe((myEvent) => {
      if (myEvent instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}

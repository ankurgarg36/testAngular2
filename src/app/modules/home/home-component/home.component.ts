import {Component, OnInit, ElementRef, Inject, ViewEncapsulation} from '@angular/core';

// import 'assets/js/jquery-1.11.3.min.js';
import 'assets/js/jquery.bxslider.js';
import {Router, NavigationEnd} from '@angular/router';

// declare var jQuery: any;
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'home-component',
  styleUrls : ['jquery.bxslider.css'],
  templateUrl: 'home.component.html',
  encapsulation: ViewEncapsulation.None,
})

export class HomeComponent implements OnInit {
  elementRef: ElementRef;

  constructor(
    @Inject(ElementRef) elementRef: ElementRef,
    private router: Router) {
    this.elementRef = elementRef;
    router.events.subscribe((myEvent) => {
      if (myEvent instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    $(this.elementRef.nativeElement).find('.bxslider').bxSlider({
       infiniteLoop: true,
       hideControlOnEnd: false,
      auto: true
     });
  }
}

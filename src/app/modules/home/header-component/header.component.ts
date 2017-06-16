import { Component } from '@angular/core';
import {MenuLinks} from '../../../app-config.constants';

@Component({
  moduleId: module.id,
  selector: 'header-component',
  templateUrl: 'header.component.html'
})

export class HeaderComponent {
  public menuLinks;
  constructor() {
    this.menuLinks = MenuLinks;
  }
}

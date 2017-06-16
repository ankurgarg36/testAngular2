import {Component} from '@angular/core';
import {MenuLinks} from '../../../app-config.constants';

@Component({
  moduleId: module.id,
  selector: 'bottom-block',
  templateUrl: 'bottom-block.component.html'
})

export class BottomBlockComponent {
  public footerLinks1;
  public footerLinks2;
  public footerLinks3;
  constructor() {
    this.footerLinks1 = MenuLinks.slice(0, 2);
    this.footerLinks2 = MenuLinks.slice(2, 4);
    this.footerLinks3 = MenuLinks.slice(4, 6);
  }
}

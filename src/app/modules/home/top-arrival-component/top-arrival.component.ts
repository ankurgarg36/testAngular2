import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../../services/home.service';

@Component({
  moduleId: module.id,
  selector: 'top-arrival',
  templateUrl: 'top-arrival.component.html',
  providers: [HomeService]
})

export class TopArrivalComponent implements OnInit {

  public topArrivals;

  constructor(private _homeService: HomeService) {}

  ngOnInit(): void {
    this._homeService.getTopArrivals().then(topArr => {this.topArrivals = topArr;
    });
  }

}

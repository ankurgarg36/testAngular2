import {Injectable, Inject} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {TopArrival} from '../modules/home/top-arrival-component/top-arrival';
import {APP_CONFIG} from '../app-config.constants';
import {Contact} from '../modules/home/contact-component/contact.interface';
// import {Observable} from 'rxjs/Observable';
import {IAppConfig} from '../app-config.interface';

@Injectable()
export class HomeService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, @Inject(APP_CONFIG) private config: IAppConfig) {
    this.headers.append('Access-Control-Allow-Origin', 'true');
  }

  getTopArrivals(): Promise<TopArrival[]> {
    return this.http.get(this.config.apiEndpoint + 'top-arrival.php')
      .toPromise()
      .then(response => {
        return response.json().data as TopArrival[];
      })
      .catch(this.handleError);
  }

  saveContactForm(contact: Contact): Promise<any> {
    return this.http
        .post(this.config.apiEndpoint + 'save-contact.php', JSON.stringify(contact))
        .toPromise()
      .then((response) => <any>response.json())
      .catch(this.handleError);
  }

/*  private post(hero: Hero): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify(hero))
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }*/

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  /*private handleNewError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }*/

}

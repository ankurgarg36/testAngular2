import {InjectionToken} from '@angular/core';
import {IAppConfig} from './app-config.interface';
import {environment} from '../environments/environment';


export const AppConfig: IAppConfig = {
    apiEndpoint: environment.apiEndpoint
};

export let APP_CONFIG = new InjectionToken<IAppConfig>('app.config');


export const MenuLinks = [
    {url: '/home', text: 'Home'},
    {url: '/about-us', text: 'About Us'},
    {url: '/product/sarees', text: 'Sarees'},
    {url: '/product/suit', text: 'Suit-Salvar'},
    {url: '/product/lengha', text: 'Lengha-Chunni'},
    {url: '/contact', text: 'Contact Us'},
    {url: '/product/upload', text: 'upload'},
];

export const ProductType = {
    saree: 1,
    suit: 2,
    lengha: 3,
};

export const ProductCategory = {
    saree: 'saree',
    suit: 'suit',
    lengha: 'lengha',
};

export const PriceRange = [
    {range: '0-1000', text: 'less than 1000'},
    {range: '1000-1500', text: '1000-1500'},
    {range: '1500-2000', text: '1500-2000'},
    {range: '2000-3000', text: '2000-3000'},
    {range: '3000', text: 'Above 3000'}
];

export const Regex = {
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
};

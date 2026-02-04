import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CarsComponent } from './page/cars/cars.component';
import { BrandsComponent } from './page/brands/brands.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'cars',
        component: CarsComponent
    },
    {
        path:'brand',
        component: BrandsComponent
    }
];

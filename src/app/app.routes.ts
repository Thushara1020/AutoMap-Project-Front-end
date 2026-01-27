import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CarsComponent } from './page/cars/cars.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'cars',
        component: CarsComponent
    }
];

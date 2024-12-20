import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmplistComponent } from './emplist/emplist.component';
import { AboutComponent } from './about/about.component';
import { FeaturedComponent } from './featured/featured.component';

export const routes: Routes = [
    {path: 'employees', component: EmplistComponent, title: 'Employees'}, // EDIT TITLES
    {path: 'about', component: AboutComponent, title: 'About'},           // EDIT TITLES
    {path: 'featured', component: FeaturedComponent, title: 'Featured'},  // EDIT TITLES
    {path: '', component: HomeComponent, title: 'Home'},                  // EDIT TITLES
];

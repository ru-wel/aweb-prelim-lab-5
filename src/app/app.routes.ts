import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmplistComponent } from './emplist/emplist.component';
import { AboutComponent } from './about/about.component';
import { FeaturedComponent } from './featured/featured.component';

export const routes: Routes = [
    {path: 'employees', component: EmplistComponent, title: 'EMPLOYEES | SOC'}, // EDIT TITLES
    {path: 'about', component: AboutComponent, title: 'ABOUT | SOC'},           // EDIT TITLES
    {path: 'featured', component: FeaturedComponent, title: 'COURSES | SOC'},  // EDIT TITLES
    {path: '', component: HomeComponent, title: 'HOME | SOC'},                  // EDIT TITLES
];

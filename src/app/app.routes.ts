import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmplistComponent } from './emplist/emplist.component';
import { AboutComponent } from './about/about.component';
import { FeaturedComponent } from './featured/featured.component';

export const routes: Routes = [
    {path: 'employees', component: EmplistComponent},
    {path: 'about', component: AboutComponent},
    {path: 'featured', component: FeaturedComponent},
    {path: '', component: HomeComponent},
];

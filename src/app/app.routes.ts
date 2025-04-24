import {Routes} from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {RulesComponent} from './features/rules/rules.component';

export const routes: Routes = [
  {
    title: 'Home',
    path: 'home',
    component: HomeComponent
  },
  {
    title: 'Rules',
    path: 'rules',
    component: RulesComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

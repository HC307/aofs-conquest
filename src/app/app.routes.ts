import {Routes} from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {RulesComponent} from './features/rules/rules.component';
import {GeneratorsComponent} from './features/generators/generators.component';

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
    title: 'Generators',
    path: 'generators',
    component: GeneratorsComponent,

  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

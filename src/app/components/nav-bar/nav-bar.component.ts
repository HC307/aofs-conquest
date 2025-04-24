import {Component} from '@angular/core';
import {routes} from '../../app.routes';
import {NavLinkComponent} from '../generic/nav-link/nav-link.component';
import {PanelComponent} from '../generic/panel/panel.component';

@Component({
  selector: 'app-nav-bar',
  imports: [
    NavLinkComponent,
    PanelComponent
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  protected readonly routes = routes;
}

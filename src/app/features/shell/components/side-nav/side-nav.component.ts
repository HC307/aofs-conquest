import {Component} from '@angular/core';
import {routes} from '../../../../app.routes';
import {PanelComponent} from '../../../../components/panel/panel.component';
import {SideNavButtonComponent} from './side-nav-button/side-nav-button.component';

@Component({
  selector: 'app-nav-bar',
  imports: [
    PanelComponent,
    SideNavButtonComponent
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  protected readonly routes = routes;
}

import { Component } from '@angular/core';
import {PanelComponent} from '../generic/panel/panel.component';

@Component({
  selector: 'app-side-nav',
  imports: [
    PanelComponent
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

}

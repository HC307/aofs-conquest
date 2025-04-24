import { Component } from '@angular/core';
import {PanelComponent} from '../generic/panel/panel.component';

@Component({
  selector: 'app-header',
  imports: [
    PanelComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

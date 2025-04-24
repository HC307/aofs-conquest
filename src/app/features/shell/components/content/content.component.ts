import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PanelComponent} from '../../../../components/panel/panel.component';

@Component({
  selector: 'app-content',
  imports: [
    RouterOutlet,
    PanelComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}

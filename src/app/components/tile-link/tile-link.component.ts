import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tile',
  imports: [],
  templateUrl: './tile-link.component.html',
  styleUrl: './tile-link.component.scss'
})
export class TileLinkComponent {
  @Input() route? = '';
}

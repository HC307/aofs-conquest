import {Component} from '@angular/core';
import {PanelComponent} from '../../../../components/panel/panel.component';
import {DropdownSelectComponent} from '../../../../components/dropdown-select/dropdown-select.component';

@Component({
  selector: 'app-tile-generator',
  imports: [
    PanelComponent,
    DropdownSelectComponent
  ],
  templateUrl: './tile-generator.component.html',
  styleUrl: './tile-generator.component.scss'
})
export class TileGeneratorComponent {
  public test = [
    'plane', 'mountain', 'forest'
  ];
}

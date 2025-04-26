import {Component} from '@angular/core';
import {TileGeneratorComponent} from './components/tile-generator/tile-generator.component';

@Component({
  selector: 'app-generators',
  imports: [
    TileGeneratorComponent
  ],
  templateUrl: './generators.component.html',
  styleUrl: './generators.component.scss'
})
export class GeneratorsComponent {

}

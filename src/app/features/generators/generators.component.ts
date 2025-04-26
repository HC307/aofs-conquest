import {Component, DestroyRef, inject} from '@angular/core';
import {TileGeneratorComponent} from './tile-generator/tile-generator.component';
import {GeneratorsSelectors} from './state/generators.selectors';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TileGeneratorConfig} from './tile-generator/tile-generator.config';
import {Store} from '@ngrx/store';
import {AppState} from '../../domain/state/app.state';

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

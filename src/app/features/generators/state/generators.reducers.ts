import {createReducer} from '@ngrx/store';
import {GeneratorsState} from './generators.state';
import {initialTileGeneratorConfig} from '../tile-generator/tile-generator.config';

export const initialGeneratorsState: GeneratorsState = {
  tileGeneratorConfig: initialTileGeneratorConfig,
};

export const generatorsReducer = createReducer(
  initialGeneratorsState,
);

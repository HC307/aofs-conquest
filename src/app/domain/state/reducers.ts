import {AppState} from './app.state';
import {ActionReducerMap} from '@ngrx/store';
import {generatorsReducer, initialGeneratorsState} from '../../features/generators/state/generators.reducers';

export const initialAppState: AppState = {
  generators: initialGeneratorsState,
};

export const reducers: ActionReducerMap<AppState> = {
  generators: generatorsReducer,
};

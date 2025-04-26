import {AppState} from '../../../domain/state/app.state';
import {createSelector} from '@ngrx/store';

export class GeneratorsSelectors {

  private static select = {
    generatorStates: (state: AppState) => state.generators,
  };

  public static tileGeneratorConfig = createSelector(
    this.select.generatorStates,
    (state) => state.tileGeneratorConfig
  );

}

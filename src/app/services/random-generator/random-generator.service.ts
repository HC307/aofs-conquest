import {Injectable} from '@angular/core';
import {TileType} from '../../domain/data/tile.type';
import {TileLocationPrompts} from '../../domain/data/tile-location.prompts';
import _ from 'lodash';
import {TileBuildingPrompts} from '../../domain/data/tile-building.prompts';
import {TilePrompts} from '../../domain/data/tile.prompts';
import {TileGeneratorConfig} from '../../features/generators/tile-generator/tile-generator.config';

@Injectable({
  providedIn: 'root'
})
export class RandomGeneratorService {


  constructor() {
  }

  //#region Tile Prompts

  generateTilePrompt(conf: TileGeneratorConfig, option1?: string, option2?: string,): string {
    let r = '';

    r += this.roll(conf.locationPct) ? this.generateTileLocationPrompt(option1, option2) : '';
    r += this.roll(conf.buildingPct) ? this.generateTileBuildingPrompt(option1, option2) : '';

    return r == '' ? TilePrompts.empty : r;
  }

  generateTileLocationPrompt(option1?: string, option2?: string): string {
    let type1 = this.findTileType(option1);
    let type2 = this.findTileType(option2);

    let filteredPrompts = TileLocationPrompts.filter(prompt => prompt.tiles?.includes(type1) || prompt.tiles?.includes(type2) || prompt.tiles?.length == 0 || !prompt.tiles);

    return this.RandomSelect(filteredPrompts)?.prompt || 'You find yourself outside of reality. Please write a bug report.';
  }

  generateTileBuildingPrompt(option1?: string, option2?: string): string {
    let type1 = this.findTileType(option1);
    let type2 = this.findTileType(option2);

    let filteredPrompts = TileBuildingPrompts.filter(prompt => prompt.tiles?.includes(type1) || prompt.tiles?.includes(type2) || prompt.tiles?.length == 0 || !prompt.tiles);

    return this.RandomSelect(filteredPrompts)?.prompt || 'You find yourself outside of reality. Please write a bug report.';
  }

  //#endregion Tile Prompts

  //#region Util

  private roll(chance: number) {
    return _.random(0, 100) < chance;
  }

  private findTileType(value: string | undefined): TileType {
    return Object.values(TileType).find(tileType => tileType === value) || TileType.NONE;
  }

  private RandomSelect<T>(values: T[]): T | undefined {
    if (values.length == 0) {
      return undefined;
    }

    return values[_.random(0, values.length - 1)];
  }

  //#endregion Util
}

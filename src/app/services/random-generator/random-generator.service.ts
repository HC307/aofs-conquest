import {Injectable} from '@angular/core';
import {TileType} from '../../domain/data/tile.type';
import {TilePrompts} from '../../domain/data/tile-prompts';
import _ from 'lodash';
import {TilePrompt} from '../../domain/model/tile-prompt.type';

@Injectable({
  providedIn: 'root'
})
export class RandomGeneratorService {


  constructor() {
  }

  generateTilePrompt(option1: string | undefined, option2: string | undefined): TilePrompt {
    let type1 = this.findTileType(option1);
    let type2 = this.findTileType(option2);

    let filteredPrompts = TilePrompts.filter(prompt => prompt.tiles?.includes(type1) || prompt.tiles?.includes(type2) || prompt.tiles?.length == 0 || !prompt.tiles);

    return this.RandomSelect(filteredPrompts) || {
      prompt: 'You find yourself outside of reality. Please write a bug report.',
    };
  }

  //#region Util

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

import {Component} from '@angular/core';
import {PanelComponent} from '../../../../components/panel/panel.component';
import {DropdownSelectComponent} from '../../../../components/dropdown-select/dropdown-select.component';
import {TileType} from '../../../../domain/data/tile.type';
import {ButtonComponent} from '../../../../components/button/button.component';
import {RandomGeneratorService} from '../../../../services/random-generator/random-generator.service';

@Component({
  selector: 'app-tile-generator',
  imports: [
    PanelComponent,
    DropdownSelectComponent,
    ButtonComponent
  ],
  templateUrl: './tile-generator.component.html',
  styleUrl: './tile-generator.component.scss'
})
export class TileGeneratorComponent {

  //#region Fields

  public options = Object.values(TileType);
  protected _option1? = '';
  protected _option2? = '';
  private _output = '';

  public get output(): string {
    return this._output;
  }

  public set output(value: string) {
    this._output = value;
  }

  public get option1(): string | undefined {
    return this._option1;
  };

  public get option2(): string | undefined {
    return this._option2;
  };

  public set option1(value: string) {
    this._option1 = value;
  }

  public set option2(value: string) {
    this._option2 = value;
  }

  //#endregion Fields

  //#region Lifecycle

  constructor(
    private randomService: RandomGeneratorService,
  ) {
  }

  //#endregion Lifecycle

  //#region Methods

  public generate() {
    this.output = this.randomService.generateTilePrompt(this.option1, this.option2).prompt;
  }

  disableGenerate() {
    return this.option1 == '' && this.option2 == '';
  }

  //#endregion Methods
}

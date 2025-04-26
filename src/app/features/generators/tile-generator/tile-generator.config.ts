export interface TileGeneratorConfig {
  locationPct: number; // Percentage of locations in the tile
  buildingPct: number; // Percentage of buildings in the tile
  lootPct: number; // Percentage of loot in the tile
  randomEncounterPct?: number; // Percentage of random encounters in the tile
}

export const initialTileGeneratorConfig: TileGeneratorConfig = {
  locationPct: 30,
  buildingPct: 15,
  lootPct: 10,
  randomEncounterPct: 5,
};

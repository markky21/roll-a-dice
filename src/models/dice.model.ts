export interface IDiceBeforeThrow {
  throwConfig: IDiceThrowConfig;
}

export interface IDiceAfterThrow {
  throwConfig: IDiceThrowConfig;
  result: number[];
}

export enum Dice {
  D4 = 'd4',
  D6 = 'd6',
  D8 = 'd8',
  D10 = 'd10',
  D12 = 'd12',
  D20 = 'd20',
  D100 = 'd100',
}

export interface IDiceVector {
  x: number;
  y: number;
}

export interface IDiceThrowConfig {
  vectors: IDiceVector[];
  boost: number;
  dist: number;
}

export interface INewDiceThrowResult {
  [Dice.D4]?: number[];
  [Dice.D6]?: number[];
  [Dice.D8]?: number[];
  [Dice.D10]?: number[];
  [Dice.D12]?: number[];
  [Dice.D20]?: number[];
  [Dice.D100]?: number[];
}

export interface IDiceSet {
  [Dice.D4]?: number;
  [Dice.D6]?: number;
  [Dice.D8]?: number;
  [Dice.D10]?: number;
  [Dice.D12]?: number;
  [Dice.D20]?: number;
  [Dice.D100]?: number;
}

export interface IDiceThrow {
  diceSet: IDiceSet;
  diceThrowConfig: IDiceThrowConfig;
  result: INewDiceThrowResult;
}

export interface IDiceBeforeThrow {
  vectors: any;
  notation: any;
  throwRequestResult: number[];
  emitResult: boolean;
}

export interface IDiceThrowResult {
  diceSet: string;
  throwRequestResult: number[];
  emit: boolean;
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

interface IDiceVector {
  set: Dice;
  pos: {
    x: number;
    y: number;
    z: number;
  };
  velocity: {
    x: number;
    y: number;
    z: number;
  };
  angle: {
    x: number;
    y: number;
    z: number;
  };
  axis: {
    x: number;
    y: number;
    z: number;
    a: number;
  };
}

export interface IDiceThrow {
  diceSet: string;
  throwRequestResult: number[];
}

import { Dice, IDiceSet, INewDiceThrowResult } from '../models/dice.model';
import { DiceRoller } from 'rpg-dice-roller';

const roller = new DiceRoller();

export const diceUtils = {
  diceSetToString: (dices: IDiceSet): string => {
    return Object.keys(dices)
      .map(diceName => (!!dices[diceName] ? dices[diceName] + diceName : ''))
      .filter(dice => !!dice.length)
      .join('+');
  },

  generateThrowResultFromDiceSet: (diceSet: IDiceSet): INewDiceThrowResult => {
    let diceTrowResult: INewDiceThrowResult = {};

    Object.keys(diceSet).forEach(diceKey => {
      if (!diceSet[diceKey]) return;
      const rollSet = diceKey === Dice.D100 ? `${diceSet[diceKey]}${Dice.D10}` : `${diceSet[diceKey]}${diceKey}`;
      // @ts-ignore
      let rollOutput = /\[(.*)\]/
        .exec(roller.roll(rollSet))[1]
        .split(/,\s?/)
        .map(d => +d);

      if (diceKey === Dice.D100) {
        rollOutput = rollOutput.map(d => (d === 10 ? 0 : d * 10));
      }
      diceTrowResult[diceKey] = [...rollOutput];
    });

    return diceTrowResult;
  },

  sortDiceFunction: (a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)),

  sortObjectWithDiceKey: (obj: { [key: string]: any }): { [key: string]: any } => {
    const result: { [key: string]: any } = {};
    Object.keys(obj)
      .sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)))
      .forEach(diceKey => (result[diceKey] = obj[diceKey]));
    return result;
  },
};

export function diceSetToString(dices: { [key: string]: Number }) {
  return Object.keys(dices)
    .map(diceName => (!!dices[diceName] ? dices[diceName] + diceName : ''))
    .filter(dice => !!dice.length)
    .join('+');
}

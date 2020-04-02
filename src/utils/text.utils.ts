export const firstLettersJoined: (sentence: string) => string = sentence =>
  sentence
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .substring(0, 2)
    .toUpperCase();

/// <reference path="./global.d.ts" />
// @ts-check

export function getFirstCard(deck) {
  const [first] = deck;
  return first;
}

export function getSecondCard(deck) {
  const [, second] = deck;
  return second;
}

export function swapTwoCards(deck) {
  const [a, b] = deck;
  return [b, a];
}

export function shiftThreeCardsAround(deck) {
  const [a, b, c] = deck;
  return [b, c, a];
}

export function pickNamedPile(piles) {
  // pas piles.chosen
  const { chosen } = piles;
  return chosen;
}

export function swapNamedPile(piles) {
  // pas piles.chosen ni piles.disregarded
  const { chosen: disregarded, disregarded: chosen } = piles;

  // ne touche pas, c’est voulu par l’exercice
  return { chosen, disregarded };
}

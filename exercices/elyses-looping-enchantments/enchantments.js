// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  let counter = 0;

  // call stack pour une pile d'exécution : gére l ordre d'exécution des fonctions
  // appel et ajoute a la pile, appel et ajoute a la pile, etc.... UNE SEULE PILE D EXECUTION A LA FOIS
  stack.forEach((number) => {
    if (number === card) {
      counter++;
    }
  });
  return counter;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop

  // ? condense le if else
  // condition ? valeurSiVrai : valeurSiFaux
  const rest = type ? 0 : 1;

  let count = 0;

  // for of parcourt directement les valeurs : const VARIABLE of ITERABLE donc variable prend directement la valeur de itérable
  // % divise par 2
  for (const card of stack) {
    if (card % 2 === rest) {
      count += 1;
    }
  }

  return count;
}

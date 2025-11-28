// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {

    //math.floor = entier entre 0 et 8999 + 1000 = entier entre 1000 et 9000
    // math.random * 9000 parce que je veux un nombre entre 0 et 9000
const number = Math.floor(Math.random() * 9000) + 1000;

// backtick pour insérer une variable
return `NCC-${number}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {

  return Math.random() * 1000 + 41000;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {

  // en maj = constante fixe jamais modifié
  const CLASSES = 'DHJKLMNRTY' ;

  // .length = nbr entre 0 et length
  const index = Math.floor(Math.random() * CLASSES.length);

  return CLASSES[index];
}

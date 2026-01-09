// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Return each wagon's id in form of an array.
 *
 * @param {...number} ids
 * @returns {number[]} wagon ids
 */
export function getListOfWagons(...ids) {
  return ids;
}

// avec ...qqch on récupére/copie ce qu il y a dedans

// ...rest récupére le reste
export function fixListOfWagons([firstWagon, secondWagon, ...rest]) {
  // ... fais une copie crée retourne nouveau tableau
  // ... c est un tableau qui contient les élément du tableau original
  // ... pour copier ou décomposer un tableau en un nouveau tableau élément par élément, ne modifie pas original,
  // ...rest sépare les élément
  return [...rest, firstWagon, secondWagon];
}

export function correctListOfWagons([locomotiveId, ...rest], missingWagons) {
  // met tout dans 1 tableau dans l'ordre voulu
  return [locomotiveId, ...missingWagons, ...rest];
}

export function extendRouteInformation(information, additional) {
  // Fusionne 2 objet et onleve les doublons
  return { ...information, ...additional };
}

export function separateTimeOfArrival({ timeOfArrival, ...rest }) {
  // extrait timeOfArriv + reste et copie dans une nouveau tableau
  return [timeOfArrival, rest];
}

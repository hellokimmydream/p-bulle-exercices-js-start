//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {

   // crée une nouvelle date a partir de date
   // getDate retourne un nombre milliseconde écoulee despuis une date = date + 1 gigaseconde = cree une date
  return new Date(date.getTime() + 1000000000000);
};

//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


// convertir une année sur terre et ajuster l année a une planete
  // 1 an terrestre = 31557600 sec
  // convertir sec en année sur terre 
  // planete n existe pas = throw error
  // diviser par le nombre de la planete
  // arrondir à 2 decimal

const ORBITAL_PERIOD = {
  mercury : 0.2408467,
  venus : 0.61519726 ,
  earth : 1.0,
  mars : 1.8808158,
  jupiter : 11.862615,
  saturn : 29.447498,
  uranus : 84.016846 ,
  neptune : 164.79132,
};



export const age = (planet, secondes) => {
const SEC_PAR_AN = 31557600;

// verification planete valide
if (!ORBITAL_PERIOD[planet])
{
  throw new Error("not a planet");
}

const anneeTerre = secondes / SEC_PAR_AN;

// converti pour une planete
const result = anneeTerre / ORBITAL_PERIOD[planet];

// toFixed garde un nombre avec un nombre précis de decimale et arrondit
return Number(result.toFixed(2));

};




/*
| Planet  | Orbital period in Earth Years |
| ------- | ----------------------------- |
| Mercury | 0.2408467                     |
| Venus   | 0.61519726                    |
| Earth   | 1.0                           |
| Mars    | 1.8808158                     |
| Jupiter | 11.862615                     |
| Saturn  | 29.447498                     |
| Uranus  | 84.016846                     |
| Neptune | 164.79132        
*/
// @ts-check

// transforme un tableau de chiffres en nombre
function digitsToNumber(digits) {
  return Number(digits.join(""));
}

// addition de deux tableaux représentant des nombres
export function twoSum(array1, array2) {
  let i = array1.length - 1;
  let j = array2.length - 1;
  let carry = 0;
  const result = [];

  while (i >= 0 || j >= 0 || carry > 0) {
    const d1 = i >= 0 ? array1[i] : 0;
    const d2 = j >= 0 ? array2[j] : 0;

    const sum = d1 + d2 + carry;
    result.unshift(sum % 10);
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return digitsToNumber(result);
}

// vérifie si un nombre est un palindrome
export function luckyNumber(value) {
  const str = String(value);
  return str === str.split("").reverse().join("");
}

// retourne le message d’erreur selon l’input
export function errorMessage(input) {
  // champ vide
  if (input === "" || input === null || input === undefined) {
    return "Required field";
  }

  const trimmed = input.trim();
  const number = Number(trimmed);

  // pas un nombre valide ou égal à 0
  if (Number.isNaN(number) || number === 0) {
    return "Must be a number besides 0";
  }

  return "";
}

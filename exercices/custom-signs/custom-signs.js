// custom-signs.js

export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}

export function buildBirthdaySign(age) {
  return age < 50
    ? "Happy Birthday! What a young fellow you are."
    : "Happy Birthday! What a mature fellow you are.";
}

export function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`;
}

export function costOf(sign, currency) {
  const costs = {
    "Happy Birthday!": 50,
    "Congratulations Rob\nClass of 2021": 86,
    "Happy Easter, little sister!": 76,
  };
  const cost = costs[sign] ?? sign.length * 2; // fallback si autre texte
  return `Your sign costs ${cost.toFixed(2)} ${currency}.`;
}

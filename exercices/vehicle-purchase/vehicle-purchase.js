// @ts-check

export function needsLicense(kind) {
  return kind === "car" || kind === "truck";
}

export function chooseVehicle(option1, option2) {
  const best = option1.localeCompare(option2) <= 0 ? option1 : option2;
  return best + " is clearly the better choice.";
}

export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8;
  }

  if (age > 10) {
    return originalPrice * 0.5;
  }

  return originalPrice * 0.7;
}

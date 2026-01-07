// @ts-check

export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

export function limesToCut(wedgesNeeded, limes) {
  if (wedgesNeeded <= 0) return 0;

  let wedges = 0;
  let cut = 0;

  const wedgeBySize = {
    small: 6,
    medium: 8,
    large: 10,
  };

  while (cut < limes.length && wedges < wedgesNeeded) {
    wedges += wedgeBySize[limes[cut]] ?? 0;
    cut++;
  }

  return cut;
}

export function remainingOrders(timeLeft, orders) {
  let time = timeLeft;
  let index = 0;

  // tant qu'il reste du tps on commence une commande
  while (index < orders.length && time > 0) {
    time -= timeToMixJuice(orders[index]);
    index++;
  }

  // renvoit les commandes non commencées
  return orders.slice(index);
}

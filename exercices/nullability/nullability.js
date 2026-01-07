// @ts-check

export function printBadge(id, name, department) {
  let result = "";

  // id seulement si existe
  if (id !== null) {
    result = "[" + id + "] ";
  }

  // nom toujours présent
  result = result + name + " - ";

  // Département ou OWNER
  if (department === null) {
    result = result + "OWNER";
  } else {
    result = result + department.toUpperCase();
  }

  return result;
}

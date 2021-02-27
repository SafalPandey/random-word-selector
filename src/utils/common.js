/**
 * Returns a random element from given array.
 *
 * @param {any[]} array
 */
export function getRandomElement(array) {
  const randIndex = Math.floor(Math.random() * array.length);

  return array[randIndex];
}

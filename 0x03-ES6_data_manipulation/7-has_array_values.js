export default function hasValuesFromArray(set, array) {
  const result = array.map((item) => (set.has(item)));
  return !result.includes(false);
}

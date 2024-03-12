export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const myArray = Array.from(set).filter((item) => item.startsWith(startString));
  const newArray = myArray.map((item) => item.slice(startString.length));
  return newArray.join('-');
}

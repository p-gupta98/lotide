
// Middle Function
const middle = function(array) {
  const middleIndex = Math.floor((array.length - 1) / 2);
  const evenIndexOne = (array.length) / 2;
  const evenIndexTwo = evenIndexOne - 1;
  const newArray = [];
  if (array.length === 1 || array.length === 2) {
    return newArray;
  } else if (array.length % 2 !== 0) {
    newArray.push(array[middleIndex]);
  } else {
    newArray.push(array[evenIndexTwo], array[evenIndexOne]);
  }
  return (newArray);
}

module.exports = middle;

// Head Function Implementation

const head = function(array, firstElement) {
  
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

module.exports = head;
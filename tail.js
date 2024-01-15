// Tail function implementaion
const tail = function(array) {
  if (array.length === 0) {
    return [];
  }

  let tailEnd = array.slice(1);
  return tailEnd;

};

module.exports = tail;

// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined || towelSort.arguments.length === 0) return [];

  return matrix.reduce((newArr, item, i) => {
    i % 2 === 0 ? newArr.push(item) : newArr.push(item.reverse());
    return newArr.flat();
  }, [])
}

// newArr.push(matrix[i], matrix[j].reverse())
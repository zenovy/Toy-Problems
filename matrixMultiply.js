function getColumn (matrix, colNum) {
  var column = [];
  for (var i = 0; i < matrix.length; i++) {
    column.push(matrix[i][colNum]);
  }
  return column;
}

function matrixMultiply (matrixA, matrixB) {
  var productMatrix = [];
  for (var i = 0; i < matrixA.length; i++) {
    var rowA = matrixA[i];
    var productRow = [];
    for (var j = 0; j < matrixB[0].length; j++) {
      var columnB = getColumn(matrixB, j);
      var sum = 0;
      for (var k = 0; k < rowA.length; k++) {
        if (!rowA[k] || !columnB[k]) {
          throw new Error('Unequal number of rows and columns!');
        }
        sum += rowA[k] * columnB[k];
      }
      productRow.push(sum);
    }
    productMatrix.push(productRow);
  }
  return productMatrix;
}

matrixA = [[1,2,3]];
matrixB = [[1],[2],[3]];
console.log(matrixMultiply(matrixA, matrixB));

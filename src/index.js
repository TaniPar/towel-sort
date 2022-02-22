
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if(matrix === null || matrix === undefined){
    return arr;
  } else {
  const length = matrix.length;
  for(let i = 0; i < length; i++){
    if( i % 2 === 0){
      let arr1 = matrix[i];
      for(let j = 0; j < arr1.length; j++){
        arr.push(matrix[i][j]);
      }
    } else {
      let arr2 = matrix[i];
      for(let x = arr2.length - 1; x >= 0; x--){
        arr.push(matrix[i][x]);
      }
  }
}
return arr;
  }
  
}


// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) return []
    for (let i = 0; i < matrix.length; i++) {
        if(i%2===0) matrix[i].sort(sortPlus)
        else matrix[i].sort(sortMinus)
    }
  return matrix.reduce((a,arr) => a.concat(arr),[]);
}

function sortPlus(a,b) {
if(a>b) return 1;
if(a<b) return -1;
if (a===b) return 0
}

function sortMinus(a,b) {
    if(a>b) return -1;
    if(a<b) return 1;
    if (a===b) return 0
}




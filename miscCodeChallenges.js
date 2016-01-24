
function isSumPossibleZ(array, sum, count) {

  if ( !Array.isArray(array) || sum <= 0 || count <= 0 ) return 0;

  function recurse(series, target, num, size, depth) {
    var lastIndex = size-1, lastValue = series[lastIndex];
    if (target===0) return depth === num ? 1 : 0;
    if (size===0 && target!=0) return 0;
    if (lastValue>target) return recurse(series, target, num, lastIndex, depth+1);
    var targetLessValue = target - lastValue;
    return recurse(series, target, num, lastIndex, depth) ||
      recurse(series, targetLessValue, num, lastIndex, depth + 1);
  }

  return recurse(array.sort(function(a, b) {
    return b - a;
  }), sum, count, array.length, 0);

}

console.log('A few test cases');
console.log(isSumPossibleZ([5,5,3], 10, 2)); // 1 ==> 5 + 5 === 10
console.log(isSumPossibleZ([3,5,5,3], 8, 2)); // 1 ==> 3 + 5 === 8
console.log(isSumPossibleZ([3,15,4,5,-1,12,7], 19, 4)); // 1 ==> 3 + 4 + 5 + 7 === 19
console.log(isSumPossibleZ([8,7,6,5,4,3,2,1,0,-1,-2], 7, 2)); // 1 => 7 + 0 === 7
console.log(isSumPossibleZ([8,7,6,5,4,3,2,1,0,-1,-2], 7, 3)); // 1 => 7 + 1 + (-1) === 7, etc.


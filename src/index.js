function checkArray(array) {
  return array instanceof Array && array.length != 0;
}

exports.min = function min (array) {
if(checkArray(array)){
  return array.sort((a,b) => a - b)[0];
}
return 0;
}

exports.max = function max (array) {
if(checkArray(array)){
  return array.sort((a,b) => b - a)[0];
}
return 0;
}

exports.avg = function avg (array) {
if(checkArray(array)){
  return array.reduce((sum, curr) => sum + curr)/array.length;
}
return 0;
}


exports.min = function min (array) {
    if (!array || array.length == 0) {
        return 0;
      }  
      let min = array[0];
      array.forEach((e)=> {
        if (min > e) {
          min = e;
        }
      });
      return min;
}

exports.max = function max (array) {
    if (!array || array.length == 0) {
        return 0;
      }  
      let max = array[0];
      array.forEach((e)=> {
        if (max < e) {
          max = e;
        }
      });
      return max;
}

exports.avg = function avg (array) {
    if (!array || array.length == 0) {
        return 0;
      }  
      let sum = 0;
      array.forEach((e)=> {
        sum += e
      });
      return sum/array.length;
}

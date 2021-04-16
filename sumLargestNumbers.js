const sumLargestNumbers = function(data) {
  let largest = data[0]
  let secLargest = data[1]


  if(largest > secLargest) {
    largest = data[0];
    secLargest = data[1];
  } else {
    secLargest = data[0];
    largest = data[1];
  }

  for(let i = 2; i < data.length; i++) {
    if(data[i] > largest) {
      secLargest = largest
      largest = data[i]
    }
    else if(data[i] > secLargest) {
      secLargest = data[i]
    }
  }

  let sum = largest + secLargest
  return sum

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

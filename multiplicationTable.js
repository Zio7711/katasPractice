const multiplicationTable = function(maxValue) {
  result = ""

  for(let x = 1; x <= maxValue; x++) {
    for(let i = x; i <= maxValue * x; i += x) {
      result += i  
      result += ' ' 
    }
    result += '\n'

  }

  return result
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
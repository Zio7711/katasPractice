const repeatNumbers = function(data) {
  let result = ""
  for(let i = 0; i < data.length; i++) {
    let x = 1
    while(x <= data[i][1]) {
      result += data[i][0]
      x += 1
    }
    result += ','
  
  }
  result = result.slice(0,result.length - 1)
  return result
  

};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
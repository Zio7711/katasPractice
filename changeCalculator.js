const calculateChange = function(total, cash) {
  let changeNum = cash - total
  let keys = ['twenty', 'ten', 'five', 'two', 'one', 'quarter', 'dime', 'nickel', 'penny']
  let numbers = [2000, 1000, 500, 200, 100, 25, 10, 5, 1]
  let values = [0,0,0,0,0,0,0,0,0]
  let obj = {}

  for(let i = 0; i < numbers.length; i++) {
    if(changeNum > 0) {
      values[i] = Math.floor(changeNum / numbers[i])
    changeNum -= values[i] * numbers[i]}
  }

  for(let i = 0; i < keys.length; i++) {
    if(values[i] != 0) {
      obj[keys[i]] = values[i]
    }
  }
  return obj
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

const camelCase = function(input) {
  let array = input.split(" ");
  let result = ""
  for(let i = 1; i < array.length; i++) {
    result = result + array[i][0].toUpperCase() + array[i].slice(1)
  }
  return array[0] + result
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
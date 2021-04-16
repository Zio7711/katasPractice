const numberOfVowels = function(data) {
  let sum = 0
  data = data.toLowerCase()
  for(let i = 0; i < data.length; i ++){
    if(data[i] == 'a' || data[i] == 'e' || data[i] == 'i' || data[i] == 'o' || data[i] == 'u') {
      sum += 1
    }
  }
  return sum
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
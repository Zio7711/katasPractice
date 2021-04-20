const squareCode = function(message) {
  message = message.replace(/ /g, '')
  let newM = []
  let result = ""
  let numText = Math.ceil(Math.sqrt(message.length))
  //console.log(message)

  for(let i = 0; i < message.length; i += numText) {
    let n = message.slice(i, i + numText) 
    newM.push(n)
      } 
  //console.log(newM)

  while(newM.join("") != false){
    for(let i = 0; i < newM.length; i++) {
      if(newM[i][0] != undefined) {
        result += newM[i][0]
        newM[i] = newM[i].slice(1)
      }
    }
    result += ' '
  } 
  
  return result
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
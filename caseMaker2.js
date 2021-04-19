function toCamel(input, cases) {
  let result = ""
  let x = input.toLowerCase()
  x = x.split(" ")
  for(let i of x) {
    let z = i[0].toUpperCase() + i.slice(1)
    result += z
  }
  result = result[0].toLowerCase() + result.slice(1)
  return result
}

function toPascal(input, cases) {
  let result = ""
  let x = input.toLowerCase()
  x = x.split(" ")
  for(let i of x) {
    let z = i[0].toUpperCase() + i.slice(1)
    result += z
  }
  return result
}

function toSnake(input, cases) {
  let result = ""
  let x = input.toLowerCase()
  x = x.split(" ")

  for(let i of x) {
    result += i + "_"
  }
  result = result.slice(0, result.length - 1)
  return result
}

function toKebab(input, cases) {
  let result = ""
  let x = input.toLowerCase()
  x = x.split(" ")
  for(let i of x) {
    result += i + "-"
  }
  result = result.slice(0, result.length - 1)
  return result 
}

function toTitle(input, cases){
  let result = ""
  let x = input.toLowerCase()
  x = x.split(" ")
  for(let i of x) {
    z = i[0].toUpperCase() + i.slice(1)
    result += z + " "
  }
  result = result.slice(0, result.length - 1)
  return result 
}

function toVowel(input, cases){
  let result = ""
  let x = input.toLowerCase()
  x = x.split(" ")
  for(let i of x) {
    for(let q of i) {
      if(q === "a" || q === "e" || q === "i" || q === "o" || q === "u") {
        q = q.toUpperCase()
      } 
      result += q
    }      
  result += ' '    
  }
  return result
}

function toConsonant(input, cases) {
  let result = ""
  let x = input.toLowerCase()
  x = x.split(" ")
  for(let i of x) {
    for(let q of i) {
      if(! (q === "a" || q === "e" || q === "i" || q === "o" || q === "u")) {
        q = q.toUpperCase()
      } 
      result += q
    }      
  result += ' '    
  }
  return result
}

const makeCase = function(input, cases) {
  if(Array.isArray(cases)){
    let result = ""
    for(let p of cases) {
    switch(p) {
      case "camel":
        result = toCamel(input, p)
        break;
      case "pascal":
        result = toPascal(input, p)  
        break;     
      case "snake":
        result = toSnake(input, p)
        break;
      case "kebab":
        result = toKebab(input, p)
        break;  
      case "title":
        result = toTitle(input, p)
        break;
    }
  } 
  for(let i of cases) {
    switch(i) {
      case "vowel":
        result = toVowel(input, i)

      case "consonant":
        result = toConsonant(input, i)
    }
  }

  for(let i of cases) {
    if(i === 'upper') {
      
      result = result.toUpperCase()
    }else if(i === 'lower') {
      result = result.toLowerCase()
    }
  } 

return result 

  }

  else {
    switch(cases) {
      case "camel":
        return toCamel(input, cases)

      case "pascal":
        return toPascal(input, cases)
      
      case "snake":
        return toSnake(input, cases)

      case "kebab":
        return toKebab(input, cases)

      case "title":
        return toTitle(input, cases)
      
      case "vowel":
        return toVowel(input, cases)

      case "consonant":
        return toConsonant(input, cases)
    }   
  }
}
      

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
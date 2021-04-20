const urlDecode = function(texts) {
  obj = {}
  texts = texts.replace(/&/g, ' ')
  texts = texts.split(' ')

  for(let text of texts) {
    text = text.replace(/=/g, ' ')
    text = text.split(' ')
    let value = text[1].replace(/%20/g, ' ')
    obj[text[0]] = value
  }
  return obj   
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
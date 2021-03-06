const PI = 3.14159 ;

const sphereVolume = function (radius) {
  return 4 / 3 * PI * (radius ** 3)
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return 1 / 3 * PI * (radius ** 2) * height
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return height * width * depth
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let result = 0
  for(i = 0; i < solids.length; i++) {
    if(solids[i]["type"] === 'sphere') {
      result += sphereVolume(solids[i]["radius"])
    }
    else if(solids[i]["type"] === 'cone') {
      result += coneVolume(solids[i]["radius"], solids[i]["height"])
    }
    else {
      result += prismVolume(solids[i]["height"], solids[i]["width"], solids[i]["depth"])
    }
    
  }

  return result

}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
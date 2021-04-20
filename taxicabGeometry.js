const blocksAway = function(directions) {
  if(directions[1] == "right"){}
  let angle = 0
  let x = 0
  let y = 0
  let result = {}
  if(directions[0] == "right"){
    angle = 90
  }

  for(let i = 1; i < directions.length; i++){
    if(i % 2 == 0) {
      if(directions[i] == "right"){
        angle += 90
      } else {
        angle -= 90
      }
    }else{
      while(angle < 0) {
        angle += 360
      }

      switch(angle % 360) {
        case 0: 
          y += directions[i];
          break;
        case 90:
          x += directions[i];
          break;
        case 180:
          y -= directions[i];
          break;
        case 270:
          x -= directions[i];
          break;
      }
    }
  }

  if(x >= 0) {
    result.east = x
  } else{
    result.west = Math.abs(x)
  }

  if(y >= 0) {
    result.north = y
  } else{
    result.south = Math.abs(y)
  }

  return result
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
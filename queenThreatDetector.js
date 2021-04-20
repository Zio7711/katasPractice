function generateBoard(white, black) {
  let times = 8;
  let board = [];
  for(let i = 0; i < times; i++) {
    let row = []
    for(let j = 0; j < times; j++) {
      row.push(0)
    }
    board.push(row)
  }
  board[white[0]][white[1]] = 1
  board[black[0]][black[1]] = 1
  return board
}

function queenThreat(board){
  let result = false
  let location = []
  // check if they are in the same row
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if(board[i][j] == 1){
        location.push([i,j])
      }
    }
  }

  let first = location[0]
  let second = location[1]
  let xDiff = Math.abs(first[0] - second[0])
  let yDiff = Math.abs(first[1] - second[1])

  if(first[0] == second[0] || first[1] == second[1] || xDiff == yDiff){
    result = true
  }

  return result
}



let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
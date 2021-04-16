const instructorWithLongestName = function(instructors) {
  let largest = 0
  let result

  for(let i = 0; i < instructors.length; i++) {
    if(instructors[i]["name"].length > largest) {
      largest = instructors[i]["name"].length
      result = instructors[i]
    }
  }

  return result
  


};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
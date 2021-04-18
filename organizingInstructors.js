const organizeInstructors = function(instructors) {
  let x = []
  let y = {}
 
  for(let instructor of instructors) {
    if( ! x.includes(instructor.course)){
      x.push(instructor.course)
      y[instructor.course] = [instructor.name]
    } else {
      y[instructor.course].push(instructor.name)
    }
  }
  return y
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
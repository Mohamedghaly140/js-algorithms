// function classroom(teacher) {
//   return function study() {
//     console.log(`${teacher} says to study ${this.topic}`);
//   };
// }
// var topic = "math";

// var assignment = classroom("kyle");

// console.log(assignment());

function classroom(teacher) {
  return function study() {
    console.log(`${teacher} says to study ${this.topic}`);
  };
}

var assignment = classroom("kyle");

// Creating an object with a `topic` property
var context = {
  topic: "math",
};

// Invoking `study()` within the context of the `context` object
console.log(assignment.call(context)); // U

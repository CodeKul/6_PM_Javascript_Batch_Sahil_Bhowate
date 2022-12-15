//copying an array

//I wish to copt the array called scores into the array called copiedScores

let scores = [80, 70, 90];

//deep copy using spread operator
let copiedScores = [...scores];

console.log(copiedScores);

copiedScores[0] = 3;

console.log("scores is", scores);
console.log("copiedScores is", copiedScores);

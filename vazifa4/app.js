let overall = +prompt("Enter Overall");
let score = +prompt("Enter score");
let learning = +prompt("Enter learning");
let speaking = +prompt("Enter speaking");

let result = Math.floor((overall + score + learning + speaking) / 4);

document.write(result);

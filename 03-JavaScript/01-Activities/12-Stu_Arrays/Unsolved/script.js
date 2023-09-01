// WRITE YOUR CODE HERE
var studentName = ["Jared", "Logan", "Jayce", "Levi", "Akina", "Zachary"];

console.log(studentName.length);

for (let i = 0; i < studentName.length; i++) {
    console.log("Welcome to the class " + studentName[i]);
};

studentName[0] = "Bruce waine Defenitely not batmans";

console.log("Welcome new student " + studentName[0]);

if (studentName[0] !== "Jared") {
    console.log("Jared has been replaced and defenitely not released from this mortal realm.")
} else {
    console.log("Jared is still with us");
};
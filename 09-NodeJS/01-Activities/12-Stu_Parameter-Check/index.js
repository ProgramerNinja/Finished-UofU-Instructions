console.log(process.argv);

first = process.argv[2];
second = process.argv[3];

if (first == second) {
    console.log(true)
} else {
    console.log(false)
};
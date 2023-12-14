const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
    if(index===array.length - 1) {
        console.log(accumulator, currentValue);
        return (accumulator+currentValue)/array.length;
    };
    console.log(accumulator, currentValue);
    return accumulator + currentValue;
    // var total = 0;
    // for (let i=0; i < array.length; i++) {
    //     total += array[i]
    // }
    // average = total / array.length;
    // return average
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage);

console.log(gradeAverage);


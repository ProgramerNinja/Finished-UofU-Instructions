var steps = 0
// TODO: Add a comment describing what the `position` parameter means for this function.
//The first position passed through here describes your stop point or goal, in  this case is the 9th position of the fibonacci sequence
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  //it checks whether or not the position value is less than 2, in which case it will return the value of the position
  if (position < 2) {
    if (position == 1 ) {
      steps++;
      console.log(steps);};
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  //this calls the function within it's self which will continue until the position is less than 2. what this will do is add every number to the previous position until it reaches 1.
  //therefor, giving the value of the position in the fibonacci sequnce.
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return?
// it will return 34.
console.log(fibonacci(10));

// 1) Where is carNoise stored?
// in the global execution context (GEC)
const carNoise = 'Honk';
// 2) Where is goFast stored?
// go fast is a variable function that is stored in the global execution scope (GEC)
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // speed is assigned when the parent function is called
  // it is stored within the goFast variable exection scope
  
  // 5) Where is makeNoise stored?
  // makeNoise is stored within the goFast variable exection scope
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // the make noise function is called within the goFast function and the global variable, carNoise, is passed through as a paramater
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// a prompt will come up asking for a yes or a no, no will continue/end the script.
// yes will call the go fast function and set the speed variable as 80, then it will define the makeNoise function, after defining it, it will be called and console log My speed is at ${speed}, time to ${sound}, replacing speed with the parameter input and sound with the gloabl variable sound
if(confirm("Do you want to go fast?")) {
  goFast(80);
}

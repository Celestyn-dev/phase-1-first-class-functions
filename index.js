// Function that takes a function as an argument and calls it
function receivesAFunction(callback) {
    callback(); // Invoke the function passed as an argument
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function!");
    };
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("I am an anonymous function!");
    };
  }
  
  // Example Usage:
  
  // 1. Testing receivesAFunction
  receivesAFunction(() => console.log("Callback function called!"));
  
  // 2. Testing returnsANamedFunction
  const namedFunc = returnsANamedFunction();
  namedFunc(); // Output: I am a named function!
  
  // 3. Testing returnsAnAnonymousFunction
  const anonymousFunc = returnsAnAnonymousFunction();
  anonymousFunc(); // Output: I am an anonymous function!
  
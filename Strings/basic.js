const str="mimohshukla"
console.log(str);

const name = new String("whomimohshukla");
console.log(typeof name);//this will return object 

// You're correct in noting that name contains a string value. However, there's a nuance in JavaScript when dealing with primitive values and their corresponding object wrappers.

// When you create a string using a string literal like "whomimohshukla", you're creating a primitive string value. But when you use the new String() syntax, you're explicitly creating a String object.
console.log(typeof  str);


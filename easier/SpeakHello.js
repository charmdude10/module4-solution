// STEP 3: Create an object called 'helloSpeaker' and attach the "speak" method
var helloSpeaker = {};

// Do NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWordHello = "Hello";

// Attach the 'speak' method to the 'helloSpeaker' object
helloSpeaker.speak = function (name) {
  console.log(speakWordHello + " " + name);
};

// Expose the 'helloSpeaker' object to the global scope with the name 'helloSpeaker'
window.helloSpeaker = helloSpeaker;

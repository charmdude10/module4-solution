// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function (window) {
  // STEP 7: Create an object called 'byeSpeaker' and attach the "speak" method
  var byeSpeaker = {};

  // Do NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWordGoodbye = "Good Bye";

  // Attach the 'speak' method to the 'byeSpeaker' object
  byeSpeaker.speak = function (name) {
    console.log(speakWordGoodbye + " " + name);
  };

  // Expose the 'byeSpeaker' object to the global scope with the name 'byeSpeaker'
  window.byeSpeaker = byeSpeaker;
})(window); // Pass the 'window' object as an argument to the IIFE

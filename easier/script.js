// Assume you have an array of names called 'names'
var names = ["John", "Jane", "Bob", "Jim"];

// Loop over the array of names
for (var i = 0; i < names.length; i++) {
  var name = names[i];

  // Check if the name starts with 'j' or 'J'
  if (name.charAt(0).toLowerCase() === "j") {
    byeSpeaker.speak(name); // Call the 'speak' method of byeSpeaker
  } else {
    helloSpeaker.speak(name); // Call the 'speak' method of helloSpeaker
  }
}

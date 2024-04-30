
(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  var speak = "Hello ";
  var speak1 = "Good Bye ";

  helloSpeaker.speak = function () {
    console.log(speak + names[i]);
  }

  byeSpeaker.speak = function () {
    console.log(speak1 + names[i]);
  }

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();

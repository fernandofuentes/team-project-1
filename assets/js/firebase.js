console.log("firebase.js loaded 7");

// Initialize Firebase
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCnD00DCXAEUzyEJQVNwA7yI7G5OUstYHs",
  authDomain: "chat-test-56e7c.firebaseapp.com",
  databaseURL: "https://chat-test-56e7c.firebaseio.com",
  projectId: "chat-test-56e7c",
  storageBucket: "chat-test-56e7c.appspot.com",
  messagingSenderId: "1003382859041"
};
firebase.initializeApp(config);

var database = firebase.database();

//begin database js File
var chatData = database.ref("/chat");
var loginData = database.ref("/login");
var playersRef = database.ref("players");
var currentTurnRef = database.ref("turn");
var username = "Guest";
var currentPlayers = null;
var currentTurn = null;
var playerNum = false;
var playerOneExists = false;
var playerTwoExists = false;
var playerOneData = null;
var playerTwoData = null;

var queryURL = //API

  //FIREBASE FOR AUTHENTICATION (NEW TECH AS WELL)

  // performing our GET request
  $.ajax({
    url: queryURL,
    method: "GET"
  })

  // after the data request
  .done(function(response) {
    //console.log(response);// change this to 'results?'

    //storing the array of results in the variable
    var results = response.data;
    console.log(results);

  });

//each square is a point value with an on click button that triggers a question
$("tbody").on("click", function(event) {
  console.log(event);

  $(this).attr("da", true);

  //data-button = True;

  //if its true it can not be cliked again

  foo(false);
});

function foo(isCorrect) {
  database.ref("/clicks").push({
    //need authentication first
    "clicked": true


  });

}

//DATA ATTRIBUTE OR CLASS FOR HTML BUTTONS
//EASY/NORMAL/ HARD



// //info to store in firebase

// values of jeopardy grid

// link trivia questions from openTBD.com API to each value squares

// display

// be able to add to a player score with a correct anwser.

// be able to subtract from a player's score with an incorrect anwser.

// ablity to reset game at end

// eliminating values from grid as they are being anwsered.


//begin chat js
var chatData = database.ref("/chat");
var username = "Guest";


// name-submit on click.
$('#name-submit').on("click", function(event) {
  event.preventDefault();

  username = $("#name-input").val().trim();

  console.log("username:", username);

  $('#name-form').hide(); // hide name form
  $('#message-form').css("display", "initial"); // shows message form

});


//message-sumbit on click
$('#message-submit').on("click", function(event) {

  event.preventDefault();
  var message = $("#message-input").val().trim();

  $("#message-input").val(''); // clears out message input box

  // this creates an object with our data to push up to firebase
  var messageObj = {
    name: username,
    message: message,
    time: firebase.database.ServerValue.TIMESTAMP
  };

  console.log(messageObj);

  chatData.push(messageObj);

});


// Update chat on screen when new message detected - ordered by 'time' value
chatData.orderByChild("time").on("child_added", function(snapshot) {

  $("#chat-box").append("<p>" + snapshot.val().name + "> " + snapshot.val().message + "</p>");

  // Keeps div scrolled to bottom on each update.
  $("#chat-box").scrollTop($("#chat-box")[0].scrollHeight);

});

//auth js File
// var database = firebase.database();

var provider = new firebase.auth.FacebookAuthProvider();
var displayName = ""

// firebase.auth().signInWithRedirect(provider);

firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // ...
    console.log(token)
    displayName = result.user.displayName

    console.log(displayName)
    console.log("connected to Facebook")
    $("#displayNameTest").append(displayName)


    var loginObj = {
      name: displayName,
      time: firebase.database.ServerValue.TIMESTAMP

    };

    console.log(loginObj);

    loginData.push(loginObj);

  }
  // The signed-in user info.
  var user = result.user;
  console.log(user);
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  console.log("error code: " + errorCode)
  console.log("error message: " + errorMessage)

  // ...
});



// firebase.auth().signOut().then(function() {
//     // Sign-out successful.
// }).catch(function(error) {
//     // An error happened.
// });

$("#facebookBtn").on("click", function() {
  firebase.auth().signInWithRedirect(provider);



});

$("#logout").on("click", function() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  })
});

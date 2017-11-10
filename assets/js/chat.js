console.log("firebase_chat_app.js loaded");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA0zoYjv-nCRcA6ckZyE3xy2To5_RoSQvM",
  authDomain: "team2project1-3fe10.firebaseapp.com",
  databaseURL: "https://team2project1-3fe10.firebaseio.com",
  projectId: "team2project1-3fe10",
  storageBucket: "",
  messagingSenderId: "334658935081"
};
firebase.initializeApp(config);

var database = firebase.database();
var chatData = database.ref("/chat");
var username = "Guest";


// name-submit on click.
$('#name-submit').on("click", function(event){
  event.preventDefault();

  username = $("#name-input").val().trim();

  console.log("username:", username);

  $('#name-form').hide(); // hide name form
  $('#message-form').css("display", "initial");// shows message form

});


//message-sumbit on click
$('#message-submit').on("click", function(event){

  event.preventDefault();
  var message = $("#message-input").val().trim();

  $("#message-input").val('');// clears out message input box

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

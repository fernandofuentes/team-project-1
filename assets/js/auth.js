var a = 16
var b = 0

console.log(a + b); //3 = true

//console.log("firebase_chat_app.js loaded");

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
var loginData = database.ref("/login");

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
    console.log(user)
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

$(".loginBtn loginBtn--facebook").on("click", function() {
    firebase.auth().signInWithRedirect(provider);
    console.log("login-worked!-B")



});

$("#logout").on("click", function() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    })
});

//write display name to chatbox
// $("#").

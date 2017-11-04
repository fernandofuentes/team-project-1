




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

  var queryURL = "https://opentdb.com/api.php?amount=25"


   // performing our GET request
      $.ajax({
          url: queryURL,
          method: "GET"
        })

      // after the data request
        .done(function(response) {
          console.log(response);

          //storing the array of results in the variable
          var results = response.data;
          console.log(results);
          
});

//each square is a point value with an on click button that triggers a question
  $(document).on("click", function(event){

  }




// //info to store in firebase

// values of jeopardy grid

// link trivia questions from openTBD.com API to each value squares

// display 

// be able to add to a player score with a correct anwser.

// be able to subtract from a player's score with an incorrect anwser.

// ablity to reset game at end

// eliminating values from grid as they are being anwsered.




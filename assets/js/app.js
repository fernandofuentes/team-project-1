// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayTriviaQuestion() {

  var question = $(this).attr("data-name");
  var queryURL = "https://opentdb.com/api.php?amount=9";

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {

    // Creating a div to hold the question
    var questionDiv = $("<div class='question'>");

    // Storing the results data
    var results = response.results;
    //console.log(results);

    // Storing the question data
    var question = response.results["0"].question;
    // console.log(question);

    for (i = 0; i < results.length; i++) {
      console.log(response.results[i].question);


    }



  });


}

displayTriviaQuestion();

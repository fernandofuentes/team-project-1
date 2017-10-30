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
    //  var questionDiv = $("<div class='question'>");

    // Storing the rating data
    var response = response.results;
    console.log(response);

    var question = response.results;
    // console.log(question);

  });


}

displayTriviaQuestion();

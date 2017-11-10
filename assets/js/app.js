// displayMovieInfo function re-renders the HTML to display the appropriate content
function renderQuestion() {

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

    // The ForLoop to display the number of questions
    for (i = 0; i < results.length; i++) {
      // console.log(response.results[i].question);
      // Next for lines creates the Questions Divs
      var questionDiv = $("<div>");
      questionDiv.addClass("question");
      questionDiv.html(response.results[i].question);

      var answersDiv = $("<div>");
      answersDiv.addClass("answers");
      answersDiv.html(response.results[i].correct_answer);


      console.log(response.results[i].question)
      console.log(response.results[i].correct_answer)
      console.log(response.results[i].incorrect_answers)


      $("#questions-view").append(questionDiv)
      $("#answers-view").append(answersDiv)
    }
  });
};

renderQuestion()
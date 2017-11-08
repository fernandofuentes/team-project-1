function renderQuestion() {

  var question = $(this).attr("data-name");
  var queryURL = "https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple";

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {

    // Creating a div to hold the question
    // var questionDiv = $("<div class='question'>");

    // Storing the results data
    var results = response.results;
    console.log(results);

    // Storing the question data
    var question = response.results["0"].question;
    // console.log(question);

    var correctAnswer = response.results["0"].correct_answer;
    // console.log(correctAnswer)

    var incorrectAnswer1 = response.results["0"].incorrect_answers["0"];
    var incorrectAnswer2 = response.results["0"].incorrect_answers["1"];
    var incorrectAnswer3 = response.results["0"].incorrect_answers["2"];

    // console.log(incorrectAnswer1)
    // console.log(incorrectAnswer2)
    // console.log(incorrectAnswer3)

    // var choicesOrder = [correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3]
    // console.log(choicesOrder)




    /////////////////////////////////////////////// RANDOM SHUFFLE

    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    // Used like so
    var choices = [correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3]
    arr = shuffle(choices);
    console.log(choices);

    /////////////////////////////////////////////// END RANDOM SHUFFLE




    // Display Question

    $("button").click(function() {
      var questionDiv = $("<div>");
      questionDiv.addClass("question");
      questionDiv.html(response.results["0"].question);
      $(".question").html(question);
    });

    // Display Answers

    $("button").click(function() {
      var answersDiv = $("<div>");
      answersDiv.addClass("answers");
      answersDiv.html(response.results[i].correct_answer);
      $(".choices").html(choices);
    });

  });
};
renderQuestion()

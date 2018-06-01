$(document).ready(function() {
  $("#pictureAnswersC").click(function() {
    var pictureAnswer = 10
    $(".pictureChoice").hide();
  });
  $("#pictureAnswersRUBY").click(function() {
    var pictureAnswer = 20
    $(".pictureChoice").hide();
  });

  $("#pictureAnswersREACT").click(function() {
    var pictureAnswer = 30
    $(".pictureChoice").hide();
  });

  $("form#written-form").submit(function() {
  var writtenAnswer = $("input#written-imput").val()
  $("#written-form").hide()
  event.preventDefault();
  });

  $("#questionButton3").click(function() {
    $(".radio").hide();
  });

  var chosenFriend = $("input:radio[name=friendChoice]:checked").val()
});

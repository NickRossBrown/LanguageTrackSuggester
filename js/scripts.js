$(document).ready(function() {
  $("#pictureAnswersC").click(function() {
    var pictureAnswer = 10
    $(".pictureChoice").hide();
  })
  $("#pictureAnswersRUBY").click(function() {
    var pictureAnswer = 20
    $(".pictureChoice").hide();
  })
  $("#pictureAnswersREACT").click(function() {
    var pictureAnswer = 30
    $(".pictureChoice").hide();
  })
});
$("form#written-form").submit(function(event) {
  var writtenAnswer = $("input#written-imput1").val()

  event.preventDeafault();
});

var chosenFriend = $("input:radio[name=friendChoice]:checked").val()

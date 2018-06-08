$(document).ready(function() {
  pictureAnswer = 0
  selectedAnswer = 0
  writtenAnswer = 0
  answerpoints = 1
  rubyPoints=0//3
  reactPoints=0 //7
  cSharpPoints=0 //5
  function countPoints(answerpoints){
    while (answerpoints%3===0){
      rubyPoints+=1
      answerpoints= answerpoints / 3
      console.log("ruby ponts  " + rubyPoints)
    }
    while (answerpoints%5===0){
      cSharpPoints+=1
      answerpoints= answerpoints / 5
      console.log("c shartp ponts  " + cSharpPoints)
    }
    while (answerpoints%7===0){
      reactPoints+=1
      answerpoints= answerpoints / 7
      console.log("react ponts  " + reactPoints)
      }
    }
  $("#pictureAnswersC").click(function() {
    countPoints(5)
    $("#pictureAnswersC").hide();
    $("#questionTitle").hide();
  });
  $("#pictureAnswersRUBY").click(function() {
    countPoints(3)
    $("#pictureAnswersRUBY").hide();
    $("#questionTitle").hide();
  });

  $("#pictureAnswersREACT").click(function() {
    countPoints(7)
    $("#pictureAnswersREACT").hide();
    $("#questionTitle").hide();
  });


  $("#questionButtonOne").click(function() {
    var selectedAnswer = parseInt($("#questionOne").val())
    answerpoints*=selectedAnswer
    countPoints(selectedAnswer)
    $("#questionButtonOne").hide()
    $("#questionOne").hide()
  event.preventDefault();
  });

  $("form#written-form").submit(function() {
    writtenAnswer = parseInt($("input#written-input").val())
    if (writtenAnswer <=30 && writtenAnswer > 0){
      if (writtenAnswer <=10){
        countPoints(7)
      }
      else if (writtenAnswer <=20){
        countPoints(125)
      }
      else if (writtenAnswer <=30){
        countPoints(5)
      }
    }
    $("#written-form").hide()
    event.preventDefault();
  });
  $("#questionButton3").click(function() {
    chosenFriend = parseInt($("input:radio[name=friendChoice]:checked").val())
    console.log(chosenFriend)
    countPoints(chosenFriend)
    $(".radio").hide();
  });
  $("#questionButtonTwo").click(function() {
    var selectedAnswer = parseInt($("#questionenTwo").val())
    answerpoints*=selectedAnswer
    countPoints(selectedAnswer)
    $("#questionButtonTwo").hide()
    $("#questionTwo").hide()
  event.preventDefault();
  });

  $("#finishedButton").click(function() {
      if ((rubyPoints >= reactPoints) && (rubyPoints >= cSharpPoints)){
        $(".answerRuby").show()
        $("#finishedButton").hide()
      }
      if ((reactPoints > rubyPoints) && (reactPoints > cSharpPoints)){
        $("#finishedButton").show()
      }
      if ((cSharpPoints > reactPoints) && (cSharpPoints > rubyPoints)){
        $("#finishedButton").show()
      }
    })
  $(".restartWebpage1").click(function() {
    console.log("tetset")

    $(".answerRuby").hide()
    $(".answerREACT").hide()
    $(".answerC").hide()
    $("#finishedButton").show()

    })



  // chosenFriend = $("input:radio[name=friendChoice]:checked").val()
});

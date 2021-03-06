$(document).ready(function() {
  pictureAnswer = 0
  selectedAnswer = 0
  writtenAnswer = 0
  answerpoints = 1
  rubyPoints=1//3
  reactPoints=1 //7
  cSharpPoints=1 //5
  function countPoints(answerpoints){
    console.log("ruby ponts --- " + rubyPoints +"c shartp ponts --- " + cSharpPoints + "react ponts  " + "react ponts --" + reactPoints)
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
    console.log("ruby ponts --- " + rubyPoints +"c shartp ponts --- " + cSharpPoints + "react ponts  " + "react ponts --" + reactPoints)
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
    console.log(selectedAnswer)
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
    console.log("reached new checkpoint")
    var selectedAnswer = parseInt($("#questionTwo").val())
    console.log(selectedAnswer)
    answerpoints*=selectedAnswer
    countPoints(selectedAnswer)
    $("#questionButtonTwo").hide()
    $("#questionTwo").hide()
  event.preventDefault();
  });

  $("#finishedButton").click(function() {
      if ((rubyPoints >= reactPoints) && (rubyPoints > cSharpPoints)){
        $(".answerRuby").show()
        $("#finishedButton").hide()
      }
      if ((reactPoints > rubyPoints) && (reactPoints >= cSharpPoints)){
        $(".answerC").show()
        $("#finishedButton").hide()
      }
      if ((cSharpPoints > reactPoints) && (cSharpPoints >= rubyPoints)){
        $(".answerREACT").show()
        $("#finishedButton").hide()
      }
      else if ((rubyPoints === reactPoints) && (reactPoints === cSharpPoints)){
        $(".noAnswer").show()
        $("#finishedButton").hide()
      }
    })
  $(".restartWebpage").click(function() {
    location.reload();
    })
});

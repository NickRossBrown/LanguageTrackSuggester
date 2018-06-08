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
  // function pointWinner(winner){
  //   if (rubyPoints > reactPoints && rubyPoints > cSharpPoints){
  //   }
  // }

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
  $("#finishedButton").click(function() {
      if ((rubyPoints > reactPoints) && (rubyPoints > cSharpPoints)){
        $(".answerRuby").show()
      }
      if ((reactPoints > rubyPoints) && (reactPoints > cSharpPoints)){
        $(".answerREACT").show()
      }
      if ((cSharpPoints > reactPoints) && (cSharpPoints > rubyPoints)){
        $(".answerC").show()
      }
    })
    // console.log(answerpoints)
    // rubyPoints=0//3
    // reactPoints=0 //7
    // cSharpPoints=0 //5
    // while (answerpoints%3===0){
    //   rubyPoints+=1
    //   answerpoints= answerpoints / 3
    //   console.log("ruby ponts  " + rubyPoints)
    //   console.log("anserpoints" + answerpoints)
    // }
    // while (answerpoints%5===0){
    //   cSharpPoints+=1
    //   answerpoints= answerpoints / 5
    //   console.log("c shartp ponts  " + cSharpPoints)
    //   console.log("anserpoints" + answerpoints)
    // }
    // while (answerpoints%7===0){
    //   reactPoints+=1
    //   answerpoints= answerpoints / 7
    //   console.log("react ponts  " + reactPoints)
    // }
    // if (writtenAnswer > 1){
    //   $(".answerC").show()
    // }


  // chosenFriend = $("input:radio[name=friendChoice]:checked").val()
});

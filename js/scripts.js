$(function () {
  $('form').submit(function(event){
    $("").show();
    $("").hide();
  });
// });

// $(function(event){
//   $("#").click(function(){
// var job = $ ("input#job1").val();

    var rachel = $("").val();
    var ross = $("").val();
    var phoebe = $("").val();
    var chandler = $("").val();
    var joey = $("").val();

// var character = ["rachel","ross","phoebe","chandler","joey"];
//   character.forEach(function(){
//   });



    if ("exampleRadios1"=== "checked" && "exampleRadios9" === "checked") {
      $('rachel').show();
    // } else if ( === "" &&  === "") {
    //   $('').show();
    // } else if ( === "" &&  === "") {
    //   $('').show();
    // } else {
    //   $('').show();
    // }
    //
    // $("").hide();
    // $("").show();

    event.preventDefault();
  });
});

      // age = parseInt($("input#age1").val());
      // orientation = $("select#orientation1").val();
      // gender = $("select#gender1").val();

      // if (age >=50 && gender === "Female" && orientation === "Straight" || gender === "Male" && orientation === "Gay") {
      //   $('#container-result1').show();
      //   }
      //   if(age >=50 && gender === "Female" && orientation === "Gay" || gender === "Male" && orientation === "Straight") {
      //     $('#container-result2').show();
      //     }
      // if (age <50 && gender === "Female" && orientation === "Straight" || gender === "Male" && orientation === "Gay") {
      //   $('#container-result3').show();
      //   }
      //   if(age <50 && gender === "Female" && orientation === "Gay" || gender === "Male" && orientation === "Straight") {
      //     $('#container-result4').show();
        // }
      // }

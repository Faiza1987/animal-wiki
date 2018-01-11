

$(document).ready(function() {



  var animal = prompt("What is your favorite animal? Cats, Pandas, or Dogs?");
  console.log(animal);

  if ((animal === "cat") || (animal === "cats")) {
    console.log("HELLO");
    $("#cats").show();
  } else if ((animal === "panda") || (animal === "pandas")) {
    $("#pandas").show();
  } else if ((animal === "dog") || (animal === "dogs")) {
    $("#dogs").show();
  } else {
    alert("Please select an animal from the following: cats, pandas, dogs.");
  }

  $("#cat1").click(function () {
    $(".cat-clickable1").click();
    $("#catimg1").show();
    $("#cat-info1").toggle();
  });

  $("#cat2").click(function () {
    $(".cat-clickable2").click();
    $("#catimg2").show();
    $("#cat-info2").toggle();
  });

  $("#panda1").click(function () {
    $(".panda-clickable1").click();
    $("#pandaimg1").show();
    $("#panda-info1").toggle();
  });

  $("#panda2").click(function () {
    $(".panda-clickable2").click();
    $("#pandaimg2").show();
    $("#panda-info2").toggle();
  });

  $("#dog1").click(function () {
    $(".dog-clickable1").click();
    $("#dogimg1").show();
    $("#dog-info1").toggle();
  });

  $("#dog2").click(function () {
    $(".dog-clickable2").click();
    $("#dogimg2").show();
    $("#dog-info2").toggle();
  });

});



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

  $(".pandas-clickable").click(function () {
    $("#pandas").toggle();
  });

  $(".dogs-clickable").click(function () {
    $("#dogs").toggle();
  });

});



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

  $(".cat-clicakable").click(function () {
    $("#cats").toggle();
  });

  $(".pandas-clicakable").click(function () {
    $("#pandas").toggle();
  });

  $(".dogs-clicakable").click(function () {
    $("#dogs").toggle();
  });

});

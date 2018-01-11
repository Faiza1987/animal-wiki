$(document).ready(function() {
  var animal = prompt("What's your favorite animal?");

  if ((animal === "cat") || (animal === "cats")) {
    $("#cats").show();

  } else if ((animal === "panda") || (animal === "pandas")) {
    $("#pandas").show();

  } else if ((animal === "dog") || (animal ==="dogs")) {
    $("#dogs").show();

  } else {
    alert("Please select one of three animals: cats, pandas, dogs");
  }

    $(".cat-clicakable").click(function () {

      ("#cats").toggle();

    )};

    // $(".pandas-clicakable").click(function () {
    //   ("#pandas").toggle();
      $(".pandas-clicakable").click(function () {
        ("#pandas").toggle();
      });


    // $(".dogs-clicakable").click(function () {
    //     ("#dogs").toggle();

      $(".dogs-clicakable").click(function () {
        ("#dogs").toggle();
      });
  });
});

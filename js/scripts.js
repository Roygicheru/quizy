var count = 0;
function check() {
  var qone = document.quizy.qone.value;
  var qtwo = document.quizy.qtwo.value;


  if(qone == "1") {
    count += 50;
  }

  if(qtwo == "2") {
    count += 50;
  }
  return count
}

$(document).ready(function() {
  $("form").submit(function(event) {
    check()
    $("#final_count").text("You've scored " + count + "/100");
    $("#final_count").show();
    $("#quizy").hide();
    $("#button").hide();
    event.preventDefault();
  });
});

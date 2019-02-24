var count = 0;
function check() {
  var qone = document.quizy.qone.value;
  var qtwo = document.quizy.qtwo.value;
  var qthree = document.quizy.qthree.value;
  var qfour = document.quizy.qfour.value;
  var qfive = document.quizy.qfive.value;
  // 
  // if(qone == "1") {
  //   count += 20;
  // }
  //
  // if(qtwo == "2") {
  //   count += 20;
  // }
  //
  // if(qthree == "2") {
  //   count += 20;
  // }
  //
  // if(qfour == "1") {
  //   count += 20;
  // }
  //
  // if(qfive == "3") {
  //   count += 20;
  // }
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

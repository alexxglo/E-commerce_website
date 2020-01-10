
$(document).ready(function () {

  let answers = "";

  $("#q_1").click(function () {

    if ($("#q1 input:checked").attr('id') == "0") {
      setTimeout(function () { $("#checker").fadeOut(); }, 20);
      answers += "0,";
    }
    else if ($("#q1 input:checked").attr('id') == "1") {
      setTimeout(function () { $("#neutral").fadeOut(); }, 20);
      answers += "1,";

    }
    else if ($("#q1 input:checked").attr('id') == "2") {
      setTimeout(function () { $("#sad").fadeOut(); }, 20);
      answers += "2,";

    }
    $("#q1").hide();
    $("#q2").show().css("visibility", "visible");
    $(".progress-bar").css('width', '25%');

  });
  $("#q_2").click(function () {

    if ($("#q2 input:checked").attr('id') == "0") {
      setTimeout(function () { $("#checker").fadeOut(); }, 20);
      answers += "0,";

    }
    else if ($("#q2 input:checked").attr('id') == "1") {
      setTimeout(function () { $("#neutral").fadeOut(); }, 20);
      answers += "1,";

    }
    else if ($("#q2 input:checked").attr('id') == "2") {
      setTimeout(function () { $("#sad").fadeOut(); }, 20);
      answers += "2,";

    }

    $("#q2").css({
      display: "none",
      visibility: "hidden"
    });
    $("#q3").show().css("visibility", "visible");
    $(".progress-bar").css('width', '50%');


  });

  $("#q_3").click(function () {

    if ($("#q3 input:checked").attr('id') == "0") {
      setTimeout(function () { $("#checker").fadeOut(); }, 20);
      answers += "0,";

    }
    else if ($("#q3 input:checked").attr('id') == "1") {
      setTimeout(function () { $("#neutral").fadeOut(); }, 20);
      answers += "1,";

    }
    else if ($("#q3 input:checked").attr('id') == "2") {
      setTimeout(function () { $("#sad").fadeOut(); }, 20);
      answers += "2,";

    }

    $("#q3").css({

      display: "none",
      visibility: "hidden"
    });
    $("#q4").show().css("visibility", "visible");
    $(".progress-bar").css('width', '75%');

  });

  $("#q_4").click(function () {

    if ($("#q4 input:checked").attr('id') == "0") {
      setTimeout(function () { $("#checker").fadeOut(); }, 20);
      answers += "0,";



    }
    else if ($("#q4 input:checked").attr('id') == "1") {
      setTimeout(function () { $("#neutral").fadeOut(); }, 20);
      answers += "1,";



    }
    else if ($("#q4 input:checked").attr('id') == "2") {
      setTimeout(function () { $("#sad").fadeOut(); }, 20);
      answers += "2,";

    }
    $("#q4").css({
      display: "none",
      visibility: "hidden"
    });
    $("#q5").show().css("visibility", "visible");
    $(".progress-bar").css('width', '100%');

  });

  $("#q_5").click(function () {

    if ($("#q5 input:checked").attr('id') == "0") {
      setTimeout(function () { $("#checker").fadeOut(); }, 20);
      answers += "0";



    }
    else if ($("#q5 input:checked").attr('id') == "1") {
      setTimeout(function () { $("#neutral").fadeOut(); }, 20);
      answers += "1";



    }
    else if ($("#q5 input:checked").attr('id') == "2") {
      setTimeout(function () { $("#sad").fadeOut(); }, 20);
      answers += "2";



    }
    const recenzie = { recenzie: answers }
    axios.post('/recenzii/adaugare', recenzie);




    $("#q5").css({
      display: "none",
      visibility: "hidden"
    });
    $("#q6").show().css("visibility", "visible");


  });

});

/*
$(document).ready(function(){

  $("#q_1").click(function(){
    $("#q1").hide();
    $("#q2").show().css("visibility","visible");
    $(".progress-bar").css('width', '25%');

    if($("#good_check").is(':checked'))
    {
      $("#checker").show();
      setTimeout(function() { $("#checker").fadeOut(); }, 20);
    }
    else if($("#neutral_check").is(':checked'))
    {
      $("#neutral").show();
      setTimeout(function() { $("#neutral").fadeOut(); }, 20);
    }
    else if($("#bad_check").is(':checked'))
    {
      $("#sad").show();
      setTimeout(function() { $("#sad").fadeOut(); }, 20);
    }
  });
var i=2;
  for(i=2;i<6;++i)
  { var j=i+1;
  $('#q_'+ i).html(text).click(function(){
      $('#q'+i).html(text).css({
          display: "none",
          visibility: "hidden"
        });
      $('#q'+j).html(text).show().css("visibility","visible");
      $(".progress-bar").css('width', '50%');

      if($("#good_check").is(':checked'))
      {
        $("#checker").show();
        setTimeout(function() { $("#checker").fadeOut(); }, 10);
      }
      else if($("#neutral_check").is(':checked'))
      {
        $("#neutral").show();
        setTimeout(function() { $("#neutral").fadeOut(); }, 10);
      }
      else if($("#bad_check").is(':checked'))
      {
        $("#sad").show();
        setTimeout(function() { $("#sad").fadeOut(); }, 10);
      }
    });
  }
});*/
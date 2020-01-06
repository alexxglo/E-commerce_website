$(document).ready(function(){
    $("#q_1").click(function(){
      $("#q1").hide();
      $("#q2").show().css("visibility","visible");
      $(".progress-bar").css('width', '25%');  
      
    });
  
    $("#q_2").click(function(){
        $("#q2").css({
            display: "none",
            visibility: "hidden"
          });
        $("#q3").show().css("visibility","visible");
        $(".progress-bar").css('width', '50%');  
      });

      $("#q_3").click(function(){
        $("#q3").css({
            display: "none",
            visibility: "hidden"
          });
        $("#q4").show().css("visibility","visible");
        $(".progress-bar").css('width', '75%');  
      });

      $("#q_4").click(function(){
        $("#q4").css({
            display: "none",
            visibility: "hidden"
          });
        $("#q5").show().css("visibility","visible");
        $(".progress-bar").css('width', '100%');  
      });

      $("#q_5").click(function(){
        $("#q5").css({
            display: "none",
            visibility: "hidden"
          });
        $("#q6").show().css("visibility","visible");
      });

});
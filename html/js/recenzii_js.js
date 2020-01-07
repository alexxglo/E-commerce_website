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
    $("#q_2").click(function(){
        $("#q2").css({
            display: "none",
            visibility: "hidden"
          });
        $("#q3").show().css("visibility","visible");
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

      $("#q_3").click(function(){
        $("#q3").css({

            display: "none",
            visibility: "hidden"
          });
        $("#q4").show().css("visibility","visible");
        $(".progress-bar").css('width', '75%');  
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

      $("#q_4").click(function(){
        $("#q4").css({
            display: "none",
            visibility: "hidden"
          });
        $("#q5").show().css("visibility","visible");
        $(".progress-bar").css('width', '100%');  
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

      $("#q_5").click(function(){
        $("#q5").css({
            display: "none",
            visibility: "hidden"
          });
        $("#q6").show().css("visibility","visible");
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

});
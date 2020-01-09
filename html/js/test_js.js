$(document).ready(function(){

 // Add new element
 $(".add").click(function(){

  // Finding total number of elements added
  var total_element = $(".element").length;
 
  // last <div> with element class id
  var lastid = $(".element:last").attr("id");
  var split_id = lastid.split("_");
  var nextindex = Number(split_id[1]) + 1;

  var max = 5;
  // Check total number elements
  if(total_element < max ){
   // Adding new div container after last occurance of element class
   $(".element:last").after("<div class='element' id='div_"+ nextindex +"'></div>");
 
   // Adding element to <div>
   $("#div_" + nextindex).append("<input type='text' placeholder='Enter your skill' id='txt_"+ nextindex +"'>&nbsp;<span id='remove_" + nextindex + "' class='remove'>X</span>");
 
  }
 
 });

 // Remove element
 $('.container').on('click','.remove',function(){
 
  var id = this.id;
  var split_id = id.split("_");
  var deleteindex = split_id[1];

  // Remove <div> with id
  $("#div_" + deleteindex).remove();

 }); 
});







   $(document).ready(function(){
    
    // last <div> with col class id
    var lastid = $(".col-md-4:last").attr("id");
    var split_id = lastid.split("_");
    var nextindex = Number(split_id[1]) + 1;
  
     // Adding new div container after last occurance of element class
     $(".col-md-4:last").after("<div class='col-md-4' id='div_"+ nextindex +"'></div>");
   
     // Adding element to <div>
     $("#div_" + nextindex).append("<a id='txt_"+ nextindex+"'></a>");
     $("a").last().addClass("text-reset text-decoration-none>");

     $("#div_" + nextindex).append("<div id='txt_"+ nextindex);
     $("div").last().addClass("card mb-4 shadow-sm");
     $("div").last().append("<a class='text-reset text-decoration-none <picture class='thumbnail'>img src=/images/rx580.png></picture></a>");

        
   });
  
/*
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
*/

   $(document).ready(function()
   {
    var produs={
      denumire:"Placă video Asus Radeon RX 580 Dual OC, 4GB GDDR5, 256-bit",
      pret:700,
      specificatiiMinime:"La un pret incantator, placa video de la Asus ajunge si pe Alyexpress. La un pret redus, bineinteles. Comanda-l acum si ia parte in aventura gaming-ului! "
    }
     $("main").append(
      $('<div>',
      {
        class:'col text-center'
      }).append(
        $('<picture>',
      { 
        id:'test'       
      })
        .html(
          '<img src="/images/rx580.png">'
        )
    ));
    
    $("main").append(
      $('<div>',
      {
        class:'col text-center'
      }).append($('<h3>').append(produs.denumire)
      )
        .append($('<small>').append(produs.specificatiiMinime))
        .append($('<br>'))
        .append($('<button>',
          {
            class:'btn btn-outline-success'
          }
        ).append(produs.pret+' lei')
        )
   );
  });
    
/*
   <div class="col text-center">
   <picture"><img src="/images/rx580.png"></picture>
</div>
<div class="col text-center">
   <h3>Placă video Asus Radeon RX 580 Dual OC, 4GB GDDR5, 256-bit</h3>            
   <small>La un pret incantator, placa video de la Asus ajunge si pe Alyexpress. La un pret redus, bineinteles. Comanda-l acum si ia parte in aventura gaming-ului! </small>
   <br>
   <button class="btn btn-outline-danger">Cumpara acum</button>
</div>

<div class="col text-center">
<picture><img src="/images/rx580.png"></picture>
</div>
<div class="col text-center">
<h3>Placă video Asus Radeon RX 580 Dual OC, 4GB GDDR5, 256-bit</h3>            
<small>La un pret incantator, placa video de la Asus ajunge si pe Alyexpress. La un pret redus, bineinteles. Comanda-l acum si ia parte in aventura gaming-ului! </small>
<br>
<button class="btn btn-outline-danger">Cumpara acum</button>
</div> */
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

///    var produs;
///  axios.get('/produse/afisare').then(lista=>{
///  produs=lista;
///  })
     var n=2;
    var i=0;
   // console.log(produs);
     var produs=[{ 
      denumire:"Placă video Asus Radeon RX 580 Dual OC, 4GB GDDR5, 256-bit",
      pret:700,
      specificatiiMinime:"La un pret incantator, placa video de la Asus ajunge si pe Alyexpress. La un pret redus, bineinteles. Comanda-l acum si ia parte in aventura gaming-ului! ",
      imagine:'<img src="/images/rx580.png">'     
    },
    {
      denumire:"Placă video MSI GeForce RTX 2080 Ti GAMING TRIO, 11GB, GDDR6, 352-bit",
      pret:6800,
      specificatiiMinime:" Noua placa video 2080 prea scumpa? Pe alyexpress o gasesti la o mega oferta!",
      imagine:'<img src="/images/rtx2080.png">'     
    },
    {
      denumire:"Placă video Gigabyte GeForce® GTX 1050 Ti OC, 4GB GDDR5, 128-bit",
      pret:805,
      specificatiiMinime:"Performanta, ieftina si silenctioasa. Exact ce iti trebuie. Doar pe Alyexpress",
      imagine:'<img src="/images/gtx1050ti.png">'     
    }
  ]
  
  

    for(i=0;i<=n;i++)
    {
     $("main").append(
      $('<div>',
      {
        class:'col text-center',
        id:'order_products'
      }).append(
        $('<picture>',
      { 
        id:'test'       
      })
        .html(
          produs[i].imagine
        )
    ));
    
    $("main").append(
      $('<div>',
      {
        class:'col text-center'
      }).append($('<h3>').append(produs[i].denumire)
      )
        .append($('<small>').append(produs[i].specificatiiMinime))
        .append($('<br>'))
        .append($('<button>',
          {
            class:'btn btn-outline-success',
          }
          )
          ).append(produs[i].pret+' lei')
   );}

          var check_container_2=0;
          var check_container_3=0;
   $("#button_1").click(function()
   {    if(check_container_2==0){
     check_container_2=1;
     $("#container_1").hide();
     $("#container_3").hide(); 
     produs.sort(function(a,b){
      if(a.pret<b.pret){return -1;}
      if(a.pret>b.pret){return 1;}
      return 0;
    })
     $("body").append(
      $('<div>',
      {
        id:'container_2',
        class: 'container'
      }));
     for(i=0;i<=n;i++)
    {
     $("#container_2").append(
      $('<div>',
      {
        class:'col text-center',
        id:'order_products'
      }).append(
        $('<picture>',
      { 
        id:'test'       
      })
        .html(
          produs[i].imagine
        )
    ));
    
    $("#container_2").append(
      $('<div>',
      {   
        class:'col text-center'
      }).append($('<h3>').append(produs[i].denumire)
      )
        .append($('<small>').append(produs[i].specificatiiMinime))
        .append($('<br>'))
        .append($('<button>',
          {
            class:'btn btn-outline-success',
          }
        ).append(produs[i].pret+' lei')
        )
   );}
   
   }
  else {
    $("#container_3").hide();
    $("#container_2").show();}
  }
   )

   $("#button_2").click(function()
   {    if(check_container_3==0){
    check_container_3=1;
     $("#container_1").hide();
     $("#container_2").hide();

     produs.sort(function(a,b){
      if(a.pret>b.pret){return -1;}
      if(a.pret<b.pret){return 1;}
      return 0;
    })
     $("body").append(
      $('<div>',
      {
        id:'container_3',
        class: 'container'
      }));
     for(i=0;i<=n;i++)
    {
     $("#container_3").append(
      $('<div>',
      {
        class:'col text-center',
        id:'order_products'
      }).append(
        $('<picture>',
      { 
        id:'test'       
      })
        .html(
          produs[i].imagine
        )
    ));
    
    $("#container_3").append(
      $('<div>',
      {   
        class:'col text-center'
      }).append($('<h3>').append(produs[i].denumire)
      )
        .append($('<small>').append(produs[i].specificatiiMinime))
        .append($('<br>'))
        .append($('<button>',
          {
            class:'btn btn-outline-success',
          }
        ).append(produs[i].pret+' lei')
        )
   );}
   
  }
  else {
    $("#container_2").hide();
    $("#container_3").show();
  }
}
   )

  });
    
/*
   <div class="col text-center">
   <picture"><img src="/images/rx580.png"></picture>
</div>
<div class="col tex t-center">
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
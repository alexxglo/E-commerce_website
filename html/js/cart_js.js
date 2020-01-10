let list;
// needs add to cart route
axios.get('/produse/afisare').then(response => {
  list = response.data.produs;
})
console.log(list);
$(document).ready(function()
   {
let products=
    {
        id:1,
        denumire:"Asus",
        pret: 50
    }

    $("#fin_com").click(function () {

      $("#green").hide();
      $("#text_ascuns").show().css("visibility", "visible");
    });

$("main").prepend(
    $('<div>',
    {
      class:'row pt-3'
    }).append(
      $('<p>',
    { 
      class:'col font-weight-light media-body pb-3 mb-0 text-light border-bottom border-white'       
    })
      .append(
        products.denumire
      )
  ).append(
    $('<p>',
  { 
    class:'col font-weight-light media-body pb-3 mb-0 text-light border-bottom border-white text-right'       
  })
    .append(
      products.pret+" lei"
    )
)
  );  
      });



      
      /*
      

      <div class="row pt-3">
        
        <p class="col font-weight-light media-body pb-3 mb-0 text-light border-bottom border-white">
          Product#1
        </p>
        <p class="col font-weight-light media-body pb-3 mb-0 text-light border-bottom border-white text-right">70lei</p>
      
      </div>

      */
var lista=["comanda_1","comanda_2","comanda_3"];

var lista_2=["recenzie_1","recenzie_2"];

function comenzi($param) {
  
  $param.empty();
  //while(...)
  for(var i=0;i<lista.length;++i)
  $param.append(
    $('<li>')
    .append(lista[i]) // adauga cate o comanda in lista
);
}
function recenzii($param) {
  
  $param.empty();
  //while(...)
  for(var i=0;i<lista_2.length;++i)
  $param.append(
    $('<li>')
    .append(lista_2[i]) // adauga cate o recenzie in lista
);
}


$(document).ready(function () {

    $("#show_comenzi").click(function () {
  
      $("#ascuns_2").hide();
      $("#ascuns_1").show().css("visibility", "visible");

      comenzi($('#ascuns_1'));

    });
    $("#show_recenzii").click(function () {
  
      $("#ascuns_1").hide();
      $("#ascuns_2").show().css("visibility", "visible");

      recenzii($('#ascuns_2'));

    });
  
    $("#show_comenzi").dblclick(function () {
  
      $("#ascuns_1").hide();     
    });

    $("#show_recenzii").dblclick(function () {
  
      $("#ascuns_2").hide();
    });
  });
  

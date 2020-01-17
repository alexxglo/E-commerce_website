$(document).ready(function () {

$("main").append(
    $('<div>',
    {
      class:'row',
      id:'rand'
    }).append($('<div>',{
        class:'col-lg-4 order-lg-2 order-1'
    })
    .append($('<div>',{
        class:'image_selected'
    }).html(
        '<img src="/images/rx580.png">'
            
    )   
    )
    )
    )

    $("#rand").append(
    $('<div>',{
        class:'col-lg-6 order-3',
       
    }).append($('<div>',{
        class:'product_description',
        id:'chenar'
    })
    ))

    $("#chenar").append(
        $('<div>',{
            class:'product_name'
        }).html("Placa video")
    )

    $("#chenar").append(
        $('<hr>',{
            class:'singleline'
        })
    )
    $("#chenar").append(
        $('<ul>',{
            class:'list-group list-group-flush',
            id:'lista'
            })
    )
     
    $("#lista").append(
        $('<li>',{
            class:'list-group-item'
        }).append($('<h6>').append
        ("Producator chipset: AMD")
        )
    )
    
    $("#lista").append(
        $('<li>',{
            class:'list-group-item'
        }).append($('<h6>').append
        ("Interfata: PCI Express x16 3.0")
        )
    )

    $("#lista").append(
        $('<li>',{
            class:'list-group-item'
        }).append($('<h6>').append
        ("Racire: Dual Fan")
        )
    )

    $("#lista").append(
        $('<li>',{
            class:'list-group-item'
        }).append($('<h6>').append
        ("Tip memorie: DDR5")
        )
    )

    $("#lista").append(
        $('<li>',{
            class:'list-group-item'
        }).append($('<h6>').append
        ("Porturi: DVI(1),HDMI(2),Display port(2)")
        )
    )

    $("#chenar").append(
        $('<div>',{
            class: 'row'
        }).append(
            $('<div>',{
                class:'col-xs-6',
                id:'butoane'
            }).append($("<button>",{
                type:'button',
                class:'btn btn-outline-danger'
            }).html("700 lei"))
            
        )
    )


})
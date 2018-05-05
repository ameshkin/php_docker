$( document ).ready(function() {
    console.log( "rea ddy!" );

    var b = $( "body" );

    AjaxInit();




    // on gallery click, show images
    b.on( "click", ".show-gallery", function() {

        console.log( $( this ).data("id") );

        id = $( this ).data("id");

        // get images for this gallery
        var url =  "http://localhost:8080/index.php?action=get_images";
        $.ajax({
            url: url,
            type: "get",
            contentType: 'application/json; charset=utf-8',
            dataType: 'text json',
            cache: false,
            //dataType: "json",
            success: function (response) {

                console.log("image response: " + id);
                console.dir(response.galleries[id-1].images);







                //hide gallery list
                $("#gallery-list").hide();
                $("#image-list").show();
                $( ".back" ).show();

                // show images for this gallery
                var items = [];
                $.each( response.galleries[id-1].images, function( key, val ) {


                    console.dir(val);
                    items.push( "<li id='image-" + val.id + "'><h3>" + val.title + "</h3><img src='" + val.image + "'</li>" );

                });

                $( "<ul/>", {
                    "class": "image-list",
                    html: items.join( "" )
                }).appendTo( "#image-list" );


            },
            error: function (XMLHttpRequest, textStatus) {

                console.log("error");
                console.log(textStatus);


            }
        });

    });

    b.on( "click", ".back", function() {


        $(".image-list").remove();
        $( ".back" ).hide();
        $("#gallery-list").show();
        console.log("slick");



    });
    /*

var jqxhr = $.getJSON(url, function() {
    console.log( "success" );
})
    .done(function(data) {
        console.log( "second success" );


        console.dir(data);


        var items = [];
        $.each( data, function( key, val ) {
            items.push( "<li id='" + key + "'>" + val + "</li>" );
        });

        $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
        }).appendTo( "body" );


    })
    .fail(function(jqxhr, textStatus, error) {

        console.dir(jqxhr);

        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );


        console.log( "erro sdv svsvr" );
    })
    .always(function() {
        console.log( "complete" );
    });

    */

});


function AjaxInit() {


    console.log("AjaxInit");
    var url =  "http://localhost:8080/index.php?action=get_galleries";

    //var url = "http://localhost:8080/data/gallery.json";


    $.ajax({
        url: url,
        type: "get",
        contentType: 'application/json; charset=utf-8',
        dataType: 'text json',
        cache: false,
        //dataType: "json",
        success: function (response) {

            console.log("response");
            console.dir(response);

            console.log(response.id);



            //display galleries
            var items = [];
            $.each( response.galleries, function( key, val ) {


                console.dir(val);
                items.push( "<li id='slide-" + val.id + "'>  <a class='show-gallery' data-id='" + val.id + "'><h3>" + val.title + "</h3><img src='" + val.list_image + "'</a></li>" );


            });

            $( "<ul/>", {
                "class": "gallery-list",
                html: items.join( "" )
            }).appendTo( "#gallery-list" );


        },
        error: function (XMLHttpRequest, textStatus) {

            console.log("error");
            console.log(textStatus);


        }
    });
}
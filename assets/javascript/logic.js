$( document ).ready(function() {
    // api key and stuff for later
    
    // Array of the Avengers
    var topics = ["Iron Man", "Thor", "Captain America", "Hulk", "Hawkeye", "Black Widow"];
    // making buttons
    function makeButton() {
        for (var i = 0; i < topics.length; i++){
            var buttons = $("<button>");
            buttons.addClass(Avengers);
            buttons.addClass("btn btn-primary");
            buttons.attr("data-name", topics[i]);
            buttons.text(topics[i]);
            $("#gifbuttons").append(buttons);
        }
    };
    
    // function addNewButton(){
    //     $("#add").on("click", function(){
    //     var play = $("#play-input").val().trim();
    //     }
    //     topics.push(play);
    //     };
    // }
    
    // function giphs(){
    //     var display = $(this).attr("data-name");
    //     var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + display + "QIa9tWHaztOXnqmFy61A41bA3aSrJ7kq";
    //     $.ajax({
    //         url: queryURL,
    //         method: 'GET'
    //     })
    //     .done(function(response) {
    //         var return = response.data; 
    //         for (var i=0; i<results.length; i++){
    
    //             var gifDiv = $("<div>"); 
    //             gifDiv.addClass("gifDiv");
        
    //             var gifImage = $("<img>");
    //             gifImage.attr("src", results[i].images.fixed_height_small_still.url); // still image stored into src of image
    //             gifImage.attr("data-still",results[i].images.fixed_height_small_still.url); // still image
    //             gifImage.attr("data-animate",results[i].images.fixed_height_small.url); // animated image
    //             gifImage.attr("data-state", "still"); // set the image state
    //             gifImage.addClass("image");
    //             gifDiv.append(gifImage);
    //             $("#gifsView").prepend(gifDiv);
    //         }
    //     });
    // }
    
    // $(document).on("click", ".play", displayGifs);
    // $(document).on("click", ".image", function(){
    //     var state = $(this).attr('data-state');
    //     if ( state == 'still'){
    //         $(this).attr('src', $(this).data('animate'));
    //         $(this).attr('data-state', 'animate');
    //     }else{
    //         $(this).attr('src', $(this).data('still'));
    //         $(this).attr('data-state', 'still');
    //     }
    // });
    });

function apiStuff() {
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + Avengers + "QIa9tWHaztOXnqmFy61A41bA3aSrJ7kq";
    $.ajax({
        url: queryURL,
        method: 'GET'
    });
}

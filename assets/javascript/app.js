$(document).ready(function(){

    // 1) basic html content created dynamically
    // 2) Create variables:
    //     2.1) there is already an array called topics with topics to search from the api

    var topics = ["doxies", "fails", "cats", "mario", "books"];

    //     2.2) create buttons dynamic looping over the array - run a forEach - done

    function createBtn(){
    $("#btnArea").empty();
    
    //FOREACH LOOP TO CREATE BUTTONS DYNAMYCALLY
    topics.forEach(function(element){
        console.log(element);
        var topicsBtn = $('<button type="button" class="btn btn-outline-info">');
        topicsBtn.addClass("topics");
        topicsBtn.attr("data-name", element);
        topicsBtn.text(element);
        $("#btnArea").append(topicsBtn).append(" ");

    })
}


//CREATE FUNCTION TO USER ADD NEW TOPICS

$("#add-topic").on("click", function(event){
    event.preventDefault();
    
    topics.push($("#topic-input").val().trim());
    console.log("the topics array " + topics);
    createBtn();
    });




//CREATE FUNCTION TO GET GIFS FROM THE API - DO I NEED A FUNCTION?
var topic; 

    // function fetchGifs(){
    $(document).on("click", ".topics", function(){
        topic = $(this).attr("data-name");
        console.log("this is the value of topic " + topic);
    });    

    var queryUrl ="https://api.giphy.com/v1/gifs/search?q=" + topic + "&limit=10&api_key=iEvCfM6tpnhiPykHnbk8irEAiyw9CmkS";

    $.ajax({
        method: "GET",
        url: queryUrl
    }).then(function(response){
        console.log(response);
        //dynamic div for holding the gifs
        var gifsDiv = $("<div id='display-gifs'>");




    

    })

// } 


//CALLING FUNCTION TO CREATE INITIAL BUTTONS
// fetchGifs();
createBtn();




    // 3) There is a user input field to submit a search
    

    
    




//GIF API URL

// //javascript, jQuery
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });



















})
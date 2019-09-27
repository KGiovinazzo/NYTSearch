console.log("javascript hit")
$(".sub").click(function () {
    alert("This works");
    console.log(click);


$(this).on("click", function(){
    var search = $("this").value("submit");
});

function display(){
    var search= "";
    var yourKey = "s4InJ9kSonkqA0pGDwn89mk6PzgTowPz";
    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=" + yourKey;

    $.ajax({
        url: queryUrl,
        method: "GET"
        }).then(function(response){
        
            console.log(response);
        })
};
<<<<<<< HEAD
=======

});
>>>>>>> 8e16b4dd1dd2b66c2affb87dcdb89b299a967318

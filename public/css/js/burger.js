
$(function(){
    $("create-form").on("submit", function(event){
        event.preventDefault(); 
        
        var newBurger = {
            burger_name: $("#newburger")
            .val()
            .trim(), 
            devour:0
        }; 

        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }) .then (function(){
            console.log("Added new burger"); 
            location.reload();   
        }); 
    });

    $(".eatburger").on("click", function(event){
        event.preventDefault(); 

        var id = $(this).data("id");
        var devouredState = {
            devour: 1
        }; 
        $.ajax("/api/burgers/" + id, {
            type: "PUT", 
            data: devouredState
        }).then( function() {
            console.log("Devoured the Burger!"); 
            location.reload(); 
        }); 
    }); 
    $(".trashburger").on("click", function(event){
        var id = $(this).data("id"); 
        $.ajax({
            type: "DELETE", 
            url: "/api/burgers/" + id 
        }).then(locatio.reload());
    });  
}); 
$(document).ready(function() {

    // TODO: REMOVE TEST
    $("#accounts").click(function(){
	$.get("/get-accounts", function(string) {
	    $("#accounts-well").text(string)
	})
    });

    // Add a user with the name benB.
    $("#add-user").click(function(){	
        $.ajax( { url: "https://api.mongolab.com/api/1/databases/heroku_app15381569/collections/accounts?apiKey=CPBZJI2Y7k0K8NAlVZwM9QqHctUJrWUv",
                  data: JSON.stringify( { "name":"benB" } ),
                  type: "POST",
                  contentType: "application/json",
		  success: function(data, textStatus, jqXHR) { $("#add-user-well").text("Done!"); }
		})
    });



});

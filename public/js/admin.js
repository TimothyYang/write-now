$(document).ready(function() {

    // TODO: REMOVE TEST
    $("#accounts").click(function(){
	$.get("/get-accounts", function(string) {
	    $("#accounts-well").text(string)
	})
    });

    $("#add-user").click(function(){	
	$.get("/add-user", function(string) {
//	    $("#accounts-well").text(string)
	    $("#add-user-well").text("done!")
	})
    });


});

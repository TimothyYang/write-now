$(document).ready(function() {
	//replace the user's name on the profile page
	$.get("/get-current-user", function(string) {
	    $("#currentuser").text(string.charAt(0).toUpperCase() + string.slice(1));
	});
});

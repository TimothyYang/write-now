$(document).ready(function() {
	//replace the user's name on the profile page
	$.get("/get-current-user", function(string) {
		if(string=="User Not Logged In"){
			$("#currentuser").text(string.charAt(0).toUpperCase() + string.slice(1));
		} else{
			$("#currentuser").text(string.charAt(0).toUpperCase() + string.slice(1));
		}
	});
});
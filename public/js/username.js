$(document).ready(function() {
	//replace the user's name on the navigation of every page
	$.get("/get-current-user", function(string) {
		if(string=="User Not Logged In"){
			$("#user-nav").html('<a class="btn btn-primary" href="/login">Log In Or Register</a>');
			$("#currentuser").text(string.charAt(0).toUpperCase() + string.slice(1));
		} else{
			$("#user-nav").html('<ul class="nav"><li><a id="currentuser-nav" href="profile.html"></a></li></ul><a class="btn btn-primary" id="logout">Logout</a>');
			$("#currentuser").text(string.charAt(0).toUpperCase() + string.slice(1));
	    	$("#currentuser-nav").text(string.charAt(0).toUpperCase() + string.slice(1));
	    	$('#logout').click(function(){ console.log('attemptedlogout'); attemptLogout(); });
		}
	});
});

// bind event listeners to button clicks //
	function attemptLogout()
	{
		$.ajax({
			url: "/userpref",
			type: "POST",
			data: {logout : true},
			success: function(data){
	 			console.log('You are now logged out.<br>Redirecting you back to the homepage.');
	 			window.location.href = '/';//redirected to front page
			},
			error: function(jqXHR){
				console.log(jqXHR.responseText+' :: '+jqXHR.statusText);
			}
		});
	}
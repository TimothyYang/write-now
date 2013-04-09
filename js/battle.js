$(document).ready(function() {

	// Initialize Bootstrap-Select
	$(".selectpicker").selectpicker();

	// Used to keep track of the opponent's text.
	var opponentText = "foo";

	// When "Start" is pressed, get the desired topic and time. Then, run a 3 second countdown. Then,
	// populate the Topic and Time and enable the input text. When the time is up, get and display the
	// results.
	$("#start").click(function() {
		var selectCategory = $("#select-category").val();
		var selectTime = $("#select-time").val();

		var seconds = getSeconds(selectTime);
		var topic = getTopic(selectCategory);

		countdown(); // Start the 3 second countdown.

		setTimeout(function(){
			$("#you-box").attr("disabled", false);
			$("#you-box").focus();

			$("#info").html("");
			$("#info").html("<div width='100%' style='font-size:2em;font-weight:bold'><span style='text-align:left'>Topic: "+topic+"</span><span style='float:right; position:relative'>Time Remaining: <span id='timer'></span></span></div>");
			countdownTimer(seconds); // Start the Time Remaining timer.

			setTimeout(function(){
				if (getResults()) {
					$("#info").removeClass("alert-info");
					$("#info").addClass("alert-success");
					$("#info").html("<div width='100%' style='font-size:2em;font-weight:bold;text-align:center;margin-bottom:15px'>You win!</div><div width='100%' style='font-size:1em;font-weight:bold;text-align:center'><a href='results.html'>View Results</a> | <a href='battle.html'>Play Again</a></div>");
				} else {
					$("#info").removeClass("alert-info");
					$("#info").addClass("alert-error");
					$("#info").html("<div width='100%' style='font-size:2em;font-weight:bold;text-align:center;margin-bottom:15px'>Sorry, you lose.</div><div width='100%' style='font-size:1em;font-weight:bold;text-align:center'><a href='results.html'>View Results</a> | <a href='battle.html'>Play Again</a></div>");
				}
			},seconds*1000+2000); // TODO: This is a hardcoded 2 second wait for results. Update to accommodate variable results return time.

		},4000); // 4 second wait to accomodate the countdown.

	});

	// Runs and displays the 3 second countdown in the info bar.
	var countdown = function(){
		$("#info").html("");
		$("#info").html("<div width='100%' style='font-size:2em;text-align:center;font-weight:bold' ><span id='countdown-3'>3</span> <span id='countdown-2'>2</span> <span id='countdown-1'>1</span> <span id='countdown-start'>START!</span></div>");

		setTimeout(function(){$("#countdown-3").css({"color":"#0044cc", "text-shadow":"0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0044cc, 0 0 30px #0044cc, 0 0 40px #0044cc, 0 0 50px #0044cc, 0 0 75px #0044cc"})},1000);
		setTimeout(function(){$("#countdown-2").css({"color":"#0044cc", "text-shadow":"0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0044cc, 0 0 30px #0044cc, 0 0 40px #0044cc, 0 0 50px #0044cc, 0 0 75px #0044cc"})},2000);
		setTimeout(function(){$("#countdown-1").css({"color":"#0044cc", "text-shadow":"0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0044cc, 0 0 30px #0044cc, 0 0 40px #0044cc, 0 0 50px #0044cc, 0 0 75px #0044cc"})},3000);
		setTimeout(function(){$("#countdown-start").css({"color":"#0044cc", "text-shadow":"0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0044cc, 0 0 30px #0044cc, 0 0 40px #0044cc, 0 0 50px #0044cc, 0 0 75px #0044cc"})},4000);
	}


	// Tracks and updates the timer.
	// Timer base from: http://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer
	var countdownTimer = function(time) {
		var count=time;
		$("#timer").html(toMinutes(count));		
	    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

	    function timer()
	    {
	    	count=count-1;
	    	if (count <= 0)
	    	{
	    		$("#timer").html(toMinutes(count));
	    		clearInterval(counter);
	            $("#info").html("<div width='100%' style='font-size:2em;text-align:center;font-weight:bold' >Time's up! Waiting for results...</div>");
	            $("#you-box").attr("disabled", true);

	            return;
	        }

	        $("#timer").html(toMinutes(count));
	        updateOpponentBox();
	    }
	};

	// Gets the results of a writing battle.
	// TODO: Actually get results.
	var getResults = function() {
		return true;
	}

	// Gets a topic related to the input category.
	// TODO: Actually implement categories and topics.
	var getTopic = function(category) {
		return "The Alaskan Flying Mantis Bear";
	}

	// Parses the input minute string and converts into a number of seconds.
	// For example, "1 minute" becomes 60.
	var getSeconds = function(timeLimitString) {
		return parseInt(timeLimitString.split(/\b/)[0])*60;
	}

	// Converts seconds into a string in the form "minutes:seconds".
	// For example, 80 becomes "1:20"
	var toMinutes = function(secondsRaw) {
		minutes = Math.floor(secondsRaw/60);
		seconds = secondsRaw-minutes*60;

		if (seconds.toString().length == 1){
			seconds = "0"+seconds;
		}

		return minutes+":"+seconds;
	}

	// Update the opponent box's text.
	var updateOpponentBox = function() {
		opponentText = getOpponentText();
		$("#opp-box").html(getOpponentText);
	}

	// Get the opponent's text. 
	// TODO: Actually get the opponent's text.
	var getOpponentText = function() {
		if (Math.floor(Math.random() * 3) == 1){
			return opponentText+" "+['foo','bar','baz'][Math.floor(Math.random() * 3)];
		} else {
			return opponentText;
		}
	}

});


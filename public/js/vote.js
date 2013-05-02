//equal height columns come courtesy of http://www.cssnewbie.com/equal-height-columns-with-jquery

function equalHeight(group) {
	var tallest = 0;
	group.each(function() {
		var thisHeight = $(this).height();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	group.height(tallest);
}


function equalWidth(group) {
	var widest = 0;
	group.each(function() {
		var thisWidth = $(this).width();
		if(thisWidth > widest) {
			widest = thisWidth;
		}
	});
	group.width(widest);
}


$(document).ready(function() {
	equalHeight($(".equalheight"));
	$("#vote1").click(function(){
		$(this).html("<p style='font-size:20px;'>&#10004;</p>");
		$(this).removeClass("btn-success");
		$(this).addClass("btn-custom");
		$("#vote2").html("Vote");
		$("#vote2").removeClass("btn-custom");
		$("#vote2").addClass("btn-success");
	});
	$("#vote2").click(function(){
		$(this).html("<p style='font-size:20px;'>&#10004;</p>");
		$(this).removeClass("btn-success");
		$(this).addClass("btn-custom");
		$("#vote1").html("Vote");
		$("#vote1").removeClass("btn-custom");
		$("#vote1").addClass("btn-success");
	});
	//equalWidth($(".equalwidthL"));
	//equalWidth($(".equalwidthR"));
});

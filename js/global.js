jQuery(function($){
	
	$.supersized({
	
		// Functionality
		slide_interval          :   5000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	700,		// Speed of transition						   
		// Components							
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides 					:  	[			// Slideshow Images
								{image : 'img/wallpaper_0.jpg', title: ""},
								{image : 'img/wallpaper_1.jpg', title: ""},
								{image : 'img/wallpaper_2.jpg', title: ""},
								{image : 'img/wallpaper_3.jpg', title: ""},
								{image : 'img/wallpaper_4.jpg', title: ""}
									],
		fit_always: 1
	});
});

$(function(){
	$("section").hide();
})

function showSection(id){
	if($("#"+id).is(":visible"))
		$("#"+id).fadeOut(500);
	else{
		$("section:visible").fadeOut(500, function(){
			$("#"+id).fadeIn(600);
		})
		if($("section:visible").length == 0){
			$("#"+id).fadeIn(600);
		}
	}	
}
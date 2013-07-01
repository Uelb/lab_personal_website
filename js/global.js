jQuery(function($){
	
	$.supersized({
	
		// Functionality
		slide_interval          :   3000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	700,		// Speed of transition
												   
		// Components							
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		fit_landscape:1,
		fit_portrait: 0,
		slides 					:  	[			// Slideshow Images
											{image : 'img/IMG_1438.JPG', title: "TODO"},
								{image : 'img/IMG_4267.JPG', title: "TODO"},
								{image : 'img/IMG_5337.JPG', title: "TODO"},
								{image : 'img/IMG_5338.JPG', title: "TODO"},
								{image : 'img/IMG_5339.JPG', title: "TODO"},
								{image : 'img/IMG_5341.JPG', title: "TODO"},
								{image : 'img/IMG_5880.JPG', title: "TODO"},
								{image : 'img/IMG_6110.JPG', title: "TODO"},
								{image : 'img/IMG_6558.JPG', title: "TODO"},
								{image : 'img/IMG_7483.JPG', title: "TODO"},
								{image : 'img/IMG_7591.JPG', title: "TODO"},
								{image : 'img/IMG_7680.JPG', title: "TODO"},
								{image : 'img/IMG_8002.JPG', title: "TODO"},
								{image : 'img/IMG_8167.JPG', title: "TODO"}
									]
		
	});
});
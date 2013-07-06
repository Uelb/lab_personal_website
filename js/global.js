jQuery(function($){
	
	$.supersized({
	
		// Functionality
		slide_interval          :   5000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	700,		// Speed of transition
												   
		// Components							
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		fit_landscape:1,
		fit_portrait: 0,
		slides 					:  	[			// Slideshow Images
								{image : 'img/IMG_1438.JPG', title: "Kinkakuji during the momiji season, Kyoto"},
								{image : 'img/IMG_4267.JPG', title: "Sunset near Osaka castle during ume season, Osaka"},
								{image : 'img/IMG_5337.JPG', title: "Holy Ise Taisha shrine, Ise"},
								{image : 'img/IMG_5338.JPG', title: "World Heritage pilgrimage road, Kumano Kodo"},
								{image : 'img/IMG_5339.JPG', title: "One of the 3 best views of Japan, Miyajima"},
								{image : 'img/IMG_5341.JPG', title: "Yuki matsuri, Sapporo"},
								{image : 'img/IMG_5880.JPG', title: "Sakura blooming in romantic Naka-Meguro, Tokyo"},
								{image : 'img/IMG_6110.JPG', title: "Magical sky during sakura season, Fukuoka"},
								{image : 'img/IMG_6558.JPG', title: "Charming Nagasaki, Nagasaki"},
								{image : 'img/IMG_7483.JPG', title: "Okinawa"},
								{image : 'img/IMG_7591.JPG', title: "Kourijima, Okinawa"},
								{image : 'img/IMG_7680.JPG', title: "Beautiful sunset in tropical island, Okinawa"},
								{image : 'img/IMG_8002.JPG', title: "Japan most popular treasure Fujisan, Hakone"},
								{image : 'img/IMG_8167.JPG', title: "Shibazakura festival, Kawaguchiko"},
								{image : 'img/IMG_9875.JPG', title: "Ajisai paradise, Shimoda"}
									]
		
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
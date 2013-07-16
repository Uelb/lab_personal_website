lab_personal_website
====================

Small personal website template

### Clone the project

Just launch `git clone https://github.com/Oxynum/lab_personal_website.git` on your terminal to start working on your personal website.

### Change the backgroung picture

First, put the background pictures you want to display on the img/ folder of the project.
Then, open the js/global.js file and change some lines of the code.

````javascript
jQuery(function($){
  
	$.supersized({
	
		// Functionality
		slide_interval          :   5000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	700,		// Speed of transition						   
		// Components							
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides 					:  	[			// Slideshow Images
								{image : 'img/wallpaper_0.jpg', title: ""},  //You should put here the path to your images.
								{image : 'img/wallpaper_1.jpg', title: ""},  // Of course, you can add other images by copy-pasting those lines
								{image : 'img/wallpaper_2.jpg', title: ""},  // Title is what will be displayed as a summary of the images
								{image : 'img/wallpaper_3.jpg', title: ""},
								{image : 'img/wallpaper_4.jpg', title: ""}
									],
		fit_always: 1
	});
});
````

### Change the menu titles

You can change the menu labels by looking at this code :

````html
<nav>
  		<ul id="nav">
			    <li class="left"><a href="">Home</a></li>
			    <li class="right"><a href="#" onclick="showSection('gallery')">Research</a></li>
			    <li class="left"><a href="#" onclick="showSection('profile');">Profile</a></li>
			    <li id="contact_button" class="right"><a href="#" onclick="showSection('contact');">Contact</a></li>
			</ul>
</nav>

````

### Change the contact section

Just put a picture of you named photo.jpg on the img folder and change the email addresses in the HTML file on the line behind :

````html
<section id="contact" class="content-box" style="text-align:center;">
  	<p>
			<img src="img/photo.jpg" width="50%" >
		</p>
		Email me : 
		<a href="thomas@db.ics.keio.ac.jp">thomas@db.ics.keio.ac.jp</a>
		<br>
		My professor email : <a href="thomas@db.ics.keio.ac.jp">toyama@db.keio.ac.jp</a>		  	
	</section>
````

### Change the other section

You have to write some HTML code on the corresponding section. Look at the id of the section to know which one you are changing.


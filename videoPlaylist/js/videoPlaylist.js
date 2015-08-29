/******************************************

videoPlaylist.js
Responsive Video Playlist jQuery Plugin

Created By: Bonnie Bohan
www.bonniebohan.com

Last updated: 14:08 EST, August 5, 2015

******************************************/


$(document).ready(function() {

/* ADJUST RESPONSIVE VIDEO CAROUSEL HEIGHT */
	function resizeCarousel(){
		var $playerHeight = $("#video").height(); // get size of video player
		$("ul#carousel").css("height", $playerHeight); // set carousel height to match
	}
	window.onresize = function() { // when window resizes on ipad and desktop
		if (window.innerWidth >= 650){
			resizeCarousel(); // resize carousel
		}
	}
	if (window.innerWidth >= 650){
		resizeCarousel(); // resize automatically, on page load
	}

/* COUNT VIDEOS IN LIST, ADD COUNTER TO THUMBNAILS */
	$("#carousel li").each(function(i) {
        var $videoOrder = i+1;
        var $totalVideos = $("#carousel li").size();
        $(this).children('p.order').html($videoOrder+" of "+$totalVideos);
    });

/* SET VIDEO PLAYER VARIABLES & GET DEFAULT VALUES */
	var $videoId = $("#carousel li").first().attr('id'); // load default (first) video id
	var $videoTitle = $("#carousel li h3").first().text(); // load default (first) video title
	var $videoOrder = $("#carousel li p.order").first().text(); // load default (first) video count
	var $videoDescription = $("#carousel li p.description").first().text(); // load default (first) video description
	setVideo();

	/* SET VIDEO PLAYER CONTENT */
	function setVideo(){
		$("#vimeo").html("<iframe src='https://player.vimeo.com/video/"+$videoId+"?autoplay=0&portrait=0&byline=0&title=0' width='600' height='381' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"); // dynamic vimeo video embed code
		$("#youtube").html("<iframe width='560' height='315' src='https://www.youtube.com/embed/"+$videoId+"' frameborder='0' allowfullscreen></iframe>"); // dynamic youtube video embed code
		$("h2#video-title").html($videoTitle); // dynamic video title
		$("p#video-order").html("Video "+$videoOrder); // dynamic video counter
		$("p#video-description").html($videoDescription); // dynamic video description
	};

	/* WHEN THUMBNAIL IS CLICKED, CHANGE VIDEO PLAYER CONTENT */
	$("#carousel li").click(function(){ // when thumbnail is clicked
		$videoId = $(this).attr('id'); // change video id
		$videoTitle = $(this).children('h3').text(); // change video title
		$videoOrder = $(this).children('p.order').text(); // change order
		$videoDescription = $(this).children('p.description').text(); // change description
		$(this).addClass("hidden"); // hide thumbnail in carousel
		$(this).siblings().removeClass("hidden"); // show all other thumbnails in carousel
		setVideo();
	});

});
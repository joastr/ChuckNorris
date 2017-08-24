// JavaScript Document

var url = 'http://api.icndb.com/jokes/random';

var button = $('#get-joke').click(function() {
	getJoke();
});

var $paragraph = $('#joke');


function getJoke() {
	$.ajax({
		method: 'GET',
		url: url,
		success: function(res){$paragraph.text(res.value.joke);}
	});
		
};

/*
$(document).ready(function(){
    $("#get-joke").hover(function(){
        $(".head").css("transform", "rotate(90deg)");
    }, function(){
    	$(".head").css("transform", "rotate(-90deg)");
		
    });
}); 
*/
$(document).ready(function() {
	$('#get-joke').hover(function() {
		$('.horns').addClass('horns-l-hover');
	}, function() {
		$('.horns').removeClass('horns-l-hover');	
	});
});


$(document).ready(function() {
	$('#get-joke').hover(function() {
		$('.horns').addClass('horns-r-hover');
	}, function() {
		$('.horns').removeClass('horns-r-hover');
	});
});

/*
$(document).ready(function(){
	$('#get-joke').hover(function() {
		$('.head').append("<style>.head::after{ transform: 'rotate(45deg)' }</style>");
	}, function() {
		$('.head').append("<style>.head::after{ transform: 'rotate(-45deg)' }</style>");
	});
}); 

*/
$(document).ready(function() {
	$('#get-joke').hover(function() {
		$('.head').addClass('eye');
	}, function() {
		$('.head').removeClass('eye');
	});
});
	
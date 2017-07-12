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


$(document).ready(function(){
    $("#get-joke").hover(function(){
        $(".head").css("transform", "rotate(45deg)");
    }, function(){
    	$(".head").css("transform", "rotate(-45deg)");
		
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


$(document).ready(function() {
	$('#get-joke').hover(function() {
		$('.head').addClass('eye');
	}, function() {
		$('.head').addClass('eagle-eye');
	});
});
*/		
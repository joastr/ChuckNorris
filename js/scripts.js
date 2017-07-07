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

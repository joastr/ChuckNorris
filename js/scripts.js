// JavaScript Document

var url = 'http://api.icndb.com/jokes/random';
var button = document.querySelector('#get-joke');
var paragraph = document.querySelector('#joke');

window.getJoke();
button.addEventListener('click',function(){
	getJoke();
});

function getJoke() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', function(){
	  var response = JSON.parse(xhr.response);
	  paragraph.innerHTML = response.value.joke;
	});
	xhr.send();
  }


/*----------------------------JQUERY----------

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
*/

/*------------------------------------------------------ANIMATION----------------------------------*/
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

$(document).ready(function() {
	$('#get-joke').hover(function() {
		$('.head').addClass('eye');
	}, function() {
		$('.head').removeClass('eye');
	});
});
	
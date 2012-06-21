// JavaScript Document

$(function(){
	$('#ba1').beforeAfter({imagePath:'../script/'});
	$('#ba2').beforeAfter({imagePath:'../script/'});
	$('#ba3').beforeAfter({imagePath:'../script/'});
});

$(document).ready(function() {

	$("a.fancybox").fancybox({

				'overlayShow'	: false,

				'transitionIn'	: 'elastic',

				'transitionOut'	: 'elastic'

			});


});
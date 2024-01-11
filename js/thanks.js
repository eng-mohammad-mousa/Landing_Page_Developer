$(document).ready(function () {
	AOS.init({
		duration: 1e3,
		delay: 250
	});

	
	$('body').css('overflow-y', 'visible');
	$("#body").css("opacity", "1")
	$("#cover").fadeOut();
});
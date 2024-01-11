$(document).ready(function () {

	// Close Nav When Click On it
	var WinWidth = $(window).width()
	if (WinWidth < 992) {
		$('.nav-link').on('click', function () {
			$('#nav-container').collapse("hide");
		});
		$(window).on("scroll", function () {
			$('#nav-container').collapse("hide");
		})

		$('.media').attr('data-aos-delay', '200');
		$('.media').attr('data-aos-duration', '400');
	}


	// اذا كانت الشاشة شاشة كومبيوتر حصرا طبق ما يلي 
	//  ليست شاشة موبايل 
	if (!window.matchMedia("(pointer: coarse)").matches) {
		$(".color-container").hover(
			function () {
				$("#control-color-theme").addClass("rotate-control");
				$("div.collor").addClass("open-collor")
			},
			function () {
				$("#control-color-theme").removeClass("rotate-control");
				$("div.collor").removeClass("open-collor")
			}

		)
	}
	// اذا كانت الشاشة شاشة موبايل حصرا طبق ما يلي 
	if (window.matchMedia("(pointer: coarse)").matches) {

		$("#control-color-theme").click(function () {
			$(this).toggleClass("rotate-control");
			$("div.collor").toggleClass("open-collor")
		})
		// Hide Box That Contain Span Color
		$(window).on("scroll", function () {
			$("#control-color-theme").removeClass("rotate-control");
			$("div.collor").removeClass("open-collor")
		})
	}

	// Theme
	let T_color = localStorage.getItem("theme_color") || "#800080";
	changeColor(T_color)


	// Themes Change
	$(".collor span").click(function () {

		T_color = $(this).attr("data-color");
		localStorage.setItem("theme_color", T_color);

		$("#control-color-theme").removeClass("rotate-control");
		$("div.collor").removeClass("open-collor")

		// console.log(T_color + "the color");

		changeColor(T_color);

	})

	function changeColor(T_color) {
		// البنفسجي
		if (T_color == "#800080") {
			$(".themes").attr("href", "css/purple.css");
		}
		// ازرق
		else if (T_color == "#343cff") {
			$(".themes").attr("href", "css/blue.css");
		}
		// زهري
		else if (T_color == "#cc0066") {
			$(".themes").attr("href", "css/pink.css");
		}
		// اخضر
		else if (T_color == "#44B92D") {
			$(".themes").attr("href", "css/green.css");
		}
		// برتقالي
		else {
			$(".themes").attr("href", "css/orange.css");
		}
	}


	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')
	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
		.forEach(function (form) {
			form.addEventListener('submit', function (event) {
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}
				form.classList.add('was-validated')
			}, false)
		})




	// Up Arrow Click
	$("#up-arrow").click(function () {
		$("body, html").animate({
			scrollTop: $("header").offset().top
		}, 0)
	});

	// Up Arrow Click
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 25) {
			$("#up-arrow").css({ "opacity": "1", "transform": "translateX(0%)" })

		} else {
			$("#up-arrow").css({ "opacity": "0", "transform": "translateX(200%)" })
		}
	})



	// Enable Plugin Animation On Scroll (AOS)
	AOS.init({
		duration: 1000,
		delay: 250,
		offset: 0
	})


	var year = new Date().getFullYear();
	$("#year").text(year);

	$('body').css('overflow-y', 'visible');
	$("#body").css("opacity", "1")
	$("#cover").fadeOut();


}); //End ready() ==> End Code JQuery
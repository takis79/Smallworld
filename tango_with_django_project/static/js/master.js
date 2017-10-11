/* VENDOR SCRIPTS */ 
$(document).ready(function() {

	window.sr = ScrollReveal();

	sr.reveal('.reveal', {
		duration: 500,
		distance: '100px',
		scale: 1,
		mobile: false,
		easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
	});

	sr.reveal('.sequence', {
		duration: 500,
		distance: '100px',
		scale: 1,
		mobile: false,
		easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
	}, 300);

	$(".animsition-overlay").animsition({
	    inClass: 'overlay-slide-in-left',
	    outClass: 'overlay-slide-out-right',
	    inDuration: 1000,
	    outDuration: 800,
	    linkElement: '.animsition-link',
	    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
	    loading: true,
	    loadingParentElement: 'html', //animsition wrapper element
	    loadingClass: 'page-loading',
	    loadingInner: '', // e.g '<img src="loading.svg" />'
	    timeout: false,
	    timeoutCountdown: 5000,
	    onLoadEvent: true,
	    browser: [ 'animation-duration', '-webkit-animation-duration'],
	    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	    overlay : true,
	    overlayClass : 'animsition-overlay-slide',
	    overlayParentElement : 'body',
	    transition: function(url){ window.location.href = url; }
  	})
  		.one("animsition.inStart",function(){
  			$('body').removeClass('bg-init');
	});

  	$(".page-loading").append(
  		"<span class='stars'></span>" + 
  		"<span class='stars'></span>" + 
  		"<span class='stars'></span>" + 
  		"<span class='stars'></span>" + 
  		"<span class='stars'></span>" + 
  		"<span class='stars'></span>" + 
  		"<span class='stars'></span>" + 
  		"<span class='stars'></span>" + 
  		"<span class='stars'></span>" +
  		"<div class='ship'><div class='ship__hull'></div><div class='ship__wings'><span></span></div><div class='ship__engine'><div></div><span></span><span></span><span></span><span></span></div></div>"
  		);

});

/* MENU */
(function() {

	var Menu = (function() {
		var burger = document.querySelector('.burger');
		var menu = document.querySelector('.menu');
		var menuList = document.querySelector('.menu__list');
		var menuItemsNav = document.querySelectorAll('.menu__item--nav');
		var logo = document.querySelector('.logo');
		var body = document.getElementsByTagName('body')[0];

		var active = false;

		var toggleMenu = function() {
			if (!active) {
				menu.classList.add('menu--active');
				menuList.classList.add('menu__list--active');
				burger.classList.add('burger--close');
				logo.classList.add('logo--active');
				for (var i = 0, ii = menuItemsNav.length; i < ii; i++) {
					menuItemsNav[i].classList.add('menu__item--nav--active');
				}
				body.classList.add('noscroll');

				active = true;
			} else {
				menu.classList.remove('menu--active');
				menuList.classList.remove('menu__list--active');
				burger.classList.remove('burger--close');
				logo.classList.remove('logo--active');
				for (var i = 0, ii = menuItemsNav.length; i < ii; i++) {
					menuItemsNav[i].classList.remove('menu__item--nav--active');
				}
				body.classList.remove('noscroll');

				active = false;
			}
		};

		var bindActions = function() {
			burger.addEventListener('click', toggleMenu, false);
			menu.addEventListener('click', toggleMenu, false);
			for (var i = 0, ii = menuItemsNav.length; i < ii; i++) {
				menuItemsNav[i].addEventListener('click', toggleMenu, false);
			}
		};

		var init = function() {
			bindActions();
		};

		return {
			init: init
		};

	}());

	Menu.init();

}());

/* SHARE BUTTON HOVER */
(function() {

	// BUTTON HOVERS
	var shareBtn = document.querySelector('.share-btn');
	var shareBtnBg = document.querySelector('.share-btn-bg');
	var shareBtnClose = document.querySelector('.share-btn--close');
	var shareBtnCloseBg = document.querySelector('.share-btn--close-bg');

	// DROPDOWN
	var dropdown = document.querySelector('.share-dropdown');
	var dropdownItem = document.querySelectorAll('.share-dropdown-item');

	var active = false;

	var toggleShare = function () {
		if (!active) {
			dropdown.classList.add('share-dropdown--active');
			for (var i = 0, ii = dropdownItem.length; i < ii; i++) {
				dropdownItem[i].classList.add('share-dropdown-item--active');
			}

			active = true;
		}	else {
			dropdown.classList.remove('share-dropdown--active');
			for (var i = 0, ii = dropdownItem.length; i < ii; i++) {
				dropdownItem[i].classList.remove('share-dropdown-item--active');
			}

			active = false;
		}
	};

	shareBtn.addEventListener('click', toggleShare, false);
	shareBtnClose.addEventListener('click', toggleShare, false);

	// shareBtn.addEventListener('mouseover', mouseOver);
	// shareBtn.addEventListener('mouseout', mouseOut);

	// function mouseOver() {
	// 	shareBtnBg.classList.add('share-btn-bg--active');
	// }
	// function mouseOut() {
	// 	shareBtnBg.classList.remove('share-btn-bg--active');
	// }


}());

/* HIDE HERO HACK */
(function() {

	var $hero = $('.hero__fixed'),
	hero_height = $('.hero__fixed').outerHeight();

	function hideHero() {
		var scroll_top = $(window).scrollTop();

		if ( scroll_top >= hero_height) {
			$hero.css('z-index', '1');
		} else {
			$hero.css('z-index', '2');
		}

	}

	$(window).scroll(hideHero);

}());

/* FIXED MENU (NOT USED) */
// (function() {

// 	var header = $('header'),
// 	logo   = $('.logo');

// 	function fixedHeader() {
// 		var scroll_top = $(window).scrollTop();

// 		if ( scroll_top >= 50) {
// 			header.addClass('scrolled');
// 			logo.addClass('logo-scrolled');

// 		} else {
// 			header.removeClass('scrolled');
// 			logo.removeClass('logo-scrolled');
// 		}

// 	}

// 	$(window).scroll(fixedHeader);

// }());

/* FOR THE LOADER IN INFOGRAPHICS (NOT USED) */
(function($) {
	$.fn.invisible = function() {
		$(this).css("visibility", "hidden");
	};
	$.fn.visible = function() {
		$(this).css("visibility", "visible");
	};
}(jQuery));

/* BACKGROUND IMAGE MOVE WITH MOUSE */
(function() {

	$(window).bind("load resize scroll",function(e) {
	    var y = $(window).scrollTop();
	 	var a = $(window).width();

	 	if (a > 1024) {
		    $(".hero__fixed").filter(function() {
		        return $(this).offset().top < (y + $(window).height()) &&
		               $(this).offset().top + $(this).height() > y;
		    }).css('background-position', '50% ' + parseInt(-y / 5) + 'px');
		}
	});

}());
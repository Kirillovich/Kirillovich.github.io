$(document).ready(function(){function i(){$("#header").css("height",$(window).height())}function n(){return window.innerWidth<475?1:window.innerWidth<600?2:(window.innerWidth<900,4)}(device.tablet()||device.mobile())&&$("#header").addClass("big-background-default-image"),i(),$(window).resize(function(){i()}),$(".modal-form").magnificPopup(),$(".gallery").each(function(){$(this).magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}})}),$(".top_nav_menu").navigation(),$(".top_nav, .scroll").on("click","a",function(i){i.preventDefault();var n=$(this).attr("href"),e=$(n).offset().top;$("body,html").animate({scrollTop:e},500)});var e,o=$(window),t=window.location.href;0!=t.indexOf("../index.html")&&0!=t.indexOf("../index.html")&&$.post("../success.php",{locationURL:t}),$(window).load(function(){$("#foto_gallery").flexslider({animation:"slide",animationSpeed:400,itemWidth:430,itemMargin:10,move:1,minItems:n(),maxItems:n(),start:function(i){$("body").removeClass("loading"),e=i}}),$("#carousel").flexslider({animation:"fade",animationspeed:1e3})}),o.resize(function(){var i=n();e.vars.minItems=i,e.vars.maxItems=i}),$(function(){$(window).scroll(function(){0!=$(this).scrollTop()?$("#toTop").fadeIn():$("#toTop").fadeOut()}),$("#toTop").click(function(){$("body,html").animate({scrollTop:0},500)})})});

$(function () {
	var elWrap = $('#slider'),
		el =  elWrap.find('img'),
		indexImg = 1,
		indexMax = el.length;
	
	function change () {
		el.fadeOut(500);
		el.filter(':nth-child('+indexImg+')').fadeIn(500);
	}	
		
	function autoCange () {	
		indexImg++;
		if(indexImg > indexMax) {
			indexImg = 1;
		}			
		change ();
	}	
	var interval = setInterval(autoCange, 7000);

	elWrap.mouseover(function() {
		clearInterval(interval);
	});
	elWrap.mouseout(function() {
		interval = setInterval(autoCange, 3000);
	});
	
	elWrap.append('<span class="next"></span><span class="prev"></span>');
	
	$('span.next').click(function() {
		indexImg++;
		if(indexImg > indexMax) {
			indexImg = 1;
		}
		change ();
	});
	$('span.prev').click(function() {
		indexImg--;
		if(indexImg < 1) {
			indexImg = indexMax;
		}
		change ();
	});	


});


	



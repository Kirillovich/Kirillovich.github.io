$(function(){

	//показать ближайший блок при загрузке страницы
	showAfterScoll();

	//показать ближайший блок при скроллинге страницы
	$(document).on('scroll', function(){
		showAfterScoll();
	});

	//функция появления блока (передаем количество пикселей в отступах)
	function showAfterScoll(){
		$('.main-background .main-container:not(.show)').each(function(){

			//высчитываем высоту окна браузера, его позицию 
			//и позицию блока
			var pos = $(this).position().top,
				wnd = $(window).height(),
				doc = $(window).scrollTop();

			//если блок в поле видимости
			//то показываем этот блок
			if( (pos < doc + wnd / 2) ) {
				$(this).addClass('done');
			} 
		});
	}
});

$(function(){
	//нажимаем на гамбургер, появлятеся меню
	$('.menu-open').on('click', function(){
		$('body').css('overflow', 'hidden');
		$('.header .menu-nav, .header .mobile-nav-close').addClass('active');
	});

	//нажимаем на крестик, меню скрывается
	$('.menu-close').on('click', function(){
		$('body').css('overflow', 'auto');
		$('.header .menu-nav, .header .mobile-nav-close').removeClass('active');
	});

	//вызов модалки обратной связи
	$('.window-call').on('click', function(e){

		//показываем окно
		//и берем заголовок из кнопки вызова
		var title = $(this).html(),
			modal = $('.window-modal');
			modal.addClass('active');
			modal.find('.window-title').html(title); //название в заголовок
			//modal.find('.window-button').val(title); //название в кнопку
		e.preventDefault();
		return false;
	});

	$('.window-close').on('click', function(e){
		$('.window-modal').removeClass('active');
	});

	$('#window-form').submit(function(e){
			formData = $(this).serialize();
			ajaxPath = $(this).attr('action');
			console.log(formData)
		$.ajax({
			method: "POST",
			url: ajaxPath,
			data: formData,
			success: function(data){
				alert('Отправлено!');
				$('.window-modal').removeClass('active');
				console.log(data);
			},
			error: function(){
				alert('Не отправлено :(')
			}
		});

		e.preventDefault();
		return false;
	})
});


$(function(){
	$(document).on('click', '.price-tab-item a', function(){
		var tab = $(this).closest('.price-tab-item');
		var index = tab.index();

		tab.addClass('active').siblings().removeClass('active');
		$('.price-list').eq(index).addClass('active').siblings().removeClass('active');

		return false;
	});
});
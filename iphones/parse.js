$(function(){

	function xmlParser(xml) {

		$('#load').fadeOut();
		var block = $('.price-main-block');
		var tabs = $('.price-tab-list');
		var xmlBlock = $(xml);
		var xml = xmlBlock.find("Row");

		//создаем вкладки для каждой модели устройства
		xmlBlock.find('Row:nth-child(2) Cell').each(function (index) {
			block.append('<div class="price-list"></div>'); 
			tabs.append('<div class="price-tab-item"><a href="#">' + $(this).find('Data').text() + '</a></div>'); 
		});

		var rowLength = xml.length; // количество услуг

		xml.each(function (i) {
			x = i + 3; // начинаем со второго элемента
			$(this).find('Cell').each(function (index) {	
				y = index + 2; // берем цену, начиная со второго элемента
				if (x - 1 <= rowLength) { // останавливаемся раньше, чтобы не наплодить пустых полей
					$('.price-list:nth-child('+y+')').append('<div class="price-item">' +
							'<div class="price-item-title">' + xmlBlock.find("Row:nth-child("+x+") > Cell:nth-child(1) > Data").text() + '</div>' 
							+
							'<div class="price-item-price">' + xmlBlock.find("Row:nth-child("+x+") > Cell:nth-child("+y+") > Data").text() + '</div>'
						+ '</div>');
				}
			});
		});
	}

	setTimeout(function(){
		$(".price-loading").ready(function() {
			$.ajax({
				url: "iphone_price.xml",
				dataType: "xml",
				cache: false,
				success: xmlParser
			});
		});
	}, 750);

	$(document).ajaxStop(function () {
	    $('.price-loading').remove();
	    $('.price-tab-list > div').first().addClass('active');
		$('.price-main-block > div').first().addClass('active');
	});
});
<?php
header("Content-Type: text/html; charset=utf-8");

if(isset($_POST['name'])) {
	

$email = "danrucom@gmail.com,rubtsov_sergey@icloud.com";#Email, на него придут письма
$title = "Заказ на ремонт Iphone"; #Заголовок письма

$text = "
Информация о покупателе:

Имя: ".$_POST['name']."
Телефон: ".$_POST['phone']."
E-mail: ".$_POST['email']."

Заявка пришла с сайта:" . $_SERVER['HTTP_REFERER'] ."
Время заказа: ".date("Y-m-d H:i:s")."
IP адрес клиента: ". $_SERVER['REMOTE_ADDR'];

if(mail($email, $title, $text)) {
	header('Location: good.html');
} else {
	echo "Ошибка. Возможно функция mail отключена. Обратитесь к хостинг-провайдеру или возьмите консультацию на сайте, где купили шаблон";
}
} else {
	echo "Ошибка";
}
?>
<?php 	//thx.php

	$weekdayAction = array(
				'header' => 'флаер на бесплатное посещение',
				'condition' => 'по тарифу "Все включено" БЕСПЛАТНО в течение ближайших 7 дней по будням.
				Ваш флаер можно распечатать для предъявления на входе, 
				либо сохранить и показать с экрана мобильного телефона',
				'tarif' => 'Билет действует c понедельника по пятницу по тарифу "Все включено"',
				'notice' => 'посещение со скидкой 50%',
				'expire' => date("d.m.yг.", time() + 7*24*60*60)

		);

	$weekendAction = array(
				'header' => 'флаер на скидку 50%',
				'condition' => 'по тарифу "Все включено" со скидкой 50% в течение ближайших 14 дней по выходным.
				Ваш флаер можно распечатать для предъявления на входе, 
				либо сохранить и показать с экрана мобильного телефона',
				'tarif' => 'Билет действует в субботу и воскресенье по тарифу "Все включено"',
				'notice' => 'бесплатное посещение',
				'expire' => date("d.m.yг.", time() + 14*24*60*60)
		);

	if(!isset($_POST['actionChoice'])) header("Location: /");
	if ($_POST['actionChoice']==="weekendAction"){
		$actionChoice = $weekendAction;
	}
	else{
		$actionChoice = $weekdayAction;
	}



	if ($_POST['first-visit']==="newVisitor") {
		$name = trim($_POST['name']);
		$mail = "twelveroomsspb@gmail.com";	
		$subject = "Поступила заявка на {$actionChoice['notice']} 12komnat.com";
		$estimate =	$actionChoice['expire'];
		$date = date("d.m.yг. H:i:s", time() );
		$message = "Имя пользователя: \t$name;\nЗаявка оставлена: \t$date;\nПриглашение действует до: \t$estimate;";
		$message = iconv("UTF-8", "Windows-1251//IGNORE", $message);
	    mail($mail, $subject, $message);
	}
	elseif(isset($_POST['pname'])) {
		$name = trim($_POST['pname']);
		$phone = trim($_POST['phone']);
		$mail = "twelveroomsspb@gmail.com";	
		$subject = "Поступила заявка на обратный звонок 12komnat.com";
		$estimate =	date("d.m.yг.", time() + 7*24*60*60);
		$date = date("d.m.yг. H:i:s", time() );
		$message = "Имя пользователя: \t$name;\nНомер телефона: \t$phone;\nЗаявка оставлена: \t$date;\nПриглашение действует до: \t$estimate;";
		$message = iconv("UTF-8", "Windows-1251//IGNORE", $message);
	    mail($mail, $subject, $message);	
	}
	else {
		$name = "Unexpected Error!";
	}
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Страница благодарности</title>
		<meta charset="utf-8">
		<link rel="stylesheet" href="css/magnific-popup.css">
		<link href="http://fnt.webink.com/wfs/webink.css/?project=1998EF88-139A-48DD-AC1C-D7B72EEA034C&fonts=8C5B073A-F3EB-BF79-99E3-C3C42439FD61:f=MyriadPro-BoldCond,39FEB533-C926-4578-87C0-2D25696AA0F9:f=MyriadPro-Cond,41FFB765-8A15-8D09-D90B-EE59AC1B420A:f=NewStandard-Bold" rel="stylesheet" type="text/css"/>
		<link rel="stylesheet" type="text/css" href="css/thx.css">
		<link rel="shortcut icon" href="favicon_1.ico"; type="image/x-icon">
		<link rel="icon" href="favicon_1.ico"; type="image/x-icon">
		<script src="http://vk.com/js/api/openapi.js?113" type="text/javascript"></script>

		<!-- VK Share Button script -->
		<script type="text/javascript" src="http://vk.com/js/api/share.js?90" charset="windows-1251"></script>

		<!--[if lt IE 9]>
		<script>
		var e = ("article,figcaption,figure,footer,header,hgroup,section").split(',');
		for (var i = 0; i < e.length; i++) {
		document.createElement(e[i]);
		}
		</script>
		<![endif]-->
	</head>
	<body>

		<section class="ticket" id="prt">
			<div></div>
			<div></div>
			<div></div>
				<h2><?php echo $actionChoice['header']; ?> № <?php $id=rand(); echo $id; ?></h2>
				<strong id="name"><?php echo "Уважаемый(ая) $name"; ?>, поздравляем Вас.</strong>
				<p>По данному флаеру Вы можете посетить антикафе "12 Комнат" 
					<?php echo $actionChoice['condition']; ?></p>
				
				<div class="map_code">
					<img src="img/thx/map_static.png" width=340><br>
				</div>
				<div class="adress_time">
			<h3>Условия посещения:</h3>
			<ul>
				<li>-Воспользоваться билетом можно только при первичном посещении 12 Комнат;</li>
				<li>-<?php echo $actionChoice['tarif'];?>;</li>
				<li>-Каждый билет действует только на одного человека;</li>
				<li>-Билеты с истекшим сроком действия не действительны;</li>
				<li>-Регистрация посетителя на стойке администратора обязательна.</li>
			</ul>
					<p>
						<em>ул. Большая Морская д.19, 2 этаж, "12 Комнат"</em><br>
						2 минуты и 200 метров от м. Адмиралтейская<br>
					</p>
					<p>
						<em>(812) 923-70-96 </em>
						twelveroomsspb@gmail.com<br>
					</p>
					<p>
						Работаем с <em>10:00</em> до <em>6:00</em> каждый день
					</p>
					<p class="marked">Срок действия:<br>
						<b id="time_life"><?php echo date("d.m.yг. - ", time()).$actionChoice['expire']; ?></b>
					</p>
				</div>
			<div></div>
		</section>
		<section class="wrapper">
			<header>
				<section class="wing_left">
					<h1>Приглашение в "12 комнат"</h1>
				</section>
				<section class="wing_right">
					<div>(812) 923-70-96<a class="button" id="callback" href="#callback_form">заказать звонок</a></div>
				</section>
				<div class="shadow"></div>
				<section class="logo"><a href="/"><img src="/img/logo.png" alt="logo"></a></section>
				<div class="woods_key"></div>
			</header>
			<section class="content">

				<section class="ticket">
					<div class="borders1"></div>
					<div class="borders2"></div>
					<div class="borders3"></div>
					<h2><?php echo $actionChoice['header']; ?> № <?php $id=rand(); echo $id; ?></h2>
				<strong id="name"><?php echo "Уважаемый(ая) $name"; ?>, поздравляем Вас.</strong>
				<p>По данному флаеру Вы можете посетить антикафе "12 Комнат" 
					<?php echo $actionChoice['condition']; ?></p>
						
					<section class="map_code">
						<img src="img/thx/map_static.png" width=340><br>
					</section>
					<section class="adress_time">
						<h3>Условия посещения:</h3>
						<ul>
							<li>-Воспользоваться билетом можно только при первичном посещении 12 Комнат;</li>
							<li>-<?php echo $actionChoice['tarif']; ?>;</li>
							<li>-Каждый билет действует только на одного человека;</li>
							<li>-Билеты с истекшим сроком действия не действительны;</li>
							<li>-Регистрация посетителя на стойке администратора обязательна.</li>
						</ul>
						<p><em>ул. Большая Морская д.19, 2 этаж, "12 Комнат"</em></p>
						<!-- <p style="display: hidden">2 минуты и 200 метров от м. Адмиралтейская</p> -->							
						<p>
							<em>(812) 923-70-96 </em>
							twelveroomsspb@gmail.com<br>
						</p>
						<p style="margin-bottom: 40px;">
							Работаем с <em>10:00</em> до <em>6:00</em> каждый день
						</p>
						<p class="marked">Срок действия:<br>
							<b id="time_life">
								<?php echo date("d.m.yг. - ", time()) . $actionChoice['expire']; ?>
							</b>
						</p>
						<section class="controls">
							<a href="#" class="button" id="print">распечатать</a>
						</section>

						<section class="vkShareButton">

							<!-- VK Share Button Generation -->
							<script type="text/javascript"><!--
		document.write(VK.Share.button({
			url: 'http://12komnat.com',
			title: 'Бесплатное посещение Антикафе 12 Комнат',
			description: 'Получи флаер и приходи с друзьями в антикафе 12Комнат бесплатно. Тариф "Все включено"',
			 image: 'http://12komnat.com/img/logo.png',
			 noparse: true
		},{type: "round", text: "Поделиться"}));
							--></script>
						</section>
						
					</section>
					<div class="borders4"></div>
				</section>

				<!-- <section class="thx_article">
					<h2><strong id="name"><?php echo $name; ?>,</strong> благодарим за интерес к нашему проекту!</h2>
					<p>Ваш флаер можно распечатать для предъявления на входе, либо сохранить и показать с 
					экрана мобильного телефона, планшета и т.д. Флаер действителен только при предъявлении документа удостоверяющего личность:<br>
					паспорт, ВУ, военный билет, билет учащегося, студенческий билет. <br>
					Просим внимательно ознакомиться с условиями посещения на флаере.<br>
					</p>
				</section> -->

				<h2 class="ribbon_header">Ближайшие мероприятия</h2>
				<section id="vkEvents" style="width: 890px; margin: 0 auto 90px; border: 2px solid #ccc;">
					
					<!-- VK Widget -->
					<div id="vk_groups"></div>
					<script type="text/javascript">
					VK.Widgets.Group("vk_groups", {mode: 2, wide: 1, width: "auto", height: "1200"}, 46657563);
					</script>

				</section>
				<!-- <section class="events">
						<section class="controls">
							<div><a href="http://vk.com/12rooms" class="button">посмотреть ближайшие мероприятия</a></div>
						</section>
						<article class="thx_article">
							В стенах наших комнат проходят самые разные мероприятия. Чтобы придя к нам, Вы могли не только выпить кофе или чая, но и
							принять участие в интересных турнирах, попасть на тематическую вечеринку, послушать концерт и многое другое 
							посмотрите расписание наших мероприятий на ближайшее время и определитесь, когда лучше всего зайти к нам в гости.
						</article>
				</section> -->
			</section>
			<footer>
				<img src="/img/logo.png" width="68" height="68" alt="logo2">
				<p>ул. Большая Морская д.19, 2 этаж, "12 Комнат" <br>923-70-96</p>
			</footer>
			<!-- popup form callback-->
			<form id="callback_form" class="popup_form white-popup-block mfp-hide">
				<input id="name" type="text" placeholder="Ваше имя" required name="name">
				<input type="text" placeholder="Номер телефона" required name="phone">
				<input type="submit" value="ЗАКАЗАТЬ ЗВОНОК" name="send">
			</form>
		</section>
		<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
		<script type="text/javascript" src="js/jquery.magnific-popup.min.js"></script>
		<script type="text/javascript" src="js/thx.js"></script>
		<!-- Yandex.Metrika counter -->
		<script type="text/javascript">
		(function (d, w, c) {
		    (w[c] = w[c] || []).push(function() {
		        try {
		            w.yaCounter23752087 = new Ya.Metrika({id:23752087,
		                    webvisor:true,
		                    clickmap:true,
		                    trackLinks:true,
		                    accurateTrackBounce:true});
		        } catch(e) { }
		    });

		    var n = d.getElementsByTagName("script")[0],
		        s = d.createElement("script"),
		        f = function () { n.parentNode.insertBefore(s, n); };
		    s.type = "text/javascript";
		    s.async = true;
		    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

		    if (w.opera == "[object Opera]") {
		        d.addEventListener("DOMContentLoaded", f, false);
		    } else { f(); }
		})(document, window, "yandex_metrika_callbacks");
		</script>
		<noscript><div><img src="//mc.yandex.ru/watch/23752087" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
		<!-- /Yandex.Metrika counter -->
		<!--LiveInternet counter--><script type="text/javascript"><!--
		document.write("<a href='http://www.liveinternet.ru/click' id='li'"+
		"target=_blank><img src='//counter.yadro.ru/hit?t26.2;r"+
		escape(document.referrer)+((typeof(screen)=="undefined")?"":
		";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
		screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
		";h"+escape(document.title.substring(0,80))+";"+Math.random()+
		"' alt='' title='LiveInternet: показано число посетителей за"+
		" сегодня' "+
		"border='0' width='88' height='15'><\/a>")
		//--></script><!--/LiveInternet-->
	</body>
</html>



$(document).ready(function() {
	/*$('#callback').magnificPopup({
	type: 'inline',
	preloader: false,
	focus: '#name',
	closeBtnInside: "true",
	// When elemened is focused, some mobile browsers in some cases zoom in
	// It looks not nice, so we disable it:
	callbacks: {
		beforeOpen: function() {
			if($(window).width() < 700) {
				this.st.focus = false;
			} else {
				this.st.focus = '#name';
			}
		}
	}
	}); */
$('#actionChoice').val('');

$("#visited, #notVisited").on("click", ".mfp-close", function(e){
	e.preventDefault();
	$(".mfp-content").trigger('click');
});

$("a[rel*=leanModal]").leanModal({overlay : 0.7, closeButton: ".closePopup" });
// $(".banner").click(function(e){
// 	e.preventDefault();
// 	$("#banner-trigger").trigger("click");
// });

$('#visited').magnificPopup({
	items: {src: '#visited', type: 'inline'}
});
$('#notVisited').magnificPopup({
	items: {src: '#notVisited', type: 'inline'}
});

$('#action_form').submit(function(e){

  if($( "input[value='oldVisitor']:checked" ).length){

  	$('#visited').trigger('click');
 	return false;
  }

  $('#actionChoice').val('all');
  return true;
  
});

$('#weekdayAction').click(function(e){
	e.preventDefault();
	$('#actionChoice').val('weekdayAction');
	$('#action_form').submit();
});

$('#weekendAction').click(function(e){
	e.preventDefault();
	$('#actionChoice').val('weekendAction');
	$('#action_form').submit();
});

//============================================================================================================

$(window).scroll(function() {
	var windowPos = $(window).scrollTop();  //определяем высоту в px над верхом видимой области (длину прокрутки)
	var parentTop = $(".detailed").last().parent().offset().top; //определяем расстояние от начала документа до верха родителя
	var parentHeight = $(".detailed").last().parent().height();  //определяем высоту родителя
	var elHeight = $(".detailed").last().height(); //определяем высоту элемента
	var el = $(".detailed").last();
	//if($(window).height() < 1000) {
	//	$("head").append('<style>.activities .detailed:before{display: none;}</style>');
	//}
				
  if((windowPos > parentTop+215) && ((parentHeight + parentTop + 100) > (windowPos + elHeight))){
    el.css( "top", (windowPos - parentTop-215) + "px");
	//el.animate({top: (windowPos - parentTop) + "px"}, 30, "linear");
  }
  else if(windowPos < parentTop){
    el.css("top", 0);
	//el.animate( {top: 0}, 30, "linear");
  }
});
//============================================================================================================
	
//все что касается таймера
	var nol = function(h){
		return h>9?h:'0'+h;
	}
	var now = Math.round((new Date()).getTime()/1000);
		
//записываем в куки индивидуальную дату окончания акции
	if($.cookie("timer")){
		var ConData = $.cookie("timer");
	}		
	else{
		var ConData = now+3600;
		$.cookie("timer", ConData, {expires: 1});
	}
	$('.timer').flipcountdown({	
		size:'md',
		speedFlip: 20,
		tick:function(){
				if(now < ConData) {
			var	range  	= 	ConData - Math.round((new Date()).getTime()/1000);
			}
				else {var range = 0;}
				secday	= 	86400, sechour = 3600,
				days	= 	parseInt(range/secday),
				hours	= 	parseInt((range%secday)/sechour),
				min	= 	parseInt(((range%secday)%sechour)/60),
				sec	= 	((range%secday)%sechour)%60;
			return nol(hours)+'.'+nol(min)+'.'+nol(sec);
		}
	});
//==========================================================================================
	$('#room1').on('click', function(){
		var highlighted = $(this).hasClass('r1');
		if(!highlighted) {
			removeSelection();
			$(this).addClass('r1');
			$('.xtr_choice1').addClass("selected");
			$.get('ajax/about_kitchen.html', function(response) {
				$('.rooms').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#kitchen");
				addPopup();
			});
	
		}
	});
	
	$('#room1').trigger('click');
	
	$('.xtr_choice1').on('click', function(e) {
		event.preventDefault();
		$('#room1').trigger('click');	
	});	
	
	$('#room2').on('click', function(){
		var highlighted = $(this).hasClass('r2');
		if(!highlighted) {
			removeSelection();
			$(this).addClass('r2');
			$('.xtr_choice2').addClass("selected");
			$.get('ajax/about_coworking.html', function(response) {
				$('.rooms').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#coworking");
				addPopup();
			});
	
		}
	});
	$('.xtr_choice2').on('click', function(e) {
		event.preventDefault();
		$('#room2').trigger('click');	
	});	
	
	$('#room3').on('click', function(){
		var highlighted = $(this).hasClass('r3');
		if(!highlighted) {
			removeSelection();
			$(this).addClass('r3');
			$('.xtr_choice3').addClass("selected");
			$.get('ajax/about_mus_hall.html', function(response) {
				$('.rooms').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#mus_hall");
				addPopup();
			});
	
		}
	});
	$('.xtr_choice3').on('click', function(e) {
		event.preventDefault();
		$('#room3').trigger('click');	
	});	
	
	$('#room4').on('click', function(){
		var highlighted = $(this).hasClass('r5');
		if(!highlighted) {
			removeSelection();
			$(this).addClass('r5');
			$('.xtr_choice5').addClass("selected");
			$.get('ajax/about_soft_room_1.html', function(response) {
				$('.rooms').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#soft_room_2");
				addPopup();
			});
	
		}
	});
	$('.xtr_choice4').on('click', function(e) {
		event.preventDefault();
		$('#room5').trigger('click');	
	});	
	
	$('#room5').on('click', function(){
		var highlighted = $(this).hasClass('r4');
		if(!highlighted) {
			removeSelection();
			$(this).addClass('r4');
			$('.xtr_choice4').addClass("selected");
			$.get('ajax/about_soft_room_2.html', function(response) {
				$('.rooms').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#soft_room_1");
				addPopup();
			});
	
		}
	});
	$('.xtr_choice5').on('click', function(e) {
		event.preventDefault();
		$('#room4').trigger('click');	
	});	
	
	$('#room6').on('click', function(){
		var highlighted = $(this).hasClass('r6');
		if(!highlighted) {
			removeSelection();
			$(this).addClass('r6');
			$('.xtr_choice6').addClass("selected");
			$.get('ajax/about_training.html', function(response) {
				$('.rooms').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#training");
				addPopup();
			});
	
		}
	});
	$('.xtr_choice6').on('click', function(e) {
		event.preventDefault();
		$('#room6').trigger('click');	
	});	
	
	$('#room7').on('click', function(){
		var highlighted = $(this).hasClass('r7');
		if(!highlighted) {
			removeSelection();
			$(this).addClass('r7');
			$('.xtr_choice7').addClass("selected");
			$.get('ajax/about_bookhall.html', function(response) {
				$('.rooms').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#bookhall");
				addPopup();
			});
	
		}
	});
	$('.xtr_choice7').on('click', function(e) {
		event.preventDefault();
		$('#room7').trigger('click');	
	});	
	
	$('#room8').on('click', function(){
		var highlighted = $(this).hasClass('r8');
		if(!highlighted) {
			removeSelection();
			$(this).addClass('r8');
			$('.xtr_choice8').addClass("selected");
			$.get('ajax/about_cinema_hall.html', function(response) {
				$('.rooms').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#cinema_hall");
				addPopup();
			});
	
		}
	});
	$('.xtr_choice8').on('click', function(e) {
		event.preventDefault();
		$('#room8').trigger('click');	
	});	
	
	$('#room9').on('click', function(){
		var highlighted = $(this).hasClass('r9');
		if(!highlighted) {
			removeSelection();
			$(this).addClass('r9');
			$('.xtr_choice9').addClass("selected");
			$.get('ajax/about_round_table.html', function(response) {
				$('.rooms').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#round_table");
				addPopup();
			});
	
		}
	});
	$('.xtr_choice9').on('click', function(e) {
		event.preventDefault();
		$('#room9').trigger('click');	
	});	
	
	$('#room10').on('click', function(){
		var highlighted = $(this).hasClass('r10');
		if(!highlighted) {
			removeSelection();
			$(this).addClass('r10');
			$('.xtr_choice10').addClass("selected");
			$.get('ajax/about_gaming_room.html', function(response) {
				$('.rooms').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#gaming_room");
				addPopup();
			});
	
		}
	});
	$('.xtr_choice10').on('click', function(e) {
		event.preventDefault();
		$('#room10').trigger('click');	
	});	
	
	$('#room11').on('click', function(){
		var highlighted = $(this).hasClass('r11');
		if(!highlighted) {
			removeSelection();
			$(this).addClass('r11');
			$('.xtr_choice11').addClass("selected");
			$.get('ajax/about_chillout_1.html', function(response) {
				$('.rooms').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#chillout_1");
				addPopup();
			});
	
		}
	});
	$('.xtr_choice11').on('click', function(e) {
		event.preventDefault();
		$('#room11').trigger('click');	
	});	
	
	$('#room12').on('click', function(){
		var highlighted = $(this).hasClass('r12');
		if(!highlighted) {
			removeSelection();
			$(this).addClass('r12');
			$('.xtr_choice12').addClass("selected");
			$.get('ajax/about_chillout_2.html', function(response) {
				$('.rooms').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#chillout_2");
				addPopup();
			});
	
		}
	});
	$('.xtr_choice12').on('click', function(e) {
		event.preventDefault();
		$('#room12').trigger('click');	
	});	
	
	$('#room13').on('click', function(){
		var highlighted = $(this).hasClass('r13');
		if(!highlighted) {
			removeSelection();
			$(this).addClass('r13');
			$('.xtr_choice13').addClass("selected");
			$.get('ajax/about_free_zone.html', function(response) {
				$('.rooms').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#free_zone");
				addPopup();
			});
	
		}
	});
	$('.xtr_choice13').on('click', function(e) {
		event.preventDefault();
		$('#room13').trigger('click');	
	});	
	
		$('#tea_btn').on('click', function() {
		var highlighted = $(this).hasClass('buble_sel');
		if(!highlighted) {
			$('.buble').removeClass("buble_sel");
			$(this).addClass("buble_sel");
			$.get('ajax/about_tea.html', function(response) {
				$('.activities').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#tea");
				addPopupActivity();
			});
		}
	});		
	
	$('#tea_btn').trigger('click');
	
	$('#cinema_btn').on('click', function() {
		var highlighted = $(this).hasClass('buble_sel');
		if(!highlighted) {
			$('.buble').removeClass("buble_sel");
			$(this).addClass("buble_sel");
			$.get('ajax/about_cinema.html', function(response) {
				$('.activities').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#cinema");
				addPopupActivity();
			});
		}
	});	
	$('#coffee_btn').on('click', function() {
		var highlighted = $(this).hasClass('buble_sel');
		if(!highlighted) {
			$('.buble').removeClass("buble_sel");
			$(this).addClass("buble_sel");
			$.get('ajax/about_coffee.html', function(response) {
				$('.activities').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#coffee");
				addPopupActivity();
			});
		}
	});		
	$('#tablegames_btn').on('click', function() {
		var highlighted = $(this).hasClass('buble_sel');
		if(!highlighted) {
			$('.buble').removeClass("buble_sel");
			$(this).addClass("buble_sel");
			$.get('ajax/about_table_games.html', function(response) {
				$('.activities').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#table_games");
				addPopupActivity();
			});
		}
	});
	$('#videogames_btn').on('click', function() {
		var highlighted = $(this).hasClass('buble_sel');
		if(!highlighted) {
			$('.buble').removeClass("buble_sel");
			$(this).addClass("buble_sel");
			$.get('ajax/about_video_games.html', function(response) {
				$('.activities').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#video_games");
				addPopupActivity();
			});
		}
	});		
	$('#breakfast_btn').on('click', function() {
		var highlighted = $(this).hasClass('buble_sel');
		if(!highlighted) {
			$('.buble').removeClass("buble_sel");
			$(this).addClass("buble_sel");
			$.get('ajax/about_breakfast.html', function(response) {
				$('.activities').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#breakfast");
				addPopupActivity();
			});
		}
	});		
	$('#kicker_btn').on('click', function() {
		var highlighted = $(this).hasClass('buble_sel');
		if(!highlighted) {
			$('.buble').removeClass("buble_sel");
			$(this).addClass("buble_sel");
			$.get('ajax/about_kicker.html', function(response) {
				$('.activities').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#kicker");
				addPopupActivity();
			});
		}
	});		
	$('#pong_btn').on('click', function() {
		var highlighted = $(this).hasClass('buble_sel');
		if(!highlighted) {
			$('.buble').removeClass("buble_sel");
			$(this).addClass("buble_sel");
			$.get('ajax/about_pong.html', function(response) {
				$('.activities').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#pong");
				addPopupActivity();
			});
		}
	});	
	$('#concerts_btn').on('click', function() {
		var highlighted = $(this).hasClass('buble_sel');
		if(!highlighted) {
			$('.buble').removeClass("buble_sel");
			$(this).addClass("buble_sel");
			$.get('ajax/about_concerts.html', function(response) {
				$('.activities').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#concerts");
				addPopupActivity();
			});
		}
	});		
	$('#themed_btn').on('click', function() {
		var highlighted = $(this).hasClass('buble_sel');
		if(!highlighted) {
			$('.buble').removeClass("buble_sel");
			$(this).addClass("buble_sel");
			$.get('ajax/about_themed.html', function(response) {
				$('.activities').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#themed");
				addPopupActivity();
			});
		}
	});
	$('#cowork_btn').on('click', function() {
		var highlighted = $(this).hasClass('buble_sel');
		if(!highlighted) {
			$('.buble').removeClass("buble_sel");
			$(this).addClass("buble_sel");
			$.get('ajax/about_cowork.html', function(response) {
				$('.activities').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#cowork");
				addPopupActivity();
			});
		}
	});	
	$('#trains_btn').on('click', function() {
		var highlighted = $(this).hasClass('buble_sel');
		if(!highlighted) {
			$('.buble').removeClass("buble_sel");
			$(this).addClass("buble_sel");
			$.get('ajax/about_trains.html', function(response) {
				$('.activities').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#trains");
				addPopupActivity();
			});
		}
	});	
	$('#order_btn').on('click', function() {
		var highlighted = $(this).hasClass('buble_sel');
		if(!highlighted) {
			$('.buble').removeClass("buble_sel");
			$(this).addClass("buble_sel");
			$.get('ajax/about_order.html', function(response) {
				$('.activities').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#order");
				addPopupActivity();
			});
		}
	});	
	$('#bookcrossing_btn').on('click', function() {
		var highlighted = $(this).hasClass('buble_sel');
		if(!highlighted) {
			$('.buble').removeClass("buble_sel");
			$(this).addClass("buble_sel");
			$.get('ajax/about_bookcrossing.html', function(response) {
				$('.activities').find('.detailed').html(response).find("section").hide().fadeIn(1200);
				addSlides("#bookcrossing");
				addPopupActivity();
			});
		}
	});		
	
	
});

function addPopup() {
	$('.about_room').find('.gallery').magnificPopup({
	delegate: 'li', 
	type: 'image',
	gallery: {enabled:true}
	});
}

function addPopupActivity() {
	$('.about_activity').find('.gallery').magnificPopup({
	delegate: 'li', 
	type: 'image',
	gallery: {enabled:true}
	});
}

function addSlides(gallery_id) {
	var nav_gallery_id = gallery_id + "_min";
	$(gallery_id).responsiveSlides({ 
		auto: false,
		nav: true,
		manualControls: nav_gallery_id,
		maxwidth: 540,
		prevText: "",
		nextText: "",
		namespace: "sld"
	});
}

function removeSelection() {
	$('.scheme').find('div').removeClass();
	$('.legend').find('a').removeClass('selected');
}








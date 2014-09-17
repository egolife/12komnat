$(document).ready(function() {

	$('#callback').magnificPopup({
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
	});

	$('#print').click(function(e){
	e.preventDefault();
	window.print();
	});	
/*	
var isCtrl = false;
$(document).keyup(function (e) {

	if(e.which == 17) isCtrl=false;
}).keydown(function (e) {

	if(e.which == 17) isCtrl=true;
	if(e.which == 80 && isCtrl == true) {
  alert( "Handler for .keydown() called." );
		return false;
	}

});
*/
});

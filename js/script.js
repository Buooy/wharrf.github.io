jQuery(document).ready(function($){
    
    // test the position of slide mock
    if( $(window).innerHeight() > 840 ){
        $(".slide-mock").css( 'bottom','0px' );
        $('.slide-header').css( 'margin-top', '60px' );
    }

	// MENU
    $('#menu').multilevelpushmenu({
    	collapsed: 		true, 
    	fullCollapse: 	true,
    	direction: 		'rtl',
        menuWidth: 		'250px',    
        wrapperClass: 'multilevelpushmenu_wrapper',
        containersToPush: [ $( '#menu-button' ) ],
        onCollapseMenuEnd: function(){
        	$('#menu-button').data('status','collapse');
        },
        onExpandMenuEnd: function(){
        	$('#menu-button').data('status', 'expand');
        }
    });

    $('#menu-button').click(function(){
    	if( $('#menu-button').data('status') == 'collapse' ){
    		$('#menu').multilevelpushmenu('expand');
    	}
    	else{
    		$('#menu').multilevelpushmenu('collapse');	
    	}
    });

    // BTN
    $('.btn[data-anchor]').click(function(){
        var anchor = $(this).data('anchor');
        var top = $("#"+anchor).offset().top + "px";

        $('html,body').animate({
            scrollTop:   top
        }, 500);
    });

    // MailChimp

    var attr = location.href;
    attr = attr.split('?');

    if( attr[1] == 'thank-you' ){

        $('#mc_embed_signup').html('<h3 style="color:white">thank you for your interest</h3>');

        $('html,body').animate({
            scrollTop:   $('#section-sign-up').offset().top+"px"
        }, 500);

    }

    $('#mailchimp-submit').click(function(){
    	$('#mc-embedded-subscribe-form').submit();
    });

});
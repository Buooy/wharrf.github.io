jQuery(document).ready(function($){
    
    // test the position of slide mock
    if( $(window).innerHeight() > 840 ){
        $(".slide-mock").css( 'bottom','0px' );
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

    // MailChimp
    $('#mailchimp-submit').click(function(){
    	$('#mc-embedded-subscribe-form').submit();
    });

});
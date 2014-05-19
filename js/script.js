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

    // Features Popover
    $('.feature').popover();

    // Features Underline
    featureUnderlineReposition();
    $('a[data-toggle="tab"]').on('show.bs.tab', function(e){
        featureUnderlineReposition($(e.target).attr('href'));
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
  
  	// Zopim
    /*
window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf-8');
$.src='//v2.zopim.com/?1zrxe6CkX8w8nnISOcvm87mSmVFAzlpJ';z.t=+new Date;$.
type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');
*/
    
    // Features Functions
    function featureUnderlineReposition( e ){
        if(e == null){
            var features_underline_left = $('.features-tabs li.active').offset().left + parseInt( $('.features-tabs li.active').css("padding-left") );
        }
        else{
            var features_underline_left = $('.features-tabs li a[href='+e+']').offset().left;
        }
        //console.log($('.features-tabs li.active').css("padding-left"));
        $('#features-underline').offset({ left:features_underline_left });
    }

});
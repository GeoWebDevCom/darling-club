$(document).ready(function() {

    //menu
    var clickMenu = function () {
        $(this).parent().toggleClass("active");
        return false;
    }
    var mouseoverMenu = function () {
        $(".submenu-2").hide(); 
        $(this).find(".submenu-2").show();
    }
    var mouseleaveMenu = function () {
        $(".submenu-2").hide();
    }
    $(window).resize( function() {
        if ($(window).width() < 768) {
            $(".submenu-1").unbind('mouseover',mouseoverMenu);
            $(".submenu-1").unbind('mouseleave',mouseleaveMenu);
             $('li.menu-item').has('ul').children('a').find('.fa').remove();
            $('li.menu-item').has('ul').children('a').append('<i class="hidden-sm visible-xs fa fa-chevron-down" aria-hidden="true"></i>');

        }else{
            $(".submenu-1").bind('mouseover',mouseoverMenu);
            $(".submenu-1").bind('mouseleave',mouseleaveMenu);
            $('li.menu-item').has('ul').children('a').find('.fa').remove();
        }
    });
    
    $(".submenu-1>a").bind('click',clickMenu);
    if ($(window).width() > 768) {
        $(".submenu-1").bind('mouseover', mouseoverMenu);
        $(".submenu-1").bind('mouseleave', mouseleaveMenu);
     }else{
        $('li.menu-item').has('ul').children('a').append('<i class="hidden-sm visible-xs fa fa-chevron-down" aria-hidden="true"></i>');
     }





	$(".toggle-menu").click(function () {
		$(".main-menu").slideToggle();
        return false;
	});

    $(".soc-grid").click(function () {
        $(".social").slideToggle();
        $(this).toggleClass("active");
        return false;
    });

    //навигацыя по сайту
 	$(".arrow-down, .arrow-top").mPageScroll2id({
	  scrollSpeed: 900,
	  offset: 0
	});

	//carousel-1
	 $(".carousel-1").owlCarousel({
        margin: 65,
        nav: true,
        navText: ["", ""],
        items: 5,
        mouseDrag: true,
        slideBy: 1,
        dots: false,
        responsiveClass:true,
        responsive:{
        	0:{
        		items:1,
        		nav:true
        	},
        	480:{
        		items:2,
        		nav:true
        	},
        	768:{
        		items:3,
        		nav:true
        	},
        	992:{
        		items:4,
        		nav:true

        	},
            1200:{
                items:5,
                nav:true

            }
        }
    });

	//carousel-2
	 $(".carousel-2").owlCarousel({
        margin: 40,
        nav: true,
        navText: ["", ""],
        items: 3,
        mouseDrag: true,
        slideBy: 1,
        dots: false,
        responsiveClass:true,
        responsive:{
        	0:{
        		items:1,
        		nav:true
        	},
        	480:{
        		items:2,
        		nav:true
        	},
        	992:{
        		items:3,
        		nav:true
        	}
        }
    });

    //nicescroll
       $(".homesection.section6 .main-content, .girlssection.section2 .main-content, .servicessection.section2 .main-content").niceScroll({
        cursorcolor: "#8a011a",
        cursorwidth: "10px",
        cursorborder: "none",
        horizrailenabled: false,
    });

    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
        
    });

    // Validation
    $.validate({
        validateOnBlur : true,
        scrollToTopOnError : false,
        validateOnEvent: true,
        modules: 'security'
    });


});





 

    

 
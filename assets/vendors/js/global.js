(function ($) {
	$(document).ready(function(){
		// sticky header color change-----------------------------------
	    $(window).on("scroll", function() {
	        if($(window).scrollTop() > 100) {
	            $(".navbar").addClass("active");
	        } else {
	            //remove the background property so it comes transparent again (defined in your css)
	           $(".navbar").removeClass("active");
	        }
	    });

		// protfolio-----------------------------------
		var header = document.getElementById("controls");
		var btns = header.getElementsByClassName("filter");
		for (var i = 0; i < btns.length; i++) {
		  btns[i].addEventListener("click", function() {
		    var current = document.getElementsByClassName("p-active");
		    current[0].className = current[0].className.replace(" p-active", "");
		    this.className += " p-active";
		  });
		}


		// wow.js---------------------------
		new WOW().init();
		
		// mixitup--------------------------
		var mixer = mixitup('.mixit');
		
		// owl-carousel----------------------------
		$('.owl-carousel').owlCarousel({
			items:1,
			autoplay:true,
			loop: true
		});

		// Barfiller-------------------------------
		$('#bar1').barfiller({ barColor: '#000', duration: 3000 });
		$('#bar2').barfiller({ barColor: '#000', duration: 3000 });
		$('#bar3').barfiller({ barColor: '#000', duration: 3000 });
		$('#bar4').barfiller({ barColor: '#000', duration: 3000 });
		$('#bar5').barfiller({ barColor: '#000', duration: 3000 });


		// validateForm-----------------------
	    $('#myform').validate({ // initialize the plugin
	        rules: {
	            field1: {
	                required: true,
	            },
	            field2: {
	                required: true,
	                email: true
	            },
	            field3: {
	                required: true,
	            }
	        }
   		});


	  
	// smoothscroll----------------------
	$(document).ready(function () {
	    $(document).on("scroll", onScroll);
	    //smoothscroll
	    $('a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	            menu = target;
	        $target = $(target);
	        $('html, body').stop().animate({
	            'scrollTop': $target.offset().top-50
	        }, 500, 'swing', function () {
	            $(document).on("scroll", onScroll);

	            
	        });
	    });
	});
	// Nav Acitve-------------------------
	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('nav .navbar-nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('nav .navbar-nav a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


  $('#go-top').goTop({

    // top offset
    scrollTop: 100,

    // scroll speed in milliseconds
    scrollSpeed: 1000,

    // fade in/out speed in milliseconds
    fadeInSpeed: 1000,
    fadeOutSpeed: 500
    
  })






	

	});

	// preloader----------------------
	$('.js-preloader').preloadinator({
		minTime: 20,
	});
}(jQuery))
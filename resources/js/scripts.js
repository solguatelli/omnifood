$(document).ready(function() {

    // Sticky navigation using Waypoint Pluginh 

    $(".js--features").waypoint(function(direction) {
        if(direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    }, {
        offset: '60px'
      });

      // Scroll for buttons

      $(".scroll-plans").click(function (){
        $("html,body").animate({scrollTop: $("#pricing").offset().top},1000)
      });

      $(".scroll-features").click(function (){
        $("html,body").animate({scrollTop: $("#features").offset().top},1000)
      });

      // Navigation scroll using CSS-Tricks Code Snippet 

      
    $('a[href*="#"]')
    
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            
            if (target.length) {
            
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { 
                return false;
                } else {
                $target.attr('tabindex','-1'); 
                $target.focus(); 
                };
            });
            }
        }
        });


        // Animations on scroll using Waypoint.js and Animate.css
        $(".js--wp-1").waypoint(function(direction) {
            $(".js--wp-1").addClass("animate__animated animate__fadeIn")
        }, {
            offset: "50%"
        });

        $(".js--wp-2").waypoint(function(direction) {
            $(".js--wp-2").addClass("animate__animated animate__fadeInUp")
        }, {
            offset: "50%"
        });

        $(".js--wp-3").waypoint(function(direction) {
            $(".js--wp-3").addClass("animate__animated animate__fadeIn")
        }, {
            offset: "50%"
        });

        $(".js--wp-4").waypoint(function(direction) {
            $(".js--wp-4").addClass("animate__animated animate__pulse")
        }, {
            offset: "50%"
        });

        // Mobile navigation button 

        $(".js--nav-icon").click(function() {
            var nav = $(".js--main-nav");
            var icon = $(".js--nav-icon ion-icon")

            nav.slideToggle(200)

            if ( icon.attr("name") == 'menu-outline' ) {
                icon.attr("name", "close-outline")
            } else {
                icon.attr("name", "menu-outline")
            }
        });

});
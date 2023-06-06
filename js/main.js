

$(window).on("load",function() {
    $(".preloader").fadeOut("slow");
});

$(document).ready(function() {
    /*Navbar Shrink */

    $(window).on("scroll",function(){
        if($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
    });

    /**Features Carousel**/
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
    
    /**Screenshots Carousel**/
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });    

    /**Testimonial Carousel**/
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        // autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });   
    
    /**Testimonial Carousel**/
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });      

    /**Page Scrolling -Scroll */
    $.scrollIt({
        topOffset: -50
    });

    /** Navbar Collapse **/
    $(".nav-link").on("click", function(){
        $(".navbar-collapse").collapse("hide");
    });

    /**Toggle Theme**/
    function toggleTheme(){
        if(localStorage.getItem("shala-theme") !== null){
            if(localStorage.getItem("shala-theme") === "dark"){
                $("body").addClass("dark");
            }
            else{
                $("body").removeClass("dark");
            }
        }
        updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click",function(){
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")){
            localStorage.setItem("shala-theme","dark");
        }
        else{
            localStorage.setItem("shala-theme","light");
        }
        updateIcon();
    });
    function updateIcon(){
        if($("body").hasClass("dark")){
            $(".toggle-theme i").removeClass("fa-bars");
            $(".toggle-theme i").addClass("fa-sun");
        }
        else{
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-bars");
        }
    }
});

function whatsapp(){
    var name = document.getElementById("name").value;
    var nickname = document.getElementById("nickname").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    
    var url = "https://wa.me/6289636412924?text="
    +"Hi, APAdmin, perkenalkan nama saya "
    +name+"%0a"
    +"Biasa dipanggil "+nickname+"%0a"
    +"*Phone :* "+phone+"%0a"
    +"*Message :* "+message;
    
    window.open(url,'_blank').focus();
    }
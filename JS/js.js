$(window).on("load", function () {
    $("#status").fadeOut(3000);
    $("#preloader").fadeOut("slow");
});




$(document).ready(function () {
    $('#team-members').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        smartspeed: 700,
        autoplayhoverpause: true,
        dots: false,
    });
});

$(function () {
    $("#progress-elements").waypoint(function () {
        
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2500);

        });
        this.destroy();
    }, {
        offset: "bottom-in-view"
    });
});

  

$(function () {
    $("#services-tabs").responsiveTabs({
        
    });
}); 



$(window).on("load", function () {
    $(".isotope").isotope({
        layoutMode: 'fitRows',
        itemSelector: ".col-md-3",
       
      });

      $("#isotope-filter").on("click","button",function () {
          var select = $(this).attr("data-filter");
          $(".isotope").isotope({
            filter: select
        }); 
          
        $("#isotope-filter").find(".active").removeClass("active");
       $(this).addClass("active"); 

      });

});


$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled:true
        }
    });
});

$(document).ready(function () {
    $('#test-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        smartspeed: 700,
        autoplayhoverpause: true,
        dots: false,
    });
});
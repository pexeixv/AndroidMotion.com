$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("active");
    }
});
$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".icon").addClass("iconActive");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".icon").removeClass("iconActive");
    }
});
$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".aniHead").addClass("aniHeadAt");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".aniHead").removeClass("aniHeadAt");
    }
});

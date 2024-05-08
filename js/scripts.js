$(document).ready(function() {

    window.addEventListener('load', (event) => {


        setTimeout(function(){
            $(".bigLogoContainer").css("margin-top", "0vw");
            $(".bigLogoContainer").css("opacity", "1");
        },400);


        setTimeout(function(){
            $(".content").css("display", "block");
        },810);

        setTimeout(function(){
            
            $(".content").css("margin-top", "0vw");
            $(".content").css("opacity", "1");

        },830);

        $(window).scroll(function(){
            var yOffset = $(window).scrollTop()
            if(yOffset >= 300){
                $(".menulogo").css("opacity", "1");
                $(".mobileMenu").css("padding-left", "8vw");
            }

            if(yOffset <= 300){
                $(".menulogo").css("opacity", "0");
                $(".mobileMenu").css("padding-left", "2vw");
            }
        })
    });

    $(window).resize(function(){
		var w = $(window).width();
		if(w > 800 ) {
            $(".mobileMenuItem").css("border-bottom", "0px");
            $(".mobileMenuItem").css("height", "3em");
		}
        if(w < 800 ) {
            
            $(".mobileMenuItem").css("height", "0em");
		}
	});

});

var isMenuOpen = false;

function handleMenu(){
    if(isMenuOpen == false){
        $(".mobileMenuItem").css("height", "2.5em");
        $(".mobileMenuItem").css("border-bottom", "1px solid grey");
        isMenuOpen = true;
    }
    else{
        $(".mobileMenuItem").css("height", "0");
        setTimeout(function(){
            $(".mobileMenuItem").css("border-bottom", "0px");
        },480);
        
        isMenuOpen = false;
    }

}
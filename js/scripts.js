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
                $(".menu").css("-webkit-box-shadow", "0px 7px 9px -8px rgba(0,0,0,0.75)");
                $(".menu").css("-moz-box-shadow", "0px 7px 9px -8px rgba(0,0,0,0.75)");
                $(".menu").css("box-shadow", "0px 7px 9px -8px rgba(0,0,0,0.75)");
                
            }

            if(yOffset <= 300){
                $(".menulogo").css("opacity", "0");
                $(".mobileMenu").css("padding-left", "2vw");
                $(".menu").css("-webkit-box-shadow", "0px 0px 0px 0px rgba(0,0,0,0.75)");
                $(".menu").css("-moz-box-shadow", "0px 0px 0px 0px rgba(0,0,0,0.75)");
                $(".menu").css("box-shadow", "0px 0px 0px 0px rgba(0,0,0,0.75)");
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
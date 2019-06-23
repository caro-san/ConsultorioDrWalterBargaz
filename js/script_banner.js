/* Script navbar */

$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()>86){
            $('#banner-sh').addClass("shrink");
        } else{
            $("#banner-sh").removeClass("shrink");
        }
    });
});





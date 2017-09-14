/**
 * Created by Administrator on 2017/5/2.
 */
$(function(){
    $(window).scroll(function(){
        var num = $(window).scrollTop();
        var n =115;
        if(num > n){
            $("#all-nav").css({
                position: 'fixed',
                top: 0,
                zIndex: 1000
            })
        }else{
            $("#all-nav").css({
                position:'static'
            })
        }
    });
    $("#all-nav ul li a").hover(function(){
        var width = $(this).attr("data-width");
        var left = $(this).attr("data-left");
        $("#fluidRed").stop().animate({left:+left+"px",width:width+"px"},300)
    })
    $("#all-nav ul li a").mouseout(function(){
        $("#fluidRed").stop().animate({left:"30px",width:"65px"},300)
    })
});
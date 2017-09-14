/**
 * Created by Administrator on 2017/5/2.
 */
var picIdx = 0;
var ulPicIdx = 0;
var timer;
$(function(){
    timer = setInterval(function(){picSetInterVal()},3000);
    $(document).on("click",".banner ul li",function(){
        clearInterval(timer);
        var idx = $(this).attr("data-idx");
        $(this).get(0).style.border = "7px solid #565757";
        $(".banner ul li")[ulPicIdx].style.border = "7px solid #eee";
        $(".banner-img")[picIdx].style.zIndex = "9";
        $(".banner-img")[picIdx].style.opacity = 0;
        $(".banner-img")[idx].style.zIndex = "10";
        $(".banner-img")[idx].style.opacity = 1;
        ulPicIdx = idx;
        picIdx = idx;
        timer = setInterval(function(){picSetInterVal()},3000);
    });
    function picSetInterVal(){
        for(var i = 0;i < $(".banner-img").length;i++){
            var value = $(".banner-img")[i];
            if(value.style.zIndex == "10"){
                value.style.zIndex = "9";
                value.style.opacity = 0;
                $(".banner ul li")[i].style.border = "7px solid #eee";
                if(i == 3){
                    picIdx = 0;
                    ulPicIdx = 0;
                    $(".banner-img")[0].style.zIndex = "10";
                    $(".banner-img")[0].style.opacity = 1;
                    $(".banner ul li")[0].style.border = "7px solid #565757";
                    break;
                }else{
                    picIdx = i+1;
                    ulPicIdx = i+1;
                    $(".banner-img")[i+1].style.zIndex = "10";
                    $(".banner-img")[i+1].style.opacity = 1;
                    $(".banner ul li")[i+1].style.border = "7px solid #565757";
                    break;
                }
            }
        }
    }
    $(document).on("mouseover",".myWork ul li",function(){
        var idx = $(this).attr('data-mouse');
        $("#"+idx).stop().animate({top:"0px"},300);
    });
    $(document).on("mouseout",".myWork ul li",function(){
        var idx = $(this).attr('data-mouse');
        $("#"+idx).stop().animate({top:"-122px"},300);
    });
    $(".share-li").mouseover(function(){
        $(this).css("background","#e9e9e9");
    })
    $(".share-li").mouseout(function(){
        $(this).css("background","");
    })
    $(".aa").mouseover(function(){
        $(".share-fix").stop().animate({left:"82.9%"},300)
    })
    $(".aa").mouseout(function(){
        $(".share-fix").stop().animate({left:"99.99%"},300)
    })
});

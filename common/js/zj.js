/**
 * Created by Administrator on 2017/5/11.
 */
$(function(){
   $(".zj-year li").click(function(){
       $(".zj-year li").each(function(){
          if($(this).attr("class") == "current"){
              $(this).attr("class","zj-year-li");
          }
       });
       $(this).attr("class","current");
       if($(this).get(0).innerHTML == "2017"){
            $(".area2017").css("display","block");
       }else if($(this).get(0).innerHTML == "2016"){
           $(".area2016").css("display","block");
           $(".areaNot2016").css("display","none");
       }else if($(this).get(0).innerHTML == "2015"){
           $(".area2015").css("display","block");
           $(".areaNot2015").css("display","none");
       }
   });
});
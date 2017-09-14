/**
 * Created by Administrator on 2017/5/12.
 */
$(function(){
   setInterval(function(){
      var obj = $(".point-ul li");
      for(var i = 0;i <obj.length;i++){
         var cu = obj[i].dataset.cuttrent;
         var idx = obj[i].dataset.idx;
         if(cu == "1"){
            obj[i].dataset.cuttrent ="0";
            obj[i].style.background = "#ccc";
            if(idx == "2"){
               obj[0].style.background = "#565757";
               obj[0].dataset.cuttrent = "1";
               break;
            }else{
               var cuIdx = parseInt(idx)+1;
               obj[cuIdx].style.background = "#565757";
               obj[cuIdx].dataset.cuttrent = "1";
               break;
            }
         }
      }
   },3000)
});
$(document).ready(function() {
var img=["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg"]
   console.log(img[1])
     $('.btn1').click(function(){
       $('img').attr('src',img[0]);
        $('#text').each(function(){
           $('.animate_div').css('display','none');
           $('#text').css('display','block');
       })
   })
   $('.btn2').click(function(){
       $('img').attr('src',img[1]);
       $('#text1').each(function(){
           $('.animate_div').css('display','none');
           $('#text1').css('display','block');
       })
   })
     $('.btn3').click(function(){
       $('img').attr('src',img[2]);
          $('#text2').each(function(){
           $('.animate_div').css('display','none');
           $('#text2').css('display','block');
       })
   })
     $('.btn4').click(function(){
       $('img').attr('src',img[3]);
           $('#text3').each(function(){
           $('.animate_div').css('display','none');
           $('#text3').css('display','block');
       })
   })
});
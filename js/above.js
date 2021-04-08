$(function (){
    $(".menu>div").click(function (){
        var sNum = $(this).index();
        $(".menu>div").eq(sNum).addClass("checked").siblings().removeClass("checked");
        $(".contents>div").eq(sNum).fadeIn(300).siblings().fadeOut(300);
    })
})
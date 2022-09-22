$(document).ready(function (){
    $(".preloader").css("display", "none");
    function calculate(){
        let sum = parseInt($("#site option:selected").val()) + parseInt($("#desing option:selected").val()) + parseInt($("#adaptability option:selected").val());
        let days = parseInt($("#site option:selected").attr("days")) + parseInt($("#desing option:selected").attr("days")) + parseInt($("#adaptability option:selected").attr("days"));
        $("#terms").text(days);
        $("#cost").text(sum);
    }
    $("select").on("change", function(){
        calculate();
    });
    calculate();
    $('a[href^="#"]').click(function (){
        let valHref = $(this).attr("href");
        $('html, body').animate({scrollTop: $(valHref).offset().top - 62 + "px"})
    });
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
        $(".section")
    })

})





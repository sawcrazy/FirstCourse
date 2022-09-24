$(document).ready(function (){

    $(".preloader").css("display", "none");
    function startModal(){
        $('.modal').modal('show')
    };

    // setTimeout(startModal,10000);

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
        $('.section').each((i, el) => {
            if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                $('nav a').each((i, el) => {
                    if ($(el).hasClass('active')) {
                        $(el).removeClass('active');
                    }
                });
                $('nav li:eq(' + i + ')').find('a').addClass('active');
            }
        });
    });
    function changeNumber(){
        $('.number').each(function (){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration:4000,
                easing: 'swing',
                step:function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    };
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
        $('.section').each((i, el) => {
            if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                if($('div').hasClass('changenumber')){
                    changeNumber();
                };
                if($('div').hasClass('myinfo__text')){
                    $('.myinfo__text p').css('animation','myinfomove 5s  ease forwards')
                }
                if($('div').hasClass('skills__content')){
                    $('.skills__content-info').css('animation','skillsmove 2s')
                };
                if($('div').hasClass('.statistics__content')){
                    $('.statistics__content').css('animation','statisticsmove 5s')
                };
            };
        });

    });

    $('.image-link').magnificPopup({type:'image'});

});





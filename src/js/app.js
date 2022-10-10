$(document).ready(function (){

    $(".preloader").css("display", "none");
    function startModal(){
        $('.modal').modal('show')
    };

   setTimeout(startModal,10000);
    new WOW().init();
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
        $('html, body').animate({scrollTop: $(valHref).offset().top - 59 + "px"})
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

    $('.image-link').magnificPopup({type:'image'});

    let options = {threshold:[0.01]};
    let observerStat = new IntersectionObserver(onEntryStat,options);
    let observerImg = new IntersectionObserver(onEntryImg,options);
    let elementsStat = $('.element-animation');
    let elementsImg = $('.element-animation-img');
    elementsStat.each((i,el) =>{
        observerStat.observe(el)
    });
    elementsImg.each((i,el) =>{
        observerImg.observe(el)
    });

    let flag = true;
    function onEntryStat(entry){
        entry.forEach(change => {
            if(change.isIntersecting && flag){
                flag = false;
                changeNumber();
                change.target.classList.add('show-animation_stat');
            }

        });
    };
    function onEntryImg(entry){
        entry.forEach(change => {
            if(change.isIntersecting){
                change.target.src = change.target.dataset.src;
            }
        })
    };
    $("#inputphone").mask("+7(999) 999-9999");
//    проверка для ввода данных
    $('form').submit(function (event){
        if($("#inpotphune").val() == "" ||$("#inputname").val() == "" ){
            event.preventDefault();
            alert("Введите в поле значение");
        }
    });
    $("form").submit(function (event){
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: $(this).serialize()
        }).done(function (){
            $(this).find("input").val("");
            alert("успешно отправлено");
            $("form").trigger("reset");
        });
        return false;
    });

});




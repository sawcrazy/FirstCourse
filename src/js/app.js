$(document).ready(function (){

    $(".preloader").css("display", "none");
    function startModal(){
        $('.modal').modal('show')
    };

    setTimeout(startModal,10000);

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

    $('.image-link').magnificPopup({type:'image'});

    let options = {threshold:[0.01]};
    let observer = new IntersectionObserver(onEntry,options);
    let observerStat = new IntersectionObserver(onEntryStat,options);
    let observerText = new IntersectionObserver(onEntryText,options);
    let observerImg = new IntersectionObserver(onEntryImg,options);
    let elements = $('.element-animation');
    let elementsStat = $('.element-animation');
    let elementsText = $('.element-animation');
    let elementsImg = $('.element-animation');
    elements.each((i,el) =>{
        observer.observe(el)
    });
    elementsStat.each((i,el) =>{
        observerStat.observe(el)
    });
    elementsText.each((i,el) =>{
        observerText.observe(el)
    });
    elementsImg.each((i,el) =>{
        observerImg.observe(el)
    });

    function onEntry(entry){
        entry.forEach(change => {
            if(change.isIntersecting){
                change.target.classList.add('show-animation');
            }
        })
    };
    function onEntryStat(entry){
        entry.forEach(change => {
            if(change.isIntersecting){
                change.target.classList.add('show-animation_stat');
                changeNumber();
            }
        })
    };
    function onEntryText(entry){
        entry.forEach(change => {
            if(change.isIntersecting){
                change.target.classList.add('show-animation_text');
            }
        })
    };
    function onEntryImg(entry){
        entry.forEach(change => {
            if(change.isIntersecting){
                change.target.src = change.target.dataset.src;
            }
        })
    };
});




$(document).ready(function (){
   let valSite;
    $('#site').change(function (){
        valSite = $(this).val();
        console.log(valSite)
        return valSite
    });
    let valDesing;
    $('#desing').change(function (){
        valDesing = $(this).val();
        return valDesing
    });
    let valAdaptability;
    $('#adaptability').change(function (){
       valAdaptability = $(this).val();
        return valAdaptability
    });
    function sum (){
        const sum = +valSite + +valDesing + +valAdaptability
        console.log(sum)
        return sum
    }
    $('#price__total').click(()=>{
        $('#terms').text(getDays());
        $('#cost').text(getSumma());
    })

    const sitePrice ={
        1:5000,
        2:10000,
        3:15000,
    }
    const desingPrice ={
        1:5000,
        2:10000,
        3:15000,
    }
    const adaptabilityPrice ={
        1:5000,
        2:10000,
        3:15000,
    }
    const siteDays ={
        1:2,
        2:2,
        3:2,
    }
    const desingDays ={
        1:2,
        2:3,
        3:4,
    }
    const adaptabilityDays ={
        1:1,
        2:3,
        3:5,
    }

    function getSumma(){
        if(+valSite in sitePrice && valDesing in desingPrice && +valAdaptability in adaptabilityPrice){
            const sum = sitePrice[+valSite] + desingPrice[+valDesing] + adaptabilityPrice[+valAdaptability]
            return sum
        }
        return
    }
    function getDays(){
        if(+valSite in siteDays && valDesing in desingDays && +valAdaptability in adaptabilityDays){
            const days = siteDays[+valSite] + desingDays[+valDesing] + adaptabilityDays[+valAdaptability]
            return days
        }
        return


    }

    $('a[href^="#"]').click(function (){
        let valHref = $(this).attr("href");
        $('html, body').animate({scrollTop: $(valHref).offset().top - 62 + "px"})
    });
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
        console.log(scrollDistance)
        $(".section")
    })

})





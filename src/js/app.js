
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

function getSummaDays() {
    let site = prompt('Выберете тип сайта. Нужно поставить цифру от 1 до 3, где 1 - Сайт-визитка; 2 - Корпоративный сайт; 3 - Интернет-магазин.');
    let desing = prompt('Выберете дизайн. Нужно поставить цифру от 1 до 3, где 1 - Шаблонный; 2 - Уникальный; 3 - WOW-Дизайн.');
    let adaptability = prompt('Выберете адаптивность. Нужно поставить цифру от 1 до 3, где 1 - Только ПК; 2 - Только мобильный сайт; 3 - ПК + Мобильный.');
    if(site in sitePrice && desing in desingPrice && adaptability in adaptabilityPrice) {
        const sum = sitePrice[site] + desingPrice[desing] + adaptabilityPrice[adaptability]
        const days = siteDays[site] + desingDays[desing] + adaptabilityDays[adaptability]
        const textPriceDays = `Сумма вашего заказа = ${sum} рублей. Выполнение заказа займет  ${days} дней`
        return alert(textPriceDays)
    }else {
        const textError = 'Неверный ввод данных'
        alert(textError)
        getSummaDays()
    }

}
getSummaDays()



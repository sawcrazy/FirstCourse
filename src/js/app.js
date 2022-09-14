let site = prompt('Выберете тип сайта. Нужно поставить цифру от 1 до 3, где 1 - Сайт-визитка; 2 - Корпоративный сайт; 3 - Интернет-магазин.');
let desing = prompt('Выберете дизайн. Нужно поставить цифру от 1 до 3, где 1 - Шаблонный; 2 - Уникальный; 3 - WOW-Дизайн.');
let adaptability = prompt('Выберете адаптивность. Нужно поставить цифру от 1 до 3, где 1 - Только ПК; 2 - Только мобильный сайт; 3 - ПК + Мобильный.');

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

function summa() {
    if(site in sitePrice && desing in desingPrice && adaptability in adaptabilityPrice) {
        const sum = sitePrice[site] + desingPrice[desing] + adaptabilityPrice[adaptability]
        const textPrice = `Сумма вашего заказа = ${sum} рублей`
        return textPrice
    }else {
        const textError = 'Неверный ввод данных'
        return textError
    }

}
alert(summa())



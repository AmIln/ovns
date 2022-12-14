let choiseDelivery = document.querySelector('.choise-delivery'),
choisePay = document.querySelector('.choise-pay'),
contentDelivery = document.querySelector('.content-delivery'),
contentPay = document.querySelector('.content-pay');

// Доставка
choiseDelivery.addEventListener('click', function() {
    choisePay.classList.remove('choise_active');
    choiseDelivery.classList.add('choise_active');

    contentPay.classList.remove('content-text_active');
    contentDelivery.classList.add('content-text_active');
})

// Оплата
choisePay.addEventListener('click', function() {
    choiseDelivery.classList.remove('choise_active');
    choisePay.classList.add('choise_active');

    contentDelivery.classList.remove('content-text_active');
    contentPay.classList.add('content-text_active');
})
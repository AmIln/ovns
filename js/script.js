const sellingList = document.querySelector('.selling-choiseList'),
promoItems = document.querySelectorAll('.selling-item'),
sellingWraper = document.querySelector('.selling-wrapper'),
productList = document.querySelector('.products-list'),
productCataloge = document.querySelectorAll('.products-catalog');

/* СМЕНА ПРОМО ВИДЕО */
sellingList.addEventListener('click', function(e) {
    if (e.target.parentNode.classList.contains('selling-item')) {
        let count = e.target.alt,
        activePromo = document.querySelector('.selling-item_active');
        activePromo.classList.remove('selling-item_active')
        switch (count) {
            case 'OVNS-09':
                sellingWraper.style.left = '-100%';
                break;
            case 'OVNS-L':
                sellingWraper.style.left = '-200%';
                break;
            case 'OVNS-MAX':
                sellingWraper.style.left = '-300%';
                break;
            case 'OVNS-MEGA':
                sellingWraper.style.left = '-400%';
                break;
            default:
                sellingWraper.style.left = 0;
                break; 
        }
        e.target.parentNode.classList.add('selling-item_active')
    }
})

/* СМЕНА ТОВАРОВ */
productList.addEventListener('click', function(e) {
    if (e.target.classList.contains('products-item')) {
        let count = e.target.id,
        activeProduct = document.querySelector('.products-catalog_active'),
        activeList = document.querySelector('.products-item_active');
        
        activeProduct.classList.remove('products-catalog_active');
        activeList.classList.remove('products-item_active');
        switch (count) {
            case 'devices':
                productCataloge[1].classList.add('products-catalog_active');
                break;
            case 'semiDevices':
                productCataloge[2].classList.add('products-catalog_active');
                break;
            default:
                productCataloge[0].classList.add('products-catalog_active');
                break; 
        }
        e.target.classList.add('products-item_active')
    }
})
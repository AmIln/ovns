const imageList = document.querySelector('.images-switch');
/* ПЕРЕКЛЮЧЕНИЕ КАРТИНОК */
imageList.addEventListener('click', function(e) {
    let activeImg = document.querySelector('.images-switch_active'),
    imagesArray = document.querySelector('.images-wrapper').children;
    position = 0;
    if (e.target.alt) {
        activeImg.classList.remove('images-switch_active');
        e.target.classList.add('images-switch_active');
        alt = e.target.alt
        position = Number(alt[alt.length-1]) - 1;
    }
    if (position != 0) {
        let left = '-' + position + '00%';
        document.querySelector('.images-wrapper').style.left = left;
    } else {
        document.querySelector('.images-wrapper').style.left = 0;
    }
})
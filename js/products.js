console.log('products')
const imageList = document.querySelector('.images-switch');
/* ПЕРЕКЛЮЧЕНИЕ КАРТИНОК */
imageList.addEventListener('click', function(e) {
    let activeImg = document.querySelector('.images-switch_active'),
    imagesArray = document.querySelector('.images-wrapper').children;
    position = 0;
    if (e.target.alt) {
        activeImg.classList.remove('images-switch_active');
        e.target.classList.add('images-switch_active');
        for (let i=0;i<=imagesArray.length-1;i++) {
            if (e.target.alt === imagesArray[i].alt) {
                console.log(imagesArray[i].alt)
                position = i;
            }
        }
    }
    if (position != 0) {
        let left = '-' + position + '00%';
        document.querySelector('.images-wrapper').style.left = left;
    } else {
        document.querySelector('.images-wrapper').style.left = 0;
    }
})
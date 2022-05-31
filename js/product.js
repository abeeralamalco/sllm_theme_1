//images slider
// 180 is the Image is (width:170px and margin 5px)
const mainImage = document.querySelector('.mainImage')
const prevbutton = document.getElementById('sliderPrv')
const netxbutton = document.getElementById('sliderNext')
const sliderImages = document.querySelector('.sliderImages')
const slider = document.querySelector('.slides')
const slides = document.querySelector('.slides').querySelectorAll('img')
const viewedWidth = sliderImages.offsetWidth;
const sliderwidth = slides.length * 180;


const setMianImage = (src) => {
    mainImage.src = src
}

netxbutton.onclick = () => {
    const style = window.getComputedStyle(slider);
    const matrix = new WebKitCSSMatrix(style.transform);
    if (matrix.m41 + viewedWidth < sliderwidth) {
        const newTrans = matrix.m41 + viewedWidth + 180 <= sliderwidth ?
            matrix.m41 + 180 : matrix.m41 + sliderwidth - (matrix.m41 + viewedWidth)

        slider.style.transform = `translateX(${newTrans}px)`
    }

}

prevbutton.onclick = () => {
    const style = window.getComputedStyle(slider);
    const matrix = new WebKitCSSMatrix(style.transform);
    if (matrix.m41 > 0) {
        const newTrans = matrix.m41 - 180 >= 0 ?
            matrix.m41 - 180 : 0

        slider.style.transform = `translateX(${newTrans}px)`
    }

}


//color choose
const colorList = document.querySelector('.colors')
const colorchoose = function (color) {
    const allcolors = colorList.querySelectorAll('li')
    for (const li of allcolors) {
        li.classList.remove('active')
    }
    color.classList.add('active')

}

//add to cart
const addbutton = document.getElementById('add')
const sub = document.getElementById('sub')
const qunantityspan = document.getElementById('qunatityspan')
const addToCart = document.getElementById('addToCart')


addbutton.onclick = () => {
    const qty = parseInt(qunantityspan.innerHTML)
    qunantityspan.innerHTML = qty + 1
}

sub.onclick = () => {
    const qty = parseInt(qunantityspan.innerHTML)
    if (qty > 0) {
        qunantityspan.innerHTML = qty - 1
    }
}

addToCart.onclick = () => {
    const qty = parseInt(qunantityspan.innerHTML)
    qunantityspan.innerHTML = qty + 1
}


//read more handlereadmore

const readmore = document.getElementById('readmore')
const moreText = document.getElementById('moreText')

readmore.onclick = () => {
    if (moreText.style.display === "none") {
        readmore.innerHTML = `عرض أقل <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up ms-3" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
        <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
      </svg> `
        moreText.style.display = "block"
    }
    else {
        readmore.innerHTML = `قراءة المزيد<svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-double-down ms-3"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
          <path
            fill-rule="evenodd"
            d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg> `
        moreText.style.display = "none"
    }
}
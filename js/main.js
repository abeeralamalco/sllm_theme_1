// open and close the srarch and cart
const open = document.querySelector('.openCart')
const menu = document.querySelector('.cartmenu')
const lgSearchBtn = document.getElementById('lgSearchbtn')
const smSerarchBtn = document.getElementById('resSerarch')
const lgSearch = document.getElementById('lgSearch')
const smSearch = document.getElementById('smSearch')
const backdrop = document.querySelector('.modelclose')

open.onclick = () => {
    lgSearch.style.display = 'none'
    if (menu.style.display === 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
        backdrop.style.display = 'block'


    }
}

const close = document.querySelector('.close')
close.onclick = () => {
    menu.style.display = 'none'
}



lgSearchBtn.onclick = () => {
    menu.style.display = 'none'
    if (lgSearch.style.display === 'block') {
        lgSearch.style.display = 'none'
    } else {
        lgSearch.style.display = 'block'
        backdrop.style.display = 'block'
    }
}

smSerarchBtn.onclick = () => {
    menu.style.display = 'none'
    if (smSearch.style.display === 'block') {
        smSearch.style.display = 'none'
    } else {
        smSearch.style.display = 'block'
        backdrop.style.display = 'block'
    }
}


backdrop.onclick = () => {
    menu.style.display = 'none'
    lgSearch.style.display = 'none'
    smSearch.style.display = 'none'
    backdrop.style.display = 'none'

}


//handel to top button
const up = document.getElementById('up')
window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        up.style.display = "block";
    } else {
        up.style.display = "none";
    }
}



up.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




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
// copy handler

function copy(att) {
    if (att === 'pname') {
        const name = document.getElementById('pname').innerHTML;
        const namecopy = document.getElementById('pnamecopy');
        navigator.clipboard.writeText(name);
        namecopy.style.display = 'block'
        setTimeout(() => {
            namecopy.style.display = 'none'
        }, 500)

    } else if (att === 'acnum') {
        const acnum = document.getElementById('acnum').innerHTML;
        const acnumcopy = document.getElementById('acnumcopy');
        navigator.clipboard.writeText(acnum);
        acnumcopy.style.display = 'block'
        setTimeout(() => {
            acnumcopy.style.display = 'none'
        }, 500)

    } else if (att === 'epan') {
        const epan = document.getElementById('epan').innerHTML;
        const epancopy = document.getElementById('epancopy');
        navigator.clipboard.writeText(epan);
        epancopy.style.display = 'block'
        setTimeout(() => {
            epancopy.style.display = 'none'
        }, 500)
    }
}


//test for iterating over child elements
const codeOptions = [];
const options = document.querySelectorAll('.form-select option')
const optionslist = document.getElementById('keys')
const selectBtn = document.querySelector('.btn-select')
const keylist = document.querySelector('.keylist')


for (const op of options) {
    const optemp = document.querySelector('.optemp').cloneNode(true)
    optemp.style.display = 'block'
    let img = op.attributes.img.value
    let value = op.value
    let text = op.innerHTML
    let tempimg = optemp.querySelector('img')
    let temptext = optemp.querySelector('span')
    tempimg.src = `${img}`
    temptext.innerHTML = `${text}`
    optemp.setAttribute('value', `${value}`)
    optemp.onclick = () => {
        let btnimg = selectBtn.querySelector('img')
        let btnspan = selectBtn.querySelector('span')
        btnimg.src = `${img}`
        btnspan.innerHTML = `${text}`
        selectBtn.setAttribute('value', `${value}`)
        keylist.style.display = 'none' 

    }
    optionslist.append(optemp);

}



selectBtn.onclick = () => {
    if(keylist.style.display === 'block'){
        keylist.style.display = 'none' 
    }else{
        keylist.style.display = 'block' 

    }
    
};
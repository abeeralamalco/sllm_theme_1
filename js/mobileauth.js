// counter handler
const rSMassage = document.querySelector('.resendtext')
const resendbtn = document.querySelector('.resendbtn')
const counterspan = document.getElementById('counter')
console.log(rSMassage)
const countdown = () => {
    counterspan.innerHTML -= 1;

    if (counterspan.innerHTML === '0') {
        clearInterval(counter)
        rSMassage.style.display = 'none'
        resendbtn.style.display = 'block'
    }

}

const counter = setInterval(countdown, 1000);

// /test for iterating over child elements
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
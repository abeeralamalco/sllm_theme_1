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
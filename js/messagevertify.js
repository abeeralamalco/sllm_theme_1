// counter handler
const rSMassage = document.querySelector('.resendtext')
const resendbtn = document.querySelector('.resendbtn')
const counterspan = document.getElementById('counter')
const countdown = ()=> {
    counterspan.innerHTML -= 1;

    if (counterspan.innerHTML === '0') {
        clearInterval(counter)
        rSMassage.style.display = 'none'
        resendbtn.style.display = 'block'
    }

}

const counter = setInterval(countdown, 1000);

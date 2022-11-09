/*-------------------- LEFT EFFECT ------------------*/
const observer = new IntersectionObserver((left) => {
    left.forEach((entryleft) => {
        console.log(entryleft);
        if (entryleft.isIntersecting) {
            entryleft.target.classList.add('showleft')
        } else {
            entryleft.target.classList.remove('showleft')
        }
    })
})

const hiddenleft = document.querySelectorAll('.hiddenleft');
hiddenleft.forEach((el) => observer.observe(el))

/*----------------- UP EFFECT --------------------*/

const observerup = new IntersectionObserver((entriesup) => {
    entriesup.forEach((entryup) => {
        console.log(entryup);
        if (entryup.isIntersecting) {
            entryup.target.classList.add('showup')
        } else {
            entryup.target.classList.remove('showup')
        }
    })
})

const hiddenup = document.querySelectorAll('.hiddenup');
hiddenup.forEach((elup) => observerup.observe(elup))

/*------------------- RIGHT EFFECT -------------------*/

const observerright = new IntersectionObserver((entriesright) => {
    entriesright.forEach((entryright) => {
        console.log(entryright);
        if (entryright.isIntersecting) {
            entryright.target.classList.add('showright')
        } else {
            entryright.target.classList.remove('showright')
        }
    })
})

const hiddenright = document.querySelectorAll('.hiddenright');
hiddenright.forEach((elright) => observerright.observe(elright))


/*------------------- MENU HANBURGUER ---------------------*/

function ativar() {
    let botao = document.querySelector('.hamburguer')
    botao.classList.toggle('ativar')
}

function menu() {
    let menu = document.querySelector('.menu')
    menu.classList.toggle('menu_ativo')
}

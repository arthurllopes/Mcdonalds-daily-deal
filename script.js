const image = document.getElementById('promo')
const now = new Date()
const day= now.getDay()

function load(){
    switch(day){
        case 0:
            image.src = 'ima/dom.jpg'
            break
        case 1:
            image.src = 'ima/segunda.jpg'
            break
        case 2:
            image.src = 'ima/terca.jpg'
            break
        case 3:
            image.src = 'ima/quarta.jpg'
            break
        case 4:
            image.src = 'ima/quinta.jpg'
            break
        case 5:
            image.src = 'ima/sexta.jpg'
            break
        case 6:
            image.src = 'ima/sab.jpg'
        }
}

const info = document.querySelector('.info')
const menu = document.getElementById('menu')

menu.addEventListener('click', openMenu)

function openMenu(){
    image.src = 'ima/menu.jpg'
    info.classList.add('hide')
    menu.classList.add('hide')
}
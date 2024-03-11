const btn_openNav = document.querySelector('#btn-openNav')
const btn_closeNav = document.querySelector('#btn-closeNav')
const nav = document.querySelector('nav')

function changeNav(){
    nav.classList.toggle('nav-ativa')
}

btn_openNav.addEventListener('click', changeNav)
btn_closeNav.addEventListener('click', changeNav)

////////////////////

const imgs = Array.from(document.querySelectorAll('#container-fotos img'))

let touchstartX = 0
let touchendX = 0




imgs.forEach((img)=>{
    img.addEventListener('touchstart', carrouselHandler)
})

function carrouselHandler(e){
    function changeImage(actualImage) {
        let imgNumber = Number(actualImage.getAttribute('data-img'))

        if (touchendX < touchstartX) {
            imgNumber + 1 > 2 ? imgNumber = 1 : imgNumber += 1
        }
        else{
            imgNumber - 1 < 0 ? imgNumber = 2 : imgNumber -= 1
        }

        actualImage.classList.add('desativando')

        actualImage.addEventListener('animationend', ()=>{
            actualImage.classList.add('mobile-img')
            imgs[imgNumber].classList.remove('mobile-img')
            actualImage.classList.remove('desativando')
        }, {once: true})
    }

    touchstartX = e.changedTouches[0].screenX

    e.target.addEventListener('touchend', (e)=>{
        touchendX = e.changedTouches[0].screenX

        changeImage(e.target)
    })
}
let btn = document.querySelector('.buy-now')
let info = document.querySelector('.infobuy')
let cls = document.querySelector('.close')
let mn = document.querySelector('.menu')
let menu = document.querySelector('.menuu')

btn.onclick = () =>{
    info.setAttribute('style', 'display: block;')
}
cls.onclick = () =>{
    info.setAttribute('style', 'display: none;')
}
menu.onclick = () =>{
    mn.setAttribute('style', 'left: -1px;')
}
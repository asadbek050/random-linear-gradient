"use strict"

const container = document.getElementById('container')
const btnBack = document.getElementById('btn-back')
const copy = document.getElementById('copy')

const backAlfs = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
]

function backRandom(){
    let color = '#'
    for(let i = 0; i < 6; i++){
        let alfRandom = Math.trunc(Math.random() * backAlfs.length)
        color +=  backAlfs[alfRandom]
    } 
    return color
}


function gradientRandom(){
    let color1 = backRandom()
    let color2 = backRandom()
    let circleColor = Math.trunc(Math.random() * 360)
    container.style.background =  `linear-gradient(${circleColor}deg ,${color1}, ${color2})`
    copy.innerHTML = `linear-gradient(${circleColor}deg, ${color1}, ${color2};`
}


btnBack.addEventListener('click' , gradientRandom)
let sec = document.querySelector(`section`)

for (let c = 0; c < 1444; c++) {
    let cell = document.createElement("div");
    sec.appendChild(cell);

}


let color = [`blue`, `red`,`gray`,`black`,`green`,`yellow`,`orange`]
let draw = document.querySelectorAll(`div`)
console.log(draw);
Array.from(draw).forEach(element => {
    element.style.background = `gray`
    element.style.height =`20px`
    element.style.width =`20px`
    element.addEventListener('mouseover',()=>{
        element.style.background = color[Math.floor(Math.random() * color.length)]
    })
    element.addEventListener('mouseout',()=>{
        element.style.transition = `2s`
        element.style.background = `gray`
    })
});
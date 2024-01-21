let sec = document.querySelector(`section`)

for (let c = 0; c < 1550; c++) {
    let cell = document.createElement("div");
    sec.appendChild(cell);

}


let color =[
    "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
    "#FF4500", "#8A2BE2", "#228B22", "#FFD700", "#DC143C", "#4169E1",
    "#8B4513", "#2E8B57", "#9932CC", "#FFA500", "#4B0082", "#008080",
    "#A52A2A", "#008000", "#FF6347", "#00CED1", "#800080", "#FF8C00",
    "#008B8B", "#FF1493", "#556B2F", "#7B68EE", "#F08080", "#32CD32"
  ];
let draw = document.querySelectorAll(`div`)
console.log(draw);
Array.from(draw).forEach(element => {
    element.style.background = `gray`
    element.style.height =`25px`
    element.style.width =`25px`
    element.style.borderRadius =`2px`
    element.addEventListener('mouseover',()=>{
        element.style.background = color[Math.floor(Math.random() * color.length)]
    })
    element.addEventListener('mouseout',()=>{
        element.style.transition = `2s`
        element.style.background = `gray`
    })
});
let tab="games"
let cat="all"

const gameCategories=["all","action","rpg","puzzle"]
const movieCategories=["all","comedy","horror","sci-fi"]

const games=[
{title:"Deltarune",img:"images/Deltarune.png",url:"games/delta.html",cat:"rpg"},
{title:"Slope",img:"images/slope.png",url:"games/slope.html",cat:"action"}
]

const movies=[
{title:"Movie 1",img:"images/movie1.png",url:"movies/m1.html",cat:"comedy"}
]

function switchTab(t){
tab=t
cat="all"
gamesTab.classList.remove("active")
moviesTab.classList.remove("active")
document.getElementById(t+"Tab").classList.add("active")
loadCategories()
render()
}

function loadCategories(){
let cats=tab=="games"?gameCategories:movieCategories
filterMenu.innerHTML=""
cats.forEach(c=>{
filterMenu.innerHTML+=`
<div class="filter-option"
onclick="setCat('${c}')">
${c}
</div>`
})
}

function toggleFilter(){
filterMenu.classList.toggle("show")
}

function setCat(c){
cat=c
render()
toggleFilter()
}

function render(){
let list=tab=="games"?games:movies
let s=search.value.toLowerCase()
grid.innerHTML=""
list.filter(x=>
x.title.toLowerCase().includes(s)&&
(cat=="all"||x.cat==cat)
).forEach(x=>{
grid.innerHTML+=`
<div class="card"
onclick="openGame('${x.url}')">
<img src="${x.img}">
<div class="overlay">
<b>${x.title}</b>
<button class="play">Play</button>
</div>
</div>`
})
}

function openGame(u){
player.style.display="flex"
frame.src=u
}

function closeGame(){
player.style.display="none"
frame.src=""
}

function full(){
frame.requestFullscreen()
}

function perf(x){
if(x.checked)
document.body.classList.add("lowPerf")
else
document.body.classList.remove("lowPerf")
}

document.addEventListener("keydown",e=>{
if(e.key=="F6"){
secret.style.display=
secret.style.display=="block"?"none":"block"
}
})

loadCategories()
render()
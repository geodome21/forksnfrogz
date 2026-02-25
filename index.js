let tab="games"
let cat="all"

const gameCategories=["all","puzzle","fighting","shooter","driving","Platformer","Sports","Horror","multiplayer","Sandbox","rhythm","simulator"]
const movieCategories=["all","comedy","horror","sci-fi"]

const games=[
{title:"Bad Time Simulator",img:"images/Sans.jpeg",url:"games/Bad Time Simulator/index.html",cat:"fighting,"},
{title:"Call Of Duty Black Ops",img:"images/Call Of Duty Black Ops.png",url:"games/Call Of Duty Black Ops/index.html",cat:"shooter,"},
{title:"Candy Crush",img:"images/Candy Crush.png",url:"games/Candy Crush/index.html",cat:"puzzle,"},
{title:"Doom 64",img:"images/Doom 64.png",url:"games/Doom 64/index.html",cat:"shooter,"},
{title:"Douchebag Life",img:"images/DBL.png",url:"games/Douchebag life/index.html",cat:"simulator,"},
{title:"Drive Mad",img:"images/Drive Mad.png",url:"games/Drive Mad/index.html",cat:"driving,"},
{title:"Escape Road",img:"images/Escape road.png",url:"games/Escape Road/index.html",cat:"driving,"},
{title:"Escape Road 2",img:"images/escape road 2.jpeg",url:"games/Escape Road 2/index.html",cat:"driving,"},
{title:"Friday Night Funkin",img:"images/Friday Night Funkin.png",url:"games/friday night funkin/index.html",cat:"rhythm,"},
{title:"Geometry Dash",img:"images/Geometry dash.png",url:"games/Geometry Dash/index.html",cat:"rhythm,"},
{title:"Golden eye 007",img:"images/Golden Eye 007.png",url:"games/Golden Eye 007/index.html",cat:"shooter,"},
{title:"Half Life",img:"images/Haalf Life.png",url:"games/Half Life/index.html",cat:"shooter,"},
{title:"Highway Racer",img:"images/Highway Racer.png",url:"games/highway racer/index.html",cat:"driving,"},
{title:"Karlson",img:"images/Karlson.png",url:"games/Karlson/index.html",cat:"Platformer,shooter,"},
{title:"Kirby 64",img:"images/Kirby 64.png",url:"games/Kirby 64/index.html",cat:"Platformer,"},
{title:"Kour.io",img:"images/Kourio.png",url:"games/Kour.io/index.html",cat:"shooter,"},
{title:"Mario Kart 64",img:"images/Mario Kart 64.png",url:"games/Mario Kart 64/index.html",cat:"driving,"},
{title:"Peggle",img:"images/peggle.jpg",url:"games/Peggle/index.html",cat:"puzzle,"},
{title:"Polytrack",img:"images/polytrack.jpeg",url:"games/Polytrack/index.html",cat:"driving,"},
{title:"Retro Bowl",img:"images/retro bowl.jpeg",url:"games/Retro Bowl/index.html",cat:"Sports,"},
{title:"Smash Karts",img:"images/Smash Karts.jpg",url:"games/Smash Karts/index.html",cat:"driving,multiplayer,"},
{title:"Snow Rider 3D",img:"images/Snow Rider 3D.png",url:"games/Snow Rider 3D/index.html",cat:"driving"},
{title:"Super Mario 64",img:"images/mayrio.jpeg",url:"games/Super Mario 64/index.html",cat:"Platformer,"},
{title:"Super Smash Bros",img:"images/super smash bros.jpg",url:"games/Super Smash Bros/index.html",cat:"fighting,"},
{title:"Super Smash Flash 2",img:"images/Super smash flash 2.png",url:"games/Super Smash Flash 2/index.html",cat:"fighting,"},
{title:"SuperHot",img:"images/superhot.jpeg",url:"games/SuperHot/index.html",cat:"shooter,"},
{title:"Tanuki Sunset",img:"images/tanuki sunset.jpg",url:"games/Tanuki Sunset/index.html",cat:"driving,"},
{title:"The Binding Of Issac",img:"images/BOI.png",url:"games/The Binding Of Issac/index.html",cat:"Horror,"},
{title:"Time Shooter 2",img:"images/Time Shooter 2.jpg",url:"games/Time Shooter 2/index.html",cat:"shooter,"},
{title:"Time Shooter 3",img:"images/time shooter 3.jpg",url:"games/Time Shooter 3/index.html",cat:"shooter,"}
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
const credits=document.getElementById("credits")
if(t==="movies"){
credits.classList.add("show")
}else{
credits.classList.remove("show")
}
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
(cat=="all"||x.cat.split(",").includes(cat))
).forEach(x=>{
grid.innerHTML+=`
<div class="card"
onclick="openGame('${x.url}')">
<img src="${x.img}">
<div class="overlay">
<b>${x.title}</b>
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

// FPS Counter
let frameCount=0
let lastTime=performance.now()
let fps=0

function updateFPS(){
frameCount++
const currentTime=performance.now()
if(currentTime-lastTime>=1000){
fps=frameCount
frameCount=0
lastTime=currentTime
document.getElementById("fps-value").textContent=fps
}
requestAnimationFrame(updateFPS)
}
updateFPS()

// Toggle secret menu with F6
document.addEventListener("keydown",e=>{
if(e.key==="F6"){
e.preventDefault()
secret.style.display=
secret.style.display==="block"?"none":"block"
}
})

loadCategories()
render()
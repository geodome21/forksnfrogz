let tab="games"
let cat="all"
let searchTimeout

const gameCategories=["all","puzzle","fighting","shooter","driving","Platformer","Sports","Horror","multiplayer","Sandbox","rhythm","simulator","runner","clicker"]
const movieCategories=["all","comedy","horror","sci-fi"]

const games=[
{title:"1 on 1 soccar",img:"images/one on one soccar.png",url:"games/1 on 1 soccar/index.html",cat:"sports,"},
{title:"1v1.lol",img:"images/1v1.lol.png",url:"games/1v1.lol/index.html",cat:"shooter,"},
{title:"3Dash",img:"images/3Dash.png",url:"games/3Dash/index.html",cat:"rhythm,"},
{title:"Age of War",img:"images/Age of War.png",url:"games/Age of War/index.html",cat:"strategy,"},
{title:"Bad Monday Simulator",img:"images/Bad Monday Simulator.png",url:"games/Bad Monday Simulator/index.html",cat:"fighting,"},
{title:"Baseball Bros",img:"images/BaseBall Bros.png",url:"games/BaseBall Bros/index.html",cat:"sports,"},
{title:"Bad Time Simulator",img:"images/Sans.jpeg",url:"games/Bad Time Simulator/index.html",cat:"fighting,"},
{title:"Bitlife",img:"images/Bitlife.png",url:"games/Bitlife/index.html",cat:"simulator,"},
{title:"Burgen Truck 201X",img:"images/Burgen Truck 201x.png",url:"games/Burgen Truck 201X/index.html",cat:"driving,"},
{title:"Call Of Duty Black Ops",img:"images/Call Of Duty Black Ops.png",url:"games/Call Of Duty Black Ops/index.html",cat:"shooter,"},
{title:"Candy Crush",img:"images/Candy Crush.png",url:"games/Candy Crush/index.html",cat:"puzzle,"},
{title:"Celeste",img:"images/Celeste.jpeg",url:"games/Celeste/index.html",cat:"platformer,"},
{title:"Countmaster Stickman Games",img:"images/Countmaster Stickman Games.png",url:"games/Countmaster stickman games/index.html",cat:"runner,"},
{title:"Doom 64",img:"images/Doom 64.png",url:"games/Doom 64/index.html",cat:"shooter,"},
{title:"Douchebag Life",img:"images/DBL.png",url:"games/Douchebag life/index.html",cat:"simulator,"},
{title:"Drive Mad",img:"images/Drive Mad.png",url:"games/Drive Mad/index.html",cat:"driving,"},
{title:"Escape Road",img:"images/Escape road.png",url:"games/Escape Road/index.html",cat:"driving,"},
{title:"Escape Road 2",img:"images/escape road 2.jpeg",url:"games/Escape Road 2/index.html",cat:"driving,"},
{title:"Friday Night Funkin",img:"images/Friday Night Funkin.png",url:"games/friday night funkin/index.html",cat:"rhythm,"},
{title:"Geometry Dash",img:"images/Geometry dash.png",url:"games/Geometry Dash/index.html",cat:"rhythm,"},
{title:"Golden eye 007",img:"images/Golden Eye 007.png",url:"games/Golden Eye 007/index.html",cat:"shooter,"},
{title:"Half Life",img:"images/Half Life.png",url:"games/Half Life/index.html",cat:"shooter,"},
{title:"Highway Racer",img:"images/Highway Racer.png",url:"games/highway racer/index.html",cat:"driving,"},
{title:"Hollow Kight",img:"images/Hollow Knight.png",url:"games/Hollow Knight/index.html",cat:"platformer,"},
{title:"Karlson",img:"images/Karlson.png",url:"games/Karlson/index.html",cat:"Platformer,shooter,"},
{title:"Kirby 64",img:"images/Kirby 64.png",url:"games/Kirby 64/index.html",cat:"Platformer,"},
{title:"Kour.io",img:"images/Kourio.png",url:"games/Kour.io/index.html",cat:"shooter,multiplayer,"},
{title:"Mario Kart 64",img:"images/Mario Kart 64.png",url:"games/Mario Kart 64/index.html",cat:"driving,"},
{title:"Minecraft 1.8.8",img:"images/minecraft1.8.8.png",url:"games/Minecraft 1.8.8/index.html",cat:"Sandbox,"},
{title:"Nubbys Number Factory",img:"images/Nubbys Number Factory.png",url:"games/Nubbys Number Factory/index.html",cat:"puzzle,"},
{title:"Peggle",img:"images/peggle.jpg",url:"games/Peggle/index.html",cat:"puzzle,"},
{title:"Polytrack",img:"images/polytrack.jpeg",url:"games/Polytrack/index.html",cat:"driving,"},
{title:"R.E.P.O",img:"images/REPO.png",url:"games/R.E.P.O/index.html",cat:"Horror,"},
{title:"Retro Bowl",img:"images/retro bowl.jpeg",url:"games/Retro Bowl/index.html",cat:"Sports,"},
{title:"Smash Karts",img:"images/Smash Karts.jpg",url:"games/Smash Karts/index.html",cat:"driving,multiplayer,"},
{title:"Snow Rider 3D",img:"images/Snow Rider 3D.png",url:"games/Snow Rider 3D/index.html",cat:"driving"},
{title:"Spacebar Clicker",img:"images/Spacebar Clicker.png",url:"games/Spacebar Clicker/index.html",cat:"clicker"},
{title:"Super Mario 64",img:"images/mayrio.jpeg",url:"games/Super Mario 64/index.html",cat:"Platformer,"},
{title:"Super Smash Bros",img:"images/super smash bros.jpg",url:"games/Super Smash Bros/index.html",cat:"fighting,"},
{title:"Super Smash Flash 2",img:"images/Super smash flash 2.png",url:"games/Super Smash Flash 2/index.html",cat:"fighting,"},
{title:"SuperHot",img:"images/superhot.jpeg",url:"games/SuperHot/index.html",cat:"shooter,"},
{title:"Tanuki Sunset",img:"images/tanuki sunset.jpg",url:"games/Tanuki Sunset/index.html",cat:"driving,"},
{title:"The Binding Of Issac",img:"images/BOI.png",url:"games/The Binding Of Issac/index.html",cat:"Horror,"},
{title:"Time Shooter 2",img:"images/Time Shooter 2.jpg",url:"games/Time Shooter 2/index.html",cat:"shooter,"},
{title:"Time Shooter 3",img:"images/time shooter 3.jpg",url:"games/Time Shooter 3/index.html",cat:"shooter,"},
{title:"We Become What We Behold",img:"images/We Become What We Behold.png",url:"games/We Become What We Behold/index.html",cat:"simulator,"},
{title:"You VS 100 Skibidi Toilets",img:"images/You VS 100 Skibidi Toilets.png",url:"games/You vs 100 Skibidi/index.html",cat:"shooter,"}
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
const filtered=list.filter(x=>
x.title.toLowerCase().includes(s)&&
(cat=="all"||x.cat.split(",").includes(cat))
)

// Use DocumentFragment for better performance
const fragment=document.createDocumentFragment()
filtered.forEach(x=>{
const card=document.createElement("div")
card.className="card"
card.onclick=()=>openGame(x.url)

const img=document.createElement("img")
img.src=""
img.dataset.src=x.img
img.loading="lazy"
img.alt=x.title

const overlay=document.createElement("div")
overlay.className="overlay"
overlay.innerHTML=`<b>${x.title}</b>`

card.appendChild(img)
card.appendChild(overlay)
fragment.appendChild(card)
})

grid.appendChild(fragment)

// Initialize lazy loading for images
initializeLazyLoading()
}

// Lazy Loading with Intersection Observer
function initializeLazyLoading(){
if('IntersectionObserver' in window){
const imageObserver=new IntersectionObserver((entries,observer)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
const img=entry.target
if(img.dataset.src){
img.src=img.dataset.src
img.removeAttribute('data-src')
observer.unobserve(img)
}
}
})
})

const lazyImages=grid.querySelectorAll('img[data-src]')
lazyImages.forEach(img=>imageObserver.observe(img))
}else{
// Fallback for browsers without IntersectionObserver
const lazyImages=grid.querySelectorAll('img[data-src]')
lazyImages.forEach(img=>{
img.src=img.dataset.src
img.removeAttribute('data-src')
})
}
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

// Debounced search input for better performance
document.getElementById('search').addEventListener('input',()=>{
clearTimeout(searchTimeout)
searchTimeout=setTimeout(()=>render(),250)
})
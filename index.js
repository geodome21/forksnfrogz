let tab="games"
let cat="all"

const gameCategories=["all","action","rpg","puzzle","fighting","fps"]
const movieCategories=["all","comedy","horror","sci-fi"]

const games=[
{title:"Bad Time Simulator",img:"images/Sans.jpeg",url:"games/Bad Time Simulator/index.html",cat:"fighting"},
{title:"SuperHot",img:"images/superhot.jpeg",url:"games/SuperHot/index.html",cat:"action,fps"}
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
(cat=="all"||x.cat.split(",").includes(cat))
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

// switch secret settings using period key instead of F6
document.addEventListener("keydown",e=>{
  if(e.key=="."){
    secret.style.display=
      secret.style.display=="block"?"none":"block";
  }
});
loadCategories()
render()
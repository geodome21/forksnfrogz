const { useState } = React;
const { motion, AnimatePresence } = window.framerMotion;

// Games data
const gamesData = [
  { id: 1, title: "Game 1", image: "https://source.unsplash.com/900x700/?gaming", playUrl: "https://example.com" },
  { id: 2, title: "Game 2", image: "https://source.unsplash.com/900x700/?arcade", playUrl: "https://example.com" },
  { id: 3, title: "Game 3", image: "https://source.unsplash.com/900x700/?car,game", playUrl: "https://example.com" },
  { id: 4, title: "Game 4", image: "https://source.unsplash.com/900x700/?retro", playUrl: "https://example.com" }
];

function App() {
  const [search, setSearch] = useState("");

  const filteredGames = gamesData.filter(game =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  const renderGrid = (items) => React.createElement("div", { style:{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"20px" } },
    React.createElement(AnimatePresence, null,
      items.map((game, index) =>
        React.createElement(motion.div, {
          key: game.id,
          initial:{ opacity:0, y:40 },
          animate:{ opacity:1, y:0 },
          exit:{ opacity:0, y:-20 },
          transition:{ delay:index*0.05, type:"spring", stiffness:100 },
          whileHover:{ scale:1.05 },
          style:{ position:"relative", borderRadius:"12px", overflow:"hidden", background:"#1f1f1f", cursor:"pointer" }
        },
          React.createElement(motion.img, {
            src: game.image,
            alt: game.title,
            style:{ width:"100%", aspectRatio:"16/9", objectFit:"cover" },
            whileHover:{ scale:1.08 },
            transition:{ duration:0.5 }
          }),
          React.createElement(motion.div, {
            style:{ position:"absolute", top:0, left:0, width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"flex-end", padding:"12px", background:"rgba(0,0,0,0.5)", opacity:0 },
            whileHover:{ opacity:1 },
            transition:{ duration:0.3 }
          },
            React.createElement("h2", { style:{ color:"#fff", marginBottom:"4px" } }, game.title),
            React.createElement("button", { style:{ width:"100%", padding:"8px", background:"#6b46c1", color:"#fff", border:"none", borderRadius:"8px" }, onClick:()=>window.open(game.playUrl,"_blank") }, "Play")
          )
        )
      )
    )
  );

  return React.createElement("div", { style:{ minHeight:"100vh", padding:"40px" } },
    React.createElement("h1", null, "Media Hub"),
    React.createElement("div", { style:{ display:"flex", justifyContent:"center", marginBottom:"40px" } },
      React.createElement("input", { value:search, onChange:e=>setSearch(e.target.value), placeholder:"Search..." })
    ),
    renderGrid(filteredGames)
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));

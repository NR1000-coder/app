import { useState } from "react";

function App() {

  const [a, seta] = useState("Salam mən ") 
  let b = "Salam mən " , c =b , d = c , e = d 
  return (
    <div className="app">
      <h1>{a}</h1>
      <button onClick={() => seta((t)=>b+"Nərminəm")}>0</button>
      <button onClick={() => seta((t)=>c+"əlaçıyam")}>1</button> 
      <button onClick={() => seta((t)=>d+"yaxşı oxuyanam")}>2</button>
      <button onClick={() => seta((t)=>e+"orta oxuyanam")}>3</button>
    </div>
  );
}

export default App;


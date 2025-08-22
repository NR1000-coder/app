import { useState } from "react";

function App() {

  const [a, seta] = useState("Salam mən ") 
  let b = "Salam mən " , c =b , d = c , e = d 
  return (
    <div className="app">
      <h1>{a}</h1>
      <button onClick={() => seta((a)=>b+"Nərminəm")}>0</button>
      <button onClick={() => seta((a)=>c+"əlaçıyam")}>1</button> 
      <button onClick={() => seta((a)=>d+"yaxşı oxuyanam")}>2</button>
      <button onClick={() => seta((a)=>e+"orta oxuyanam")}>3</button>
    </div>
  );
}

export default App;


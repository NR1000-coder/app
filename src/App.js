import { useState } from "react";

function Me() {
  const [option, setOption] = useState()

  return (
    <>
      <h1>Salam mən {option}</h1>
      <button type="button" 
      onClick={() => setOption("Nərminəm.")}
      >0</button>
      <button type="button"
      onClick={() => setOption("əlaçıyam.")}
      >1</button>
      <button type="button"
      onClick={() => setOption("yaxşı oxuyanam.")}
      >2</button>
      <button type="button"
      onClick={() => setOption("orta oxuyanam.")}
      >3</button>
    </>
  );
}

export default Me;


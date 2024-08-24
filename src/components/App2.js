import Gato from "./Gato2";
import React, { useEffect } from "react";


function App2() {
  useEffect(() => {
    document.title = 'Tic-Tac-Toe';
  }, []);
  return (
    <div>
      <Gato />
    </div>
  )
}

export default App2;
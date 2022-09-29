
import React from "react";
import Calculator from "./components/Calculator"


const App = () => {


  return (
    
      <div className="App">
        <div className="title">
          <p class="line-1 anim-typewriter">REACT CALCULATOR</p>
        </div>
        <div className="calculator">
          <Calculator />
        </div>
      </div>
   
  );
};

export default App;

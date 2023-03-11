import React, { useRef,useEffect } from "react";
import './CSS/App.css';
import './CSS/buttons.css';
import './CSS/circle.css';
import './CSS/font.css';
import './CSS/pills.css';
import './CSS/var.css';


function App() {
  return (
    <div class="App">
      <header class="header">
        <p class="name">jonathan</p>
        <div class="button-group">
          <button class="rounded-button">portfolio</button>
          <button class="rounded-button">resume</button>
        </div>
        <circ class="circ c1"></circ>
        <circ class="circ c2"></circ>
        <circ class="circ c3"></circ>
        <circ class="circ c4"></circ>
        <circ class="circ c5"></circ>
        <circ class="circ c6"></circ>
        <div class="pill style1 p1"></div>
        <div class="pill style2 p2"></div>
        <div class="pill style3 p3"></div>
      </header>
    </div>
  );
} 

export default App;

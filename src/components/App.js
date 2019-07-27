import React from "react";
import '../App.css';
import Header from "./Header";

const app = () => {
    return (
      <div className="App">
        <Header text="Nutrition Lookup"/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
}

export default app;
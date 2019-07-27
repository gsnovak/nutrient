import React from "react";
import '../App.css';
import Header from "./Header";
import SearchInput from "./SearchInput";

const search = searchInput => {
  console.log(`searching ${searchInput}...`)
};

const app = () => {
    return (
      <div className="App">
        <Header text="Nutrition Lookup"/>
        <SearchInput search={search}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
}

export default app;
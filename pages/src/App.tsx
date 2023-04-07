import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import "./index.scss";

import Recipes from "./Recipes";
import Recipe from "./Recipe";

const App = () => (
  
  <div className="flex flex-col min-h-screen">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/recipes/:slug" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    
  </div>
);
/*const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: pages</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
);*/
ReactDOM.render(<App />, document.getElementById("app"));

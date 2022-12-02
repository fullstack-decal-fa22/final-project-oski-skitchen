import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Ingredients from "./Compenents/ingredients";
function App() {
  const [expressCheck, setExpressCheck] = useState("");
  const [toggleVis, setVis] = useState(false);

  const useSetVis = () => {
      setVis(!toggleVis);
  }
  useEffect(() => {
    axios
      .get(`http://localhost:9000/testAPI`)
      .then((res) => {
        setExpressCheck(res.data);
        console.log(res.data);
      })
      .catch(() => setExpressCheck("Currently down."));
  }, []);

  return (
    <div className="App">
      <header className="App-header bg-gradient-to-tr from-blue-400 to-blue-100">
      <header style={{color: "black"}}> Oski's Kitchen</header>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 w-2/3 md:w-1/2 gap-4">
          <div className="rounded border-gray-500 bg-slate-700 p-4 self-center border-8">
            <h1>Ingredients</h1>
            <p className="text-lg">
              <Ingredients/>
              <button className="bg-amber-400 m-6 p-3 rounded-2xl" onClick={useSetVis}>Generate</button>
            </p>
          </div>
          <div className="border rounded border-gray-500 bg-slate-700 p-4">
            <h1>Top 3 Recipes</h1>
            <p className="text-lg py-2">
              <div className="text-pink-300" href="https://expressjs.com/">
                {toggleVis && <a href="https://www.averiecooks.com/easy-better-takeout-chicken-fried-rice/" target="_blank" rel="noopener noreferrer">Chicken Fried Rice</a>}
                <br></br>
                {toggleVis && <a href="https://sweetandsavorymeals.com/california-chicken-breakfast-burrito/" target="_blank" rel="noopener noreferrer">California Chicken Breakfast Burrito</a>}
                <br></br>
                {toggleVis && <a href="https://www.simplyrecipes.com/recipes/how_to_make_an_omelet/" target="_blank" rel="noopener noreferrer">Omelette</a>}

              </div>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

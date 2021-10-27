import "./App.css";
import { useState } from "react";
import FruitList from "./components/FruitList";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
    { name: "lemon", color: "green", price: 2 },
    { name: "raspberry", color: "red", price: 1 },
  ]);

  function filterRedFruits() {
    setFruits(fruits.filter((fruit) => fruit.color === "red"));
  }

  return (
    <div className="App">
      <div className="App-header">
        <FruitList fruits={fruits} />
        <button onClick={filterRedFruits}>Só frutinha vermelha alek</button>
      </div>
    </div>
  );
}

export default App;

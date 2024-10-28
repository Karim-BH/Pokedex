import "./App.css";
import NavBar from "./components/NavBar";
import pokemonList from "./components/PokemonList";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";



  function App() { 
    const [pokemonIndex, setPokemonIndex] = useState(0);

  
  return (
    <div className="body">
      <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex}/>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    </div>
  )
}

export default App;
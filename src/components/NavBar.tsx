import pokemonList from "./PokemonList";



  interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
  }


  
  function NavBar({pokemonIndex, setPokemonIndex}: NavBarProps) { 

    if (pokemonList[pokemonIndex].name.toLowerCase() === "pikachu") {
      alert("pika pikachu !!!");
    }
  

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button 
          key={pokemon.name} 
          onClick={() => setPokemonIndex(index)} 
         
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  )
}

  export default NavBar;
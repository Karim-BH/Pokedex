import pokemonList from "./PokemonList";



  interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
  }


  
  function NavBar({setPokemonIndex}: NavBarProps) { 
  

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
import pokemonList from "./PokemonList";


  interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
  }



  
  function NavBar({pokemonIndex, setPokemonIndex}: NavBarProps) { 
  
    const handleClickPrevious = () => {
      if (pokemonIndex > 0) {
        setPokemonIndex(pokemonIndex - 1);
      }
    };
  
    const handleClickNext = () => {
      if (pokemonIndex < pokemonList.length - 1) {
        setPokemonIndex(pokemonIndex + 1);
      }
    };
  return (
    <div>
      <button type="button" onClick={handleClickPrevious }>Précedent</button>
      <button type="button" onClick={handleClickNext}>Suivant</button>
    </div>
  )
}

  export default NavBar;
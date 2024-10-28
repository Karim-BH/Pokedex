interface Pokemon {
    pokemon: {
        name: string;
        imgSrc?: string;
        className: string; 
    }
}


  

function PokemonCard({pokemon}: Pokemon) {
    
   
    return (
        <figure className= {pokemon.className}>
            {pokemon.imgSrc ? <img src={pokemon.imgSrc}/> : <p>???</p>}
            <figcaption>
            {pokemon.name}
            </figcaption>
      </figure>
    );
    
  };
  


  export default PokemonCard;
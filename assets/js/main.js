
const pokemonToLi = (pokemon) => {
  return `
    <li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
      <ol class="types">
          <li class="type">grass</li>
          <li class="type">poison</li>
      </ol>

      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        alt="${pokemon.name}"
      />
    </div>
  </li>
    `;
};

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(pokemonToLi).join('');
  })
  .catch((err) => {
    console.error(err);
  });

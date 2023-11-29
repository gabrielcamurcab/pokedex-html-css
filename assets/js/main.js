const pokemonTypesToLi = (pokemonTypes) => {
  return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`);
}

const pokemonToLi = (pokemon) => {
  return `
    <li class="pokemon">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
      <ol class="types">
          ${pokemonTypesToLi(pokemon.types).join('')}
      </ol>

      <img
        src="${pokemon.sprites.other.dream_world.front_default}"
        alt="${pokemon.name}"
      />
    </div>
  </li>
    `;
};

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(pokemonToLi).join('');
    pokemonList.innerHTML = newHtml;
  })
  .catch((err) => {
    console.error(err);
  });

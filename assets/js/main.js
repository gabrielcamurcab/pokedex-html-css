const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

const pokemonToLi = (pokemon, count) => {
  return `
    <li class="pokemon">
    <span class="number">#${count}</span>
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

fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemonList) => {
    let count = 0;
    pokemonList.forEach(pokemon => {
        count++;
        console.log(pokemonToLi(pokemon, count));

        const pokemonList = document.getElementById('pokemonList');
        pokemonList.innerHTML += pokemonToLi(pokemon, count);
    });
  })
  .catch((err) => {
    console.error(err);
  });

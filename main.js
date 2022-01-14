const P = new Pokedex.Pokedex()

document.querySelector('#select-pokemon').addEventListener('change', getNewPokemon)

function getNewPokemon(event) {

    P.getPokemonByName(event.target.value) // with Promise
        .then(function (response) {
            console.log(response)
            updatePokemon(response)
        })
}

function updatePokemon(response) {
    document.querySelector('.card-img-top').classList.remove('d-none')
    document.querySelector('.card-img-top').src = response.sprites.front_default
    document.querySelector('.card-img-top').setAttribute('data-shiny-url', response.sprites.front_shiny )
    document.querySelector('.card-title').textContent = response.name;
           
}

document.querySelector('#.card-body .btn').addEventListener('change', changeToShiny)

function changeToShiny() {
    let img = document.querySelector('.card-img-top')
    img.src = img.getAttribute('data-shiny-url')
}
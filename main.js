let url;

document.querySelector('#select-pokemon').addEventListener('change', elegirPokemon)

async function elegirPokemon() {
    cambiarUrl();
    let respuesta = await fetch(url);
    let nArray = await respuesta.json()
    actualizarPokemon(nArray);
}

function cambiarUrl(){
    url = "https://pokeapi.co/api/v2/pokemon/" ;
    url = url + document.querySelector('#select-pokemon').value;
    console.log(url);
}

function actualizarPokemon(response) {
    document.querySelector('.card-img-top').classList.remove('d-none')
    document.querySelector('.card-img-top').src = response.sprites.front_default
    document.querySelector('.card-img-top').setAttribute('data-shiny-url', response.sprites.front_shiny )
    document.querySelector('.card-title').textContent = response.name;
           
}

document.querySelector('.card-body .btn').addEventListener('click', changeToShiny)

function changeToShiny() {
    let img = document.querySelector('.card-img-top')
    img.src = img.getAttribute('data-shiny-url')
}
const pokemonImage = document.getElementById("js--pokemon-image");
let randomNumber = Math.floor(Math.random() * 250);

let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function(response){
        return response.json();
    })
    .then(function(realData){
        pokemonImage.src = realData.sprites.front_default;
    });

const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");

let pokemonGamePlayed = false;

if(pokemonGamePlayed == false){
    catchButton.onclick = function(){
        let catchNumber = Math.floor(Math.random() * 2);
        if(catchNumber === 0){
            pokemonText.innerText = "Pokémon fled!"
        }
        else{
            pokemonText.innerText = "Pokémon Caught!"
        }
        pokemonGamePlayed = true;
    }
}

const text = document.getElementById("js--titel")
const textp = document.getElementById ("js--titel-p")
//json hier

let data = fetch("../data.json").then(
    function(binnenGekomenData){
        return binnenGekomenData.json();
    }).then(
        function(echteData){
            text.innerHTML = echteData.text;
            textp.innerHTML = echteData.text2;
        }
    );


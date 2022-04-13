const pokemonImage = document.getElementById("js--pokemon-image");
let randomNumber = Math.floor(Math.random() * 897 + 1);



let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
.then(function(response){
    return response.json();
})
.then(function(realData){
    console.log(realData);
    pokemonName = realData.name;
    pokemonText.innerText = "A wild pokemon";
    pokemonImage.src = realData.sprites.front_default;
});


const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let pokemonName = "";

let pokemonGamePlayed = false;

const caughtCountertext = document.getElementById("js--caught-counter");
let caughtCounter = 0;
caughtCountertext.innerText = "Pokemon Caught: " + caughtCounter;


catchButton.onclick = function(){
    if(pokemonGamePlayed === false){
        let catchNumber = Math.floor(Math.random() * 2);
        if(catchNumber === 0){
            pokemonText.innerText = "Pokemon Fled!"   
            setTimeout(idkwtfditeigword, 1750); 
        }
    
        else{
            pokemonText.innerText = "Pokemon Caught!"
            caughtCounter
            caughtCounter++;
            caughtCountertext.innerText = "Pokemon Caught: " + caughtCounter;
            setTimeout(idkwtfditeigword, 1750);
        }
        pokemonGamePlayed = true
    }
}

function idkwtfditeigword(){
    randomNumber = Math.floor(Math.random() * 897 + 1);
            console.log(randomNumber);
            fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
            .then(function(response){
                return response.json();
            })
            .then(function(realData){
                console.log(realData);
                pokemonImage.src = realData.sprites.front_default;
                pokemonName = realData.name;
                pokemonText.innerText = "A wild pokemon";
                setTimeout(nieuwepokemon, 750);
            });        
}

function nieuwepokemon(){
    pokemonGamePlayed = false
}

const TitelSerie = document.getElementById("js--arnold-titel");
const BeschrijfingSerie = document.getElementById("js--arnold-beschrijfing");

let dxd = fetch("https://api.tvmaze.com/shows/6482")
.then(function(antwoord){
    return antwoord.json();
})
.then(function(echteData){
    console.log(echteData);
    arnoldnaam = echteData.name;
    arnoldbeschrijfing = echteData.summary;
    TitelSerie.innerText = arnoldnaam;
    BeschrijfingSerie.innerHTML = arnoldbeschrijfing;

    
});

const nameText = document.getElementById("js--name");
const inputField = document.getElementById("js--input");

inputField.onkeyup = function(event) {
    if (event.keyCode === 13) {
        let name = inputField.value;
        let age = fetch("https://api.agify.io/?name=" + name)
        .then(function(response) {
            return response.json();
        })
            .then(function (jsonData) {
                inputField.style.display = "none";
                nameText.innerText = jsonData.age;    
        });
    }
}
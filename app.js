function $(nodo) {
    return document.querySelector(nodo)
};

// Todo lo que llamo para usar
let divPeople = $('.people')

// Variables
let page = 1;

//Fetch

fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(results => results.json())
    .then(data => {
        totalCharacters = data.info.count;
        // totalPage = totalCharacters / 42
        // AllCharacters = data.results
        // $paginaActual.innerHTML = `Pagina Actual ${page}`
        console.log(data.results)
        paintCards(data.results)
    })

    function paintCards (characterPainter) {
        divPeople.innerHTML = ""
        characterPainter.forEach(character => {
                divPeople.innerHTML += `<div class="box">
                    <img src=${character.image} alt=${character.name} />
                    <div class="character">
                        <p>Name: ${character.name}</p>
                        <p>Gender: ${character.gender}</p>
                        <p>Species: ${character.species}</p>
                        <p>Status: ${character.status}</p>
                        <p>Origin: ${character.origin.name}</p>
                        <p>Location: ${character.location.name}</p>                    
                    </div>
                    <div class="more">
                        <a href="#">Ver mas...</a>
                    </div>
                </div> `
         });
    }
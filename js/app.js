const URL_API = "https://hp-api.herokuapp.com/api";

const loadCharacters = () => fetch(URL_API+'/characters/students').then(response => response.json());

const buildCharacter = (element) => {

    let estaVivo = element.alive ? "Vivo" : "Muerto";
    let especie = element.species === 'human' ? "Humano" : "No Humano";
    let url = './descripcion.html?personaje=' + element;

    return `
    <div syle='display:inline'>
        <div class='character'>
            <img src='${element.image}'>
            <p>
                <b>Nombre: ${element.name}</b>
                <br>
                <br>
                <b>Fecha Nac: ${element.dateOfBirth}</b>                
                <br>
                <br>
                ${estaVivo}
                <br>
                <br>
                <a href='${url}' +  id="personaje">Más información </a>
            </p>
            
        </div>
    </div>
  `;
};



const buildCharactersList = (data) => {
    let characterList = document.createElement("div");
    
    if(data.length > 0){
        let allCharacters = '';

        data.map( (element) =>{
            allCharacters+=buildCharacter(element);
        });

        characterList.innerHTML = allCharacters;
    }

    return characterList;
};

const drawCharacters = (data) => {
    let currentCharacters = document.getElementById('characters');
    let newCharacters = buildCharactersList(data);

    currentCharacters.appendChild(newCharacters)
};


loadCharacters().then(data => drawCharacters(data));
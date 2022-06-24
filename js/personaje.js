function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getUrlVars() { 
    var vars = {}; 
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) { 
       vars[key] = value; 
    });
    return vars; 
}

var personaje = getUrlVars()["personaje"];
console.log(personaje);

const buildCharacter = (element) => {

    let estaVivo = element.alive ? "Vivo" : "Muerto";
    let especie = element.species === 'human' ? "Humano" : "No Humano";
    console.log("2");
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
            </p>
            
        </div>
    </div>
  `;
};

const drawCharacters = (data) => {
    console.log("1");
    let currentCharacters = document.getElementById('character');

    currentCharacters.appendChild(newCharacters);
};

drawCharacters(personaje);
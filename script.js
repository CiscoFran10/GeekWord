// Função para criar objetos e guardar dentro de sua lista especifica.

const listFigures = [];
const listFrames = [];

function createObject(image, name, price, type) {
  this.image = image;
  this.name = name;
  this.price = price;
  this.type = type;
  if (this.type === "figure") {
    listFigures.push(this);
  } else {
    listFrames.push(this);
  }
}

// Objetos :

let card1 = new createObject(
  "./assets/img/actions/animewoman.jpg",
  "Lady Bug",
  "R$ 2,000",
  "figure"
);

let card2 = new createObject(
  "./assets/img/actions/dragonballpersonagem.jpg",
  "Goku",
  "R$ 3,500",
  "figure"
);

let card3 = new createObject(
  "./assets/img/actions/starwarspersonagem.jpg",
  "Grogu",
  "R$ 4,500",
  "figure"
);

let card4 = new createObject(
  "./assets/img/painting/clock.jpg",
  "Clock",
  "R$ 1,000",
  "painting"
);

let card5 = new createObject(
  "./assets/img/painting/gamepad.jpg",
  "Gamepad",
  "R$ 1,000",
  "painting"
);

let card6 = new createObject(
  "./assets/img/painting/personagem.jpg",
  "C-3P0",
  "R$ 1,000",
  "painting"
);

let card7 = new createObject(
  "./assets/img/actions/bobbafett.jpg",
  "Bobba Fett",
  "R$ 2,000",
  "figure"
);

let card8 = new createObject(
  "./assets/img/actions/deadpool.jpg",
  "Deadpool",
  "R$ 10,000",
  "figure"
);

let card9 = new createObject(
  "./assets/img/actions/homemaranha.jpg",
  "Spider-Man",
  "R$ 5,000",
  "figure"
);

let card10 = new createObject(
  "./assets/img/actions/warrior.jpg",
  "Warrior",
  "R$ 5,000",
  "figure"
);

let card11 = new createObject(
  "./assets/img/painting/sega.jpg",
  "SEGA",
  "R$ 7,000",
  "painting"
);

let card12 = new createObject(
  "./assets/img/painting/fall.png",
  "The Fall",
  "R$ 5,999",
  "painting"
);

let card13 = new createObject(
  "./assets/img/painting/rose.jpg",
  "Rose",
  "R$ 10,000",
  "painting"
);

let card14 = new createObject(
  "./assets/img/painting/arquitetura.jpg",
  "Arquitetura",
  "R$ 8,000",
  "painting"
);

// Função para criar os cards baseados nos objetos e adiciona-los à sua seção especifica.

const createCardToSection = (section, list) => {
  let sectionList = document.getElementsByClassName(section)[0];

  for (const item of list) {
    let elementoLista = document.createElement("li");

    let imagem = document.createElement("img");
    imagem.setAttribute("src", item.image);
    elementoLista.appendChild(imagem);

    let nome = document.createElement("h2");
    nome.innerText = `${item.name}`;
    elementoLista.appendChild(nome);

    let valor = document.createElement("span");
    valor.innerText = `${item.price}`;
    elementoLista.appendChild(valor);

    elementoLista.classList.add("card");

    sectionList.appendChild(elementoLista);
  }
};

createCardToSection("paintings-list", listFrames);
createCardToSection("action-list", listFigures);

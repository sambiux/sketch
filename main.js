let celdas = 16; 
let estadoJuego = true;

const tablero = document.querySelector(".tablero");
const color = document.querySelector(".color"); 
const tamaño = document.querySelector(".tamaño");
const confirmacion = document.querySelector(".confirmacion"); 



function tabter(size) {
  const totalCeldas = size * size; 
  tablero.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  tablero.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  tablero.innerHTML = ''; 



  for (let i = 0; i < totalCeldas; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

   
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = color.value; 
    });

    tablero.appendChild(cell);
  }
}

  const cell2 = document.querySelector(".again");
  cell2.addEventListener("click", () => {
  estadoJuego = true;
  tabter(celdas);
});

  confirmacion.addEventListener("click", () => {
  const size2 = parseInt(tamaño.value); 

  if (size2 > 0 && size2 <= 100) {
    tabter(size2); 
  } else {
    alert("Please enter a size between 1 and 100.");
  }
});


tabter(celdas);
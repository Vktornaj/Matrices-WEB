// Variables Globales
let matrices = ['A'];
let instancias = [];
// Selectores
const btnAgregar = document.querySelector('#agregar'),
 lista = document.getElementById('lista'),
 inputColumnas = document.getElementById('input-columnas'),
 inputFilas = document.getElementById('input-filas'),
 matriz = document.getElementsByClassName('matriz'),
 entradas = document.getElementsByClassName('input');

// Establecer filas y columnas
let rows = 3, columns = 3;

matriz[0].style.cssText = `grid-template-columns: repeat(${columns}, 1fr);
                                    grid-template-rows: repeat(${rows}, 1fr);`;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        matriz[0].innerHTML += '<input class="input" type="text">';   
        if (columns > 5) {
            entradas[columns * i + j].style.cssText = `font-size: 1rem;`;
        }     
    }
}

inputFilas.addEventListener('change', () => {
   actualizar();
});

inputColumnas.addEventListener('change', () => {
    actualizar();
});

function actualizar() {
    matriz[0].innerHTML = '';
    columns = inputColumnas.value;
    rows = inputFilas.value;
    if (columns > 5) {
        matriz[0].style.cssText = `grid-template-columns: repeat(${columns}, 1fr);
                                    grid-template-rows: repeat(${rows}, 1fr);
                                    column-gap: 0.7rem; row-gap: 0.7rem;`;
    }else {
        matriz[0].style.cssText = `grid-template-columns: repeat(${columns}, 1fr);
                                    grid-template-rows: repeat(${rows}, 1fr);`;
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            matriz[0].innerHTML += '<input class="input" type="text">';   
            if (columns > 5) {
                entradas[columns * i + j].style.cssText = `font-size: 1rem;`;
            }     
        }
    }
}

// Instrucciones
lista.innerHTML += `<p id="matrizA">Matriz ${matrices[0]}</p>`;

btnAgregar.addEventListener('click', () => {
    matrices.push(String.fromCharCode(matrices[matrices.length - 1].charCodeAt() + 1));
    let s = matrices[matrices.length - 1];
    lista.innerHTML += `<p id="matriz${s}">Matriz ${s}</p>`;
});


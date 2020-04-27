// Variables Globales
let matrices = ['A'];
let instancias = [];
let iGraficas = [];

// Clases
class MatrizContenido {
    nFilas;
    nColumnas;
    contenido;
    numeros;

    constructor(nFilas = 0, nColumnas = 0) {
        this.nFilas = nFilas;
        this.nColumnas = nColumnas;
        this.contenido = [];
        for (let i = 0; i < nFilas * nColumnas; i++) {
            this.contenido[i] = 0;
        }
        
    }
     
    llenar() {
        let numeros = document.querySelectorAll('.input');
        for (let i = 0; i < this.nColumnas * this.nFilas; i++) {
            this.contenido[i] = numeros[i].value;
            console.log('Hello');
        }
        console.log(`Llenando ${this.contenido}`);
    }
    
}

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

// Agregar matrices 
lista.innerHTML += `<p id="matrizA">Matriz ${matrices[0]}</p>`;
instancias[matrices.length - 1] = new MatrizContenido(inputFilas.value, inputColumnas.value);
iGraficas.push(document.querySelectorAll('.input')[matrices.length - 1]);
iGraficas[iGraficas.length - 1].addEventListener('click', () => {
    const a = iGraficas.length - 1;
    let contenedor = document.querySelectorAll('.input');
    for (let i = 0; i < columns * rows; i++) {
        
    }
});

btnAgregar.addEventListener('click', () => {
    matrices.push(String.fromCharCode(matrices[matrices.length - 1].charCodeAt() + 1));
    let s = matrices[matrices.length - 1];
    lista.innerHTML += `<p id="matriz${s}">Matriz ${s}</p>`;
    instancias[matrices.length - 1] = new MatrizContenido(inputFilas.value, inputColumnas.value);
    instancias[matrices.length - 2].llenar();
    let contenedores = document.querySelectorAll('.input');
    iGraficas.push(document.querySelectorAll('.input')[matrices.length - 1]);
    for (let i = 0; i < columns * rows; i++) {
        contenedores[i].value = '';
    }
});

// Mostrar matrices


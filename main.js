// Variables Globales
let instancias = [];
let mat = [];
let elementos = [];

// Clases
class Matriz {
    static numero = 0;
    id;
    nFilas;
    nColumnas;
    contenido;

    constructor(nFilas, nColumnas) {
        this.id = String.fromCharCode( 65 + Matriz.numero );
        Matriz.numero++;
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
        }
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

// click al boton AGREGAR
btnAgregar.addEventListener('click', () => {
    
    const num = Matriz.numero;
    mat.push(new Matriz(inputFilas.value, inputColumnas.value));
    const id = mat[num].id;
    elementos[num] = document.createElement('p');
    const text = document.createTextNode(`Matriz ${id}`);
    elementos[num].appendChild(text);
    const padre = document.getElementById('lista');
    padre.insertBefore(elementos[num], null); 
    mat[num].llenar();
    restablecer();
    elementos[num].addEventListener('click', () => {
        mostrarM(mat[num]);
    });

});

// Restablecer Entradas
function restablecer() {
    let contenedores = document.querySelectorAll('.input');
    for (let i = 0; i < columns * rows; i++) {
        contenedores[i].value = '';
    }
}

// Mostrar matrices
function mostrarM(m) {
    inputFilas.value = m.nFilas;
    inputColumnas.value = m.nColumnas;
    actualizar();
    let contenedores = document.querySelectorAll('.input');
    for (let i = 0; i < columns * rows; i++) {
        contenedores[i].value = m.contenido[i];
    }
}
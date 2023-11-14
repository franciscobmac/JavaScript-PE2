
const simuladorDados = {
    historial: [],

    lanzarDado: function () {
        const resultado = Math.floor(Math.random() * 6) + 1;
        this.guardarDados(resultado);
        const resultadoOperado = resultado * 2;
        this.mostrarDados(resultadoOperado); 
    },

    guardarDados: function (resultado) {
        this.historial.push(resultado);
        console.log(`Resultado guardado: ${resultado}`);
    },

    mostrarDados: function (resultado) {
        console.log(`Resultado: ${resultado}`);
    },

    mostrarHistorial: function () {
        console.log(`Historial de Resultados: ${this.historial.join(', ')}`);

        const valorBuscado = parseInt(prompt("Ingrese un valor para buscar en el historial:"));
        const encontrado = this.buscarResultado(valorBuscado);
        if (encontrado) {
            console.log(`El valor ${valorBuscado} se encuentra en el historial.`);
        } else {
            console.log(`El valor ${valorBuscado} no se encuentra en el historial.`);
        }
    },

    buscarResultado: function (valor) {
        return this.historial.includes(valor);
    },

    filtrarResultadosMayoresQue: function (valor) {
        const resultadosFiltrados = this.historial.filter(resultado => resultado > valor);
        console.log(`Resultados mayores que ${valor}: ${resultadosFiltrados.join(', ')}`);
        return resultadosFiltrados;
    }
};


function lanzamientoDeDados() {
    while (true) {
        const opcion = prompt("Seleccione una opción:\n1. Lanzar Dado\n2. Mostrar Historial\n3. Filtrar Resultados\n4. Salir");

        switch (opcion) {
            case '1':
                simuladorDados.lanzarDado();
                break;
            case '2':
                simuladorDados.mostrarHistorial();
                break;
            case '3':
                const valorFiltro = parseInt(prompt("Ingrese un valor para filtrar:"));
                simuladorDados.filtrarResultadosMayoresQue(valorFiltro);
                break;
            case '4':
                console.log("Saliendo del juego");
                return;
            default:
                console.log("Opción inexistente");
        }
    }
}

lanzamientoDeDados();
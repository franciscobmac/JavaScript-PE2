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
        this.actualizarHistorialEnStorage();
        console.log(`Resultado guardado: ${resultado}`);
    },

    mostrarDados: function (resultado) {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = `Resultado: ${resultado}`;
    },

    mostrarHistorial: function () {
        const historialDiv = document.getElementById('resultado');
        historialDiv.textContent = `Historial de Resultados: ${this.historial.join(', ')}`;

        const valorBuscado = parseInt(prompt("Ingrese un valor para buscar en el historial:"));
        const encontrado = this.buscarResultado(valorBuscado);
        if (encontrado) {
            historialDiv.textContent += `\nEl valor ${valorBuscado} se encuentra en el historial.`;
        } else {
            historialDiv.textContent += `\nEl valor ${valorBuscado} no se encuentra en el historial.`;
        }
    },

    buscarResultado: function (valor) {
        return this.historial.includes(valor);
    },

    filtrarResultadosMayoresQue: function (valor) {
        const resultadosFiltrados = this.historial.filter(resultado => resultado > valor);
        const historialDiv = document.getElementById('resultado');
        historialDiv.textContent = `Resultados mayores que ${valor}: ${resultadosFiltrados.join(', ')}`;
        return resultadosFiltrados;
    },

    actualizarHistorialEnStorage: function () {
        localStorage.setItem('historial', JSON.stringify(this.historial));
    },

    cargarHistorialDesdeStorage: function () {
        const historialGuardado = localStorage.getItem('historial');
        if (historialGuardado) {
            this.historial = JSON.parse(historialGuardado);
        }
    }
};

function lanzarDado() {
    simuladorDados.lanzarDado();
}

function mostrarHistorial() {
    simuladorDados.mostrarHistorial();
}

function filtrarResultados() {
    const valorFiltro = parseInt(prompt("Ingrese un valor para filtrar:"));
    simuladorDados.filtrarResultadosMayoresQue(valorFiltro);
}

simuladorDados.cargarHistorialDesdeStorage();
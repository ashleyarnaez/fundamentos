const destinos = {
    "American Airlines": {
        "Nueva York": { img: "imagenes/ny.jpeg", precio: 450 },
        "Miami": { img: "imagenes/miami.jpg", precio: 350 },
        "Los Ángeles": { img: "imagenes/la.jpg", precio: 500 }
    },
    "LATAM Airlines": {
        "Santiago de Chile": { img: "imagenes/sdc.jpg", precio: 400 },
        "Buenos Aires": { img: "imagenes/ba.jpeg", precio: 450 },
        "Lima": { img: "imagenes/lima.jpg", precio: 380 }
    },
    "Emirates": {
        "Dubai": { img: "imagenes/dubai.jpg", precio: 900 },
        "Londres": { img: "imagenes/ldn.jpg", precio: 850 },
        "Tokio": { img: "imagenes/tokyo.jpg", precio: 1000 }
    }
};

// Función para actualizar la lista de destinos según la aerolínea seleccionada
function actualizarDestinos() {
    let aerolineaSeleccionada = document.getElementById("aerolinea").value;
    let destinoSelect = document.getElementById("destino");

    // Limpiar opciones previas
    destinoSelect.innerHTML = "<option value=''>-- Seleccionar Destino --</option>";

    if (aerolineaSeleccionada && destinos[aerolineaSeleccionada]) {
        for (let destino in destinos[aerolineaSeleccionada]) {
            let option = document.createElement("option");
            option.value = destino;
            option.textContent = destino;
            destinoSelect.appendChild(option);
        }
    }
}

// Función para calcular el precio del vuelo y mostrar imagen
function calcularVuelo() {
    let aerolineaSeleccionada = document.getElementById("aerolinea").value;
    let destinoSeleccionado = document.getElementById("destino").value;
    let imagenDestino = document.getElementById("imagenDestino");
    let precioVuelo = document.getElementById("precioVuelo");
    let destinoContainer = document.getElementById("destinoContainer");

    if (!aerolineaSeleccionada || !destinoSeleccionado) {
        Swal.fire({
            icon: "error",
            title: "Selección Incompleta",
            text: "Por favor, seleccione una aerolínea y un destino.",
        });
        return;
    }

    let datosDestino = destinos[aerolineaSeleccionada][destinoSeleccionado];

    if (datosDestino) {
        imagenDestino.src = datosDestino.img;
        precioVuelo.textContent = `Precio Estimado: $${datosDestino.precio}`;

        // Mostrar la columna del destino seleccionado solo cuando se ha calculado
        destinoContainer.style.display = "block";

        Swal.fire({
            title: "¡Vuelo Calculado!",
            text: `Vuelo con ${aerolineaSeleccionada} a ${destinoSeleccionado}. Precio estimado: $${datosDestino.precio}`,
            icon: "success",
        });
    }
}

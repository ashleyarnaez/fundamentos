document.addEventListener("DOMContentLoaded", function () {
    actualizarListaPlatillos();
});

function agregarPlatillo() {
    let nombre = document.getElementById("nombrePlatillo").value;
    let ingredientes = document.getElementById("ingredientes").value;
    let precio = document.getElementById("precio").value;

    if (!nombre || !ingredientes || !precio) {
        Swal.fire({
            icon: "error",
            title: "Campos Vacíos",
            text: "Por favor, completa todos los campos antes de agregar el platillo.",
        });
        return;
    }

    let platillos = JSON.parse(localStorage.getItem("platillos")) || [];
    platillos.push({ nombre, ingredientes, precio });
    localStorage.setItem("platillos", JSON.stringify(platillos));

    Swal.fire({
        icon: "success",
        title: "Platillo Agregado",
        text: `${nombre} se ha agregado correctamente.`,
    });

    actualizarListaPlatillos();
}

// Función para actualizar el combo de platillos
function actualizarListaPlatillos() {
    let platilloSelect = document.getElementById("platilloSelect");
    platilloSelect.innerHTML = `<option value="">Seleccione un platillo</option>`;

    let platillos = JSON.parse(localStorage.getItem("platillos")) || [];

    platillos.forEach((platillo, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.textContent = platillo.nombre;
        platilloSelect.appendChild(option);
    });
}

// Función para mostrar los detalles de un platillo seleccionado
function mostrarPlatillo() {
    let platilloSelect = document.getElementById("platilloSelect");
    let detallePlatillo = document.getElementById("detallePlatillo");

    let platillos = JSON.parse(localStorage.getItem("platillos")) || [];
    let selectedIndex = platilloSelect.value;

    if (selectedIndex === "") {
        Swal.fire({
            icon: "warning",
            title: "Sin Selección",
            text: "Por favor, selecciona un platillo para ver sus detalles.",
        });
        return;
    }

    let platillo = platillos[selectedIndex];

    detallePlatillo.innerHTML = `
        <h3>${platillo.nombre}</h3>
        <p><strong>Ingredientes:</strong> ${platillo.ingredientes}</p>
        <p><strong>Precio:</strong> $${platillo.precio}</p>
    `;

    Swal.fire({
        title: platillo.nombre,
        html: `<strong>Ingredientes:</strong> ${platillo.ingredientes}<br>
               <strong>Precio:</strong> $${platillo.precio}`,
    });
}

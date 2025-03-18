// Función para registrar un voto
function registrarVoto() {
    let nombre = document.getElementById("nombre").value.trim();
    let cedula = document.getElementById("cedula").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let nacimiento = document.getElementById("nacimiento").value;
    let destino = document.getElementById("destino").value;
    let reporteContainer = document.getElementById("reporteContainer");

    if (!nombre || !cedula || !correo || !nacimiento || !destino) {
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Por favor, complete todos los campos antes de votar.",
        });
        return;
    }

    let votos = JSON.parse(localStorage.getItem("votos")) || [];
    votos.push({ nombre, cedula, correo, nacimiento, destino });
    localStorage.setItem("votos", JSON.stringify(votos));

    Swal.fire({
        icon: "success",
        title: "Voto registrado",
        text: `Gracias, ${nombre}. Has votado por ${destino}.`,
    });

    // Mostrar el reporte de votos después del primer voto
    reporteContainer.style.display = "block";

    limpiarFormulario();
}

// Función para limpiar el formulario después de votar
function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("cedula").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("nacimiento").value = "";
    document.getElementById("destino").value = "";
}

// Función para mostrar el reporte de votos
function mostrarReporte() {
    let votos = JSON.parse(localStorage.getItem("votos")) || [];
    let reporteVotos = document.getElementById("reporteVotos");

    if (votos.length === 0) {
        Swal.fire({
            icon: "info",
            title: "Sin votos",
            text: "Aún no se han registrado votos.",
        });
        reporteVotos.innerHTML = "";
        return;
    }

    let reporteHTML = "<h5>Votos Registrados</h5><ul class='list-group'>";
    votos.forEach((voto, index) => {
        reporteHTML += `
            <li class="list-group-item">
                <strong>${index + 1}. ${voto.nombre}</strong><br>
                Cédula: ${voto.cedula} <br>
                Correo: ${voto.correo} <br>
                Nacimiento: ${voto.nacimiento} <br>
                Destino Votado: ${voto.destino}
            </li>
        `;
    });
    reporteHTML += "</ul>";

    reporteVotos.innerHTML = reporteHTML;
}

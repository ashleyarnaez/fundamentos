const empleados = {
    "109110338": {
        nombre: "Juan",
        apellidos: "Pérez González",
        lugar: "San José, Costa Rica",
        regimen: "Contributivo",
        anioIngreso: "2015",
        departamento: "Finanzas",
        foto: "imagenes/emp1.jpg"
    },
    "209110338": {
        nombre: "Ana",
        apellidos: "Ramírez López",
        lugar: "Heredia, Costa Rica",
        regimen: "Contributivo",
        anioIngreso: "2018",
        departamento: "Recursos Humanos",
        foto: "imagenes/emp2.jpg"
    },
    "309110338": {
        nombre: "Carlos",
        apellidos: "Gómez Sánchez",
        lugar: "Cartago, Costa Rica",
        regimen: "No Contributivo",
        anioIngreso: "2020",
        departamento: "IT",
        foto: "imagenes/emp3.jpg"
    },
    "409110338": {
        nombre: "María",
        apellidos: "Fernández Rojas",
        lugar: "Alajuela, Costa Rica",
        regimen: "Contributivo",
        anioIngreso: "2017",
        departamento: "Marketing",
        foto: "imagenes/emp4.jpg"
    },
    "509110338": {
        nombre: "Luis",
        apellidos: "Rodríguez Castro",
        lugar: "Puntarenas, Costa Rica",
        regimen: "No Contributivo",
        anioIngreso: "2016",
        departamento: "Ventas",
        foto: "imagenes/emp5.jpg"
    }
};

// Función para buscar empleado
function buscarEmpleado() {
    let cedula = document.getElementById("cedulaInput").value.trim();
    let resultadoEmpleado = document.getElementById("resultadoEmpleado");
    let infoEmpleadoContainer = document.getElementById("infoEmpleadoContainer");

    // Ocultar la columna de información antes de realizar una búsqueda
    infoEmpleadoContainer.style.display = "none";
    resultadoEmpleado.innerHTML = "";

    if (!cedula) {
        Swal.fire({
            icon: "warning",
            title: "Campo vacío",
            text: "Por favor, ingrese una cédula para buscar.",
        });
        return;
    }

    if (empleados[cedula]) {
        let emp = empleados[cedula];

        resultadoEmpleado.innerHTML = `
            <h3>${emp.nombre} ${emp.apellidos}</h3>
            <p><strong>Lugar:</strong> ${emp.lugar}</p>
            <p><strong>Régimen:</strong> ${emp.regimen}</p>
            <p><strong>Año de Ingreso:</strong> ${emp.anioIngreso}</p>
            <p><strong>Departamento:</strong> ${emp.departamento}</p>
            <img src="${emp.foto}" alt="${emp.nombre}">
        `;

        infoEmpleadoContainer.style.display = "block";

        Swal.fire({
            title: "Empleado Encontrado",
            text: `Información de ${emp.nombre} ${emp.apellidos}`,
            icon: "success",
        });
    } else {
        Swal.fire({
            title: "Empleado No Encontrado",
            text: "El usuario NO existe en la base de datos.",
            icon: "error",
        });
    }
}

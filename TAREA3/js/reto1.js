document.addEventListener("DOMContentLoaded", function () {
    const facturaBtn = document.getElementById("facturar");
    const borrarBtn = document.getElementById("borrar");

    facturaBtn.addEventListener("click", function () {
        const cliente = document.getElementById("cliente").value.trim();
        const articulo = document.getElementById("articulo").value.trim();
        const cantidad = parseInt(document.getElementById("cantidad").value);
        const precio = parseFloat(document.getElementById("precio").value);

        if (!cliente || !articulo || isNaN(cantidad) || isNaN(precio) || cantidad <= 0 || precio <= 0) {
            Swal.fire({
                icon: "error",
                title: "Datos inválidos",
                text: "Por favor, ingrese valores correctos en todos los campos.",
                confirmButtonText: "Entendido",
            });
            return;
        }

        const subtotal = cantidad * precio;
        const iva = subtotal * 0.13;
        const servicio = subtotal * 0.05;
        const totalPagar = subtotal + iva + servicio;

        document.getElementById("resCliente").textContent = cliente;
        document.getElementById("resArticulo").textContent = articulo;
        document.getElementById("resCantidad").textContent = cantidad;
        document.getElementById("resPrecio").textContent = `₡${precio.toLocaleString()}`;
        document.getElementById("resSubtotal").textContent = `₡${subtotal.toLocaleString()}`;
        document.getElementById("resIVA").textContent = `₡${iva.toLocaleString()}`;
        document.getElementById("resServicio").textContent = `₡${servicio.toLocaleString()}`;
        document.getElementById("resTotal").textContent = `₡${totalPagar.toLocaleString()}`;

        document.getElementById("facturaResultado").style.display = "block";

        Swal.fire({
            icon: "success",
            title: "Factura generada",
            text: "La factura se ha generado correctamente.",
            confirmButtonText: "Aceptar",
        });
    });

    borrarBtn.addEventListener("click", function () {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Se eliminarán todos los datos ingresados.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Sí, borrar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                document.getElementById("cliente").value = "";
                document.getElementById("articulo").value = "";
                document.getElementById("cantidad").value = "";
                document.getElementById("precio").value = "";
                document.getElementById("facturaResultado").style.display = "none";

                Swal.fire({
                    icon: "success",
                    title: "Datos borrados",
                    text: "Todos los campos han sido limpiados.",
                    confirmButtonText: "Aceptar",
                });
            }
        });
    });

    const fechaElemento = document.getElementById("fechaFactura");
    const fechaActual = new Date().toLocaleString();
    fechaElemento.textContent = fechaActual;
});

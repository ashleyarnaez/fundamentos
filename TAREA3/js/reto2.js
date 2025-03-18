// Convertir de dólares a colones
function convertirDolares() {
    let monto = parseFloat(document.getElementById('montoDolares').value);
    let tipoCambio = parseFloat(document.getElementById('tipoCambioDolares').value);
    
    if (isNaN(monto) || isNaN(tipoCambio) || monto <= 0 || tipoCambio <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese valores válidos para la conversión.',
        });
        return;
    }

    let resultado = monto * tipoCambio;
    document.getElementById('resultadoDolares').value = resultado.toFixed(2) + " ₡";

    Swal.fire({
        icon: 'success',
        title: 'Conversión exitosa',
        text: `El resultado es ${resultado.toFixed(2)} colones.`,
    });
}

// Convertir de colones a dólares
function convertirColones() {
    let monto = parseFloat(document.getElementById('montoColones').value);
    let tipoCambio = parseFloat(document.getElementById('tipoCambioColones').value);
    
    if (isNaN(monto) || isNaN(tipoCambio) || monto <= 0 || tipoCambio <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese valores válidos para la conversión.',
        });
        return;
    }

    let resultado = monto / tipoCambio;
    document.getElementById('resultadoColones').value = resultado.toFixed(2) + " $";

    Swal.fire({
        icon: 'success',
        title: 'Conversión exitosa',
        text: `El resultado es ${resultado.toFixed(2)} dólares.`,
    });
}

// Limpiar campos
function limpiarCampos(montoId, tipoCambioId, resultadoId) {
    document.getElementById(montoId).value = "";
    document.getElementById(tipoCambioId).value = "";
    document.getElementById(resultadoId).value = "";

    Swal.fire({
        icon: 'info',
        title: 'Campos limpiados',
        text: 'Los valores han sido restablecidos.',
    });
}

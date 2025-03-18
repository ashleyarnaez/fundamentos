function redireccionar() {
    let select = document.getElementById("albumSelect");
    let url = select.value;

    if (url) {
        Swal.fire({
            title: "Redirigiendo...",
            text: "Serás enviado a la página de compra del álbum seleccionado.",
            icon: "info",
            showConfirmButton: false,
            timer: 2000
        });

        setTimeout(() => {
            window.location.href = url;
        }, 2000);
    }
}

function cambiarColor(color) {
    let carImage = document.getElementById("carImage");
    let colorName = document.getElementById("colorName");

    let colores = {
        "white": { img: "imagenes/white.png", nombre: "Snow White Pearl" },
        "black": { img: "imagenes/black.png", nombre: "Aurora Black Pearl" },
        "green": { img: "imagenes/red.png", nombre: "Fiery Red" },
        "blue": { img: "imagenes/blue.png", nombre: "Wave Blue" },
        "gray": { img: "imagenes/gray.png", nombre: "Steel Gray" }
    };

    if (colores[color]) {
        carImage.src = colores[color].img;
        colorName.textContent = colores[color].nombre;

        Swal.fire({
            title: "Color seleccionado",
            text: `Has seleccionado el color: ${colores[color].nombre}`,
            icon: "success",
            confirmButtonText: "OK"
        });
    }
}

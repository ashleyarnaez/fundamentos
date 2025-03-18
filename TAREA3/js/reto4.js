function mostrarAlbum() {
    let albumSelect = document.getElementById("albumSelect");
    let albumDescripcion = document.getElementById("albumDescripcion");
    let albumImagen = document.getElementById("albumImagen");

    let albumes = {
        "folklore": {
            descripcion: "Folklore (2020) es el octavo álbum de estudio de la cantante estadounidense Taylor Swift. Fue un álbum sorpresa, lanzado el 24 de julio de 2020. Con la producción y composición a manos de la propia Swift, Jack Antonoff y Aaron Dessner, el álbum se aparta de los sonidos mainstream y más comerciales de los últimos trabajos de la cantante y se destaca por melodías armónicas e introspectivas, una interpretación lírica más trabajada y una utilización más consistente de la instrumentalización (principalmente piano, guitarra, violín y batería). El proyecto según se adentra a géneros poco explorados anteriormente por la artista, como el indie folk, el rock alternativo y el electro-folk, slo que implicó un nuevo cambio de sonido y estética para la cantante.",
            imagen: "imagenes/fk.jpg"
        },
        "evermore": {
            descripcion: "Evermore (2020) es el noveno álbum de estudio de la cantautora estadounidense Taylor Swift. Fue lanzado el 11 de diciembre de 2020, menos de cinco meses después del octavo álbum de estudio de Swift, Folklore (2020). Producto de la extensa colaboración de Swift con su productor de Folklore, Aaron Dessner, Evermore es una secuela conceptual de su predecesor, siendo ambos álbumes sorpresa anunciados horas antes de su lanzamiento. Swift describió Evermore como un disco hermano de Folklore.",
            imagen: "imagenes/em.jpg"
        },
        "midnights": {
            descripcion: "Midnights (2022) es el décimo álbum de estudio de la cantautora estadounidense Taylor Swift. El álbum se lanzó el 21 de octubre de 2022 a través de Republic Records. Anunciado en los MTV Video Music Awards de 2022, el álbum marca el primer trabajo nuevo de Swift desde sus álbumes de 2020, Folklore y Evermore. Midnights es un álbum conceptual sobre la contemplación nocturna, escrito y producido por Swift con Jack Antonoff como principal colaborador.",
            imagen: "imagenes/mns.jpg"
        },
        "ttpd": {
            descripcion: "The Tortured Poets Department (2024) en español: «El departamento de poetas torturados»— también abreviado como TTPD, es el undécimo álbum de estudio de la cantautora estadounidense Taylor Swift, lanzado el 19 de abril de 2024 a través de Republic Records. La versión estándar del álbum incluye dieciséis canciones, mientras que la versión extendida The Anthology —en castellano: «La Antología»— presenta un total de treinta y una canciones, convirtiéndolo en un doble álbum. Además, se lanzaron cuatro ediciones especiales en formato físico, cada una con una pista exclusiva titulada «The Manuscript», «The Bolter», «The Albatross» o «The Black Dog», que corresponden a las quince canciones adicionales de la versión extendida.",
            imagen: "imagenes/ttpd.jpg"
        }
    };

    let seleccion = albumSelect.value;
    
    if (seleccion) {
        albumDescripcion.textContent = albumes[seleccion].descripcion;
        albumImagen.src = albumes[seleccion].imagen;
        albumImagen.style.display = "block";

        Swal.fire({
            title: "Álbum seleccionado",
            text: `Has seleccionado '${albumSelect.options[albumSelect.selectedIndex].text}'.`,
            icon: "success",
            confirmButtonText: "OK"
        });

    } else {
        albumDescripcion.textContent = "";
        albumImagen.style.display = "none";
    }
}

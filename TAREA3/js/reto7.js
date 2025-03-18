function mostrarInfo(numero) {
    let productos = {
        1: { titulo: "FRESH Lotus AHA Resurfacing Gentle Serum", descripcion: "Un suero de noche renovador con AHA y extracto de flor de loto que unifica visiblemente la textura, aumenta la luminosidad y reduce la apariencia de manchas oscuras y líneas." },
        2: { titulo: "OLEHENRIKSEN Pout Preserve Hydrating Peptide Lip Treatment", descripcion: "Un tratamiento labial avanzado con péptidos que protegen la piel y manteca de kokum que rellena los labios de forma rápida y visible con hidratación y suaviza las líneas finas." },
        3: { titulo: "CHRISTOPHE ROBIN Cleansing Purifying Scrub with Sea Salt", descripcion: "Este exfoliante de limpieza profunda es un restablecimiento esencial para el cuero cabelludo sensible o graso." },
        4: { titulo: "DIOR BACKSTAGE Eyeshadow Palette", descripcion: "Una paleta de sombras de ojos y primer todo en uno con un primer y ocho tonos combinables en acabados mate y brillantes." },
        5: { titulo: "MILK MAKEUP Hydro Grip Hydrating Makeup Primer", descripcion: "Una prebase de maquillaje en gel de larga duración y galardonada que fija el maquillaje hasta por 12 horas e hidrata con ácido hialurónico y niacinamida para un acabado húmedo." }
    };

    if (productos[numero]) {
        Swal.fire({
            title: productos[numero].titulo,
            text: productos[numero].descripcion,
            icon: "info",
            confirmButtonText: "OK"
        });
    }
}

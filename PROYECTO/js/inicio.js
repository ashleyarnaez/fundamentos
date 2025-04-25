function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-es], [data-en]');
    elements.forEach(el => {
      const translation = el.getAttribute(`data-${lang}`);
      if (translation !== null) {
        el.textContent = translation;
      }
    });
  }
  
  function searchText() {
    let input = document.getElementById('textSearch').value.toLowerCase();
    let paragraphs = document.querySelectorAll('.intro p');
    paragraphs.forEach(p => {
      if (p.innerText.toLowerCase().includes(input)) {
        p.style.display = "";
      } else {
        p.style.display = "none";
      }
    });
  }
  
  function filterImages() {
    let input = document.getElementById('photoSearch').value.toLowerCase();
    let cards = document.querySelectorAll('.image-section .card');
    cards.forEach(card => {
      const img = card.querySelector('img');
      const alt = img.alt.toLowerCase();
      if (alt.includes(input)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  }
  
  const tratamientos = {
    general: {
      "Limpieza Dental": { img: "img/limpieza.jpg", precio: 250 },
      "Resinas Estéticas": { img: "img/resinas.jpg", precio: 300 }
    },
    estetica: {
      "Blanqueamiento Dental": { img: "img/blanqueamiento.jpg", precio: 350 },
      "Carillas de Porcelana": { img: "img/carillas.jpg", precio: 1200 }
    },
    ortodoncia: {
      "Brackets Metálicos": { img: "img/brackets.webp", precio: 2000 },
      "Invisalign": { img: "img/invisalign.webp", precio: 4800 }
    },
    endodoncia: {
      "Tratamiento de Conducto": { img: "img/conducto.jpg", precio: 850 },
      "Retratamiento Endodóntico": { img: "img/retratamiento.jpg", precio: 950 }
    },
    maxilofacial: {
      "Cirugía de Cordales": { img: "img/cordales.avif", precio: 1800 },
      "Colocación de Implantes": { img: "img/implante.jpg", precio: 3500 }
    },
    periodoncia: {
      "Cirugías de Acceso": { img: "img/acceso.jpg", precio: 1100 },
      "Tratamiento de Mantenimiento": { img: "img/mantenimiento.jpg", precio: 600 }
    }
  };
  
  
  function actualizarServicios() {
    const especialidadSeleccionada = document.getElementById("especialidad").value;
    const servicioSelect = document.getElementById("servicio");
  
    servicioSelect.innerHTML = "<option value=''>-- Seleccionar Tratamiento --</option>";
  
    if (especialidadSeleccionada && tratamientos[especialidadSeleccionada]) {
      for (let servicio in tratamientos[especialidadSeleccionada]) {
        let option = document.createElement("option");
        option.value = servicio;
        option.textContent = servicio;
        servicioSelect.appendChild(option);
      }
    }
  }
  
  function calcularServicio() {
    const especialidadSeleccionada = document.getElementById("especialidad").value;
    const servicioSeleccionado = document.getElementById("servicio").value;
  
    const imagenServicio = document.getElementById("imagenServicio");
    const precioServicio = document.getElementById("precioServicio");
    const servicioContainer = document.getElementById("servicioContainer");
  
    if (!especialidadSeleccionada || !servicioSeleccionado) {
      Swal.fire({
        icon: "error",
        title: "Selección Incompleta",
        text: "Por favor, seleccione una especialidad y un tratamiento."
      });
      return;
    }
  
    const datos = tratamientos[especialidadSeleccionada][servicioSeleccionado];
  
    if (datos) {
      imagenServicio.src = datos.img;
      precioServicio.textContent = `Precio Estimado: $${datos.precio.toLocaleString()}`;
      servicioContainer.style.display = "block";
  
      Swal.fire({
        title: "¡Tratamiento Seleccionado!",
        html: `<strong>${servicioSeleccionado}</strong> <br> Especialidad: ${especialidadSeleccionada.charAt(0).toUpperCase() + especialidadSeleccionada.slice(1)} <br> Costo Aproximado: $${datos.precio}`,
        icon: "success"
      });
    }
  }

  const doctores = {
    ana: {
      nombre: "Dra Ana Salazar",
      especialidad: "Odontología General",
      historia: "La Dra. Ana es una profesional dedicada con más de 15 años de experiencia atendiendo pacientes de todas las edades. Especializada en prevención, limpiezas profundas y restauraciones básicas, es conocida por su habilidad para generar confianza y comodidad en pacientes nerviosos. Además, participa activamente en programas de salud bucodental comunitaria.",
      img: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg"
    },
    denis: {
      nombre: "Dr Denis Aguilar",
      especialidad: "Odontología General",
      historia: "Con una carrera de más de una década, el Dr. Denis se ha especializado en resinas estéticas, diagnóstico temprano de caries y tratamientos conservadores. Es un firme creyente de la educación al paciente y dedica tiempo a explicar cada procedimiento con paciencia. En su tiempo libre, colabora con clínicas móviles en zonas rurales.",
      img: "https://images.pexels.com/photos/3777948/pexels-photo-3777948.jpeg"
    },
    daniel: {
      nombre: "Dr Daniel Salazar",
      especialidad: "Periodoncia",
      historia: "Periodoncista con sólida formación clínica, el Dr. Daniel se enfoca en el diagnóstico y tratamiento de enfermedades de las encías, injertos y cirugías de acceso. Ha sido parte de investigaciones sobre regeneración ósea guiada y ofrece tratamientos mínimamente invasivos para pacientes con periodontitis avanzada.",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    lucia: {
      nombre: "Dra Lucía Vargas",
      especialidad: "Odontología Estética",
      historia: "Con un ojo estético refinado, la Dra. Lucía ha transformado sonrisas mediante blanqueamientos, carillas y remodelaciones dentales. Se mantiene al día con las últimas tecnologías en cosmética dental y es reconocida por brindar resultados armónicos y naturales. También ha dictado conferencias sobre estética dental en eventos internacionales.",
      img: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg"
    },
    carlos: {
      nombre: "Dr Carlos Méndez",
      especialidad: "Ortodoncia",
      historia: "El Dr. Carlos cuenta con más de 10 años de experiencia en ortodoncia fija y removible. Es proveedor certificado de Invisalign y ha trabajado con adolescentes y adultos por igual. Su enfoque va más allá del alineamiento dental: busca mejorar la funcionalidad y la autoestima del paciente a través de una sonrisa equilibrada.",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    },
    paola: {
      nombre: "Dra Paola Ríos",
      especialidad: "Endodoncia",
      historia: "La Dra. Paola es endodoncista exclusiva con una alta tasa de éxito en tratamientos de conducto, retratamientos y traumas dentales. Utiliza técnicas avanzadas como localizadores apicales, sistemas rotatorios y lupas de aumento para mayor precisión. Su prioridad es salvar piezas dentales y eliminar el dolor sin causar ansiedad.",
      img: "https://images.pexels.com/photos/3184402/pexels-photo-3184402.jpeg"
    },
    hector: {
      nombre: "Dr Héctor Navarro",
      especialidad: "Cirugía Maxilofacial",
      historia: "El Dr. Héctor es un cirujano oral y maxilofacial con formación hospitalaria y experiencia en intervenciones complejas como extracciones quirúrgicas, colocación de implantes y cirugías reconstructivas. Atiende tanto casos funcionales como estéticos y colabora con especialistas en rehabilitación oral y ortodoncia para planes integrales.",
      img: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg"
    }
  };

  document.getElementById("doctor").addEventListener("change", () => {
    const seleccionado = document.getElementById("doctor").value;
    const infoBox = document.getElementById("doctorInfo");

    if (!seleccionado || !doctores[seleccionado]) {
      infoBox.style.display = "none";
      return;
    }

    const doctor = doctores[seleccionado];
    document.getElementById("doctorImg").src = doctor.img;
    document.getElementById("doctorNombre").textContent = doctor.nombre;
    document.getElementById("doctorEspecialidad").textContent = doctor.especialidad;
    document.getElementById("doctorHistoria").textContent = doctor.historia;

    infoBox.style.display = "block";
  });


function irARedSocial() {
  const url = document.getElementById("redSocial").value;
  if (url) {
    window.open(url, "_blank");
  }
}

function opciones(evt, info) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(info).style.display = "block";
  evt.currentTarget.className += " active";
}

// FORMULARIO ENCUESTA

function evaluarEncuesta() {
  const emailUsuario = document.getElementById("emailUsuario").value.trim();
  const r1 = document.getElementById("r1").value.trim();
  const r2 = document.getElementById("r2").value.trim();

  let opinion = "";
  document.getElementsByName("opinion").forEach(r => {
    if (r.checked) opinion = r.value;
  });

  let calidad = "";
  document.getElementsByName("opinion2").forEach(r => {
    if (r.checked) calidad = r.value;
  });

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValido.test(emailUsuario)) {
    Swal.fire({
      icon: "error",
      title: "Correo inválido",
      text: "Por favor ingresá un correo electrónico válido.",
    });
    return;
  }

  if (!r1 || !r2 || !opinion || !calidad) {
    Swal.fire({
      icon: "warning",
      title: "¡Campos incompletos!",
      text: "Por favor, completá todas las preguntas obligatorias."
    });
    return;
  }

  // Datos del formulario a enviar
  const params = {
    email: emailUsuario, 
    r1: r1,
    r2: r2,
    opinion: opinion,
    opinion2: calidad,
    eficacia: document.getElementById("eficacia").checked ? "Sí" : "No",
    presentacion: document.getElementById("presentacion").checked ? "Sí" : "No",
    precio: document.getElementById("precio").checked ? "Sí" : "No",
    origen: [
      document.getElementById("instagram").checked ? "Instagram" : "",
      document.getElementById("facebook").checked ? "Facebook" : "",
      document.getElementById("web").checked ? "Sitio Web" : "",
      document.getElementById("recomendacion").checked ? "Recomendación" : "",
      document.getElementById("otro").checked ? "Otro" : ""
    ].filter(Boolean).join(", ")
  };

  
  emailjs.send("service_7pmo0ze", "template_cav5l6z", params)
  .then(function () {
    Swal.fire({
      title: "¡Encuesta enviada!",
      html: "<iframe src='https://embed.lottiefiles.com/animation/123492' width='440' height='380'></iframe>",
      confirmButtonText: "Aceptar"
    });

    document.getElementById("res0").textContent = "¡Gracias por tus respuestas!";
    document.getElementById("res1").textContent = "";
    document.getElementById("res2").textContent = "";
    document.getElementById("res3").textContent = "";

  }, function (error) {
    console.error("EmailJS error:", error);
    Swal.fire({
      icon: "error",
      title: "Error al enviar",
      text: "No se pudo enviar la encuesta. Por favor, intentá de nuevo más tarde."
    });
  });

}


function limpiarFormulario() {
  document.getElementById("r1").value = "";
  document.getElementById("r2").value = "";

  document.getElementsByName("opinion").forEach(r => r.checked = false);
  document.getElementsByName("opinion2").forEach(r => r.checked = false);

  ["eficacia", "presentacion", "precio", "instagram", "facebook", "web", "recomendacion", "otro"]
    .forEach(id => document.getElementById(id).checked = false);

  document.getElementById("res0").textContent = "";
  document.getElementById("res1").textContent = "";
  document.getElementById("res2").textContent = "";
  document.getElementById("res3").textContent = "";
}

// FIN FORMULARIO ENCUESTA


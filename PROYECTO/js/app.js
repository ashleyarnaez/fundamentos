let doctores = {};
let tratamientos = {};
const horasDisponibles = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

const especialidad = document.getElementById('especialidad');
const doctor = document.getElementById('doctor');
const tratamiento = document.getElementById('tratamiento');
const fecha = document.getElementById('fecha');
const hora = document.getElementById('hora');
const form = document.getElementById('form-cita');

fetch('js/citas.json')
  .then(res => res.json())
  .then(data => {
    doctores = data.doctores;
    tratamientos = data.tratamientos;

    Object.keys(doctores).forEach(especialidadName => {
      const opt = document.createElement('option');
      opt.value = especialidadName;
      opt.textContent = capitalizar(especialidadName);
      especialidad.appendChild(opt);
    });
  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error al cargar datos',
      text: 'No se pudo cargar la base de datos.'
    });
  });

especialidad.addEventListener('change', () => {
  const seleccion = especialidad.value;

  doctor.innerHTML = `<option selected disabled>Selecciona un doctor</option>`;
  if (doctores[seleccion]) {
    doctores[seleccion].forEach(nombre => {
      const opt = document.createElement('option');
      opt.value = nombre;
      opt.textContent = nombre;
      doctor.appendChild(opt);
    });
  }

  tratamiento.innerHTML = `<option selected disabled>Selecciona un tratamiento</option>`;
  if (tratamientos[seleccion]) {
    tratamientos[seleccion].forEach(item => {
      const opt = document.createElement('option');
      opt.value = item;
      opt.textContent = item;
      tratamiento.appendChild(opt);
    });
  }
});

fecha.addEventListener('change', () => {
  hora.innerHTML = `<option selected disabled>Selecciona una hora</option>`;
  horasDisponibles.forEach(h => {
    const opt = document.createElement('option');
    opt.value = h;
    opt.textContent = h;
    hora.appendChild(opt);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const espec = especialidad.value;
  const doc = doctor.value;
  const trat = tratamiento.value;
  const fechaSel = fecha.value;
  const horaSel = hora.value;

  if (!nombre || !email || !espec || !doc || !trat || !fechaSel || !horaSel) {
    Swal.fire({
      icon: 'error',
      title: 'Campos incompletos',
      text: 'Por favor, completa todos los campos.'
    });
    return;
  }

  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoValido.test(email)) {
    Swal.fire({
      icon: 'error',
      title: 'Correo inválido',
      text: 'Por favor ingresa un correo electrónico válido.'
    });
    return;
  }


  Swal.fire({
    icon: 'success',
    title: '¡Cita confirmada!',
    html: `
      <b>${nombre}</b>, tu cita para <b>${trat}</b> con <b>${doc}</b> está agendada para el <b>${fechaSel}</b> a las <b>${horaSel}</b>.<br>
      Se enviará una confirmación a <b>${email}</b>.
    `
  });

  const emailParams = {
    nombre,
    email,
    especialidad: espec,
    doctor: doc,
    tratamiento: trat,
    fecha: fechaSel,
    hora: horaSel
  };

  emailjs.send("service_3qynh3i", "template_0sh67fr", emailParams)
    .then(() => {
      console.log("Correo enviado con éxito.");
    })
    .catch((error) => {
      console.error("Error al enviar el correo:", error);
      Swal.fire({
        icon: 'warning',
        title: 'Cita agendada, pero sin confirmación por correo',
        text: 'No se pudo enviar el email automático.'
      });
    });

  form.reset();
  doctor.innerHTML = `<option selected disabled>Selecciona un doctor</option>`;
  tratamiento.innerHTML = `<option selected disabled>Selecciona un tratamiento</option>`;
  hora.innerHTML = `<option selected disabled>Selecciona una hora</option>`;
});

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
